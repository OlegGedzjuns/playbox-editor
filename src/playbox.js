console.log('PLAYBOX');

const EDGES = {
    BASE: 0,
};

const NODES = {
    START: 0,
    INTERVAL: 1,
    TRANSLATE: 2,
};

const styleString = `
		.playbox > .content {
			left: 0 !important;
			top: 0 !important;
			width: 100% !important;
			height: 100% !important;
		}
		
		.playbox > .content > .container > .content {
			height: 100vh !important;
			width: 100vw !important;
			display: grid;
			grid-template-areas: 'components graph graph graph'
		}
		
		.playbox-graph {
			grid-area: graph;
			width: auto !important;
		}
		
		.playbox-components-menu {
			background-color: red;
			height: 100%;
			grid-area: components;
			z-index: 0;
		}
	`;

const PLAYBOX = {
    graph: null,
    data: null,
};

var styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styleString;
document.head.appendChild(styleSheet);

const toolbar = editor.call('layout.toolbar');

const button = new ui.Button({
    text: '&#58386;',
});
button.class.add('pc-icon');
button.on('click', () => editor.call('playbox'));
toolbar.append(button);

Tooltip.attach({
    target: button.element,
    text: 'Playbox',
    align: 'left',
    root: editor.call('layout.root'),
});

const root = editor.call('layout.root');

const overlay = new ui.Overlay();
overlay.class.add('help-controls');
overlay.class.add('playbox');
overlay.style.zIndex = 204;
overlay.center = true;
overlay.hidden = true;

// header
const header = new ui.Label({
    unsafe: true,
    text: '<span class="icon">&#58386;</span>Playbox',
});
header.class.add('header');
overlay.append(header);

// close
const btnClose = new ui.Button();
btnClose.class.add('close');
btnClose.text = '&#57650;';
btnClose.on('click', function () {
    overlay.hidden = true;
});
header.element.appendChild(btnClose.element);

const container = new ui.Panel();
container.class.add('container');
overlay.append(container);

root.append(overlay);

const componentsMenu = document.createElement('div');
componentsMenu.classList.add('playbox-components-menu');
container.prepend(componentsMenu);

editor.method('playbox', function () {
    const asset = editor.call('selector:items')[0];

    const fileUrl = asset.get('file.url');
    const fileHash = asset.get('file.hash');

    this._request = Ajax({
        url: '{{url.home}}' + fileUrl.appendQuery('t=' + fileHash),
        notJson: this._assetType !== 'json',
    }).on('load', (_, r) => {
        PLAYBOX.data = JSON.parse(r);
		
        const animSchema = {
            edges: {
                [EDGES.BASE]: {
                    stroke: '#0379EE',
                    strokeWidth: 1,
                    targetMarker: true,
                    contextMenuItems: [],
                },
            },
            nodes: {
                [NODES.START]: {
                    name: 'startState',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    icon: '',
                    iconColor: '#14CC47',
                    stroke: '#20292b',
                    contextMenuItems: [
                        {
                            text: 'Add transition',
                            action: 'EVENT_ADD_EDGE',
                            edgeType: EDGES.BASE,
                        },
                        {
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE',
                        },
                    ],
                },
                [NODES.INTERVAL]: {
                    name: 'interval',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    stroke: '#20292b',
                    icon: '',
                    iconColor: '#FFFFFF',
                    contextMenuItems: [
                        {
                            text: 'Add transition',
                            action: 'EVENT_ADD_EDGE',
                            edgeType: EDGES.BASE,
                        },
                        {
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE',
                        },
                    ],
                    attributes: [
                        {
                            name: 'delay',
                            type: 'NUMERIC_INPUT',
                        },
                    ],
					inPorts: [
						{
							name: 'first',
							edgeType: '0',
							type: '0'
						},
						{
							name: 'second',
							edgeType: '0',
							type: '0'
						}
					],
					outPorts: [
						{
							name: 'first',
							type: '0'
						},
						{
							name: 'second',
							type: '0'
						}
					]
                },
                [NODES.TRANSLATE]: {
                    name: 'translate',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    stroke: '#20292b',
                    icon: '',
                    iconColor: '#FFFFFF',
                    contextMenuItems: [
                        {
                            text: 'Add transition',
                            action: 'EVENT_ADD_EDGE',
                            edgeType: EDGES.BASE,
                        },
                        {
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE',
                        },
                    ],
                    attributes: [
                        {
                            name: 'x',
                            type: 'NUMERIC_INPUT',
                        },
                        {
                            name: 'y',
                            type: 'NUMERIC_INPUT',
                        },
                        {
                            name: 'z',
                            type: 'NUMERIC_INPUT',
                        },
                    ],
					inPorts: [
						{
							name: 'first',
							edgeType: '0',
							type: '0'
						},
						{
							name: 'second',
							edgeType: '0',
							type: '0'
						}
					],
                },
            },
        };

        const menuItems = [
            {
                text: 'Interval',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.INTERVAL,
                attributes: {
                    name: 'New interval',
                    delay: 1000,
                },
            },
            {
                text: 'Translate',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.TRANSLATE,
                attributes: {
                    name: 'New translate',
                    x: 0,
                    y: 0,
                    z: 0,
                },
            },
        ];

        if (PLAYBOX.graph) PLAYBOX.graph.element.remove();

        const graph = document.createElement('div');
        graph.classList.add('playbox-graph');
        graph.setAttribute('style', 'display: block;');
        container.prepend(graph);

        PLAYBOX.graph = new pcuiGraph.Graph({
            dom: graph,
            graphData: PLAYBOX.data,
            graphSchema: animSchema,
            contextMenuItems: menuItems,
            config: {
                adjustVertices: true,
                readOnly: false,
                incrementNodeNames: true,
            },
        });

        PLAYBOX.graph.on('EVENT_ADD_NODE', n => {
			console.log(n);
            PLAYBOX.data.nodes[n.id] = n;
        });
		
		PLAYBOX.graph.on('EVENT_DELETE_NODE', n => {
			console.log(n);
		});
		
		PLAYBOX.graph.on('EVENT_ADD_EDGE', n => {
			console.log(n);
		});
		
		PLAYBOX.graph.on('EVENT_DELETE_EDGE', n => {
			console.log(n);
		});

        overlay.hidden = false;
    });
});
