console.log('PLAYBOX');

const EDGES = {
    BASE: 0,
};

const NODES = {
    START: 0,
    INTERVAL: 1,
    TRANSLATION: 2,
    SCALE: 3,
    ROTATION: 4,
    TRANSLATE: 5,
    RESIZE: 6,
    ROTATE: 7,
    VISIBILITY: 8,
    PLAYER_CONTROLLER: 9,
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
                    smooth: true,
                    targetMarker: null,
                    contextMenuItems: [
                        {
                            text: 'Delete edge',
                            action: 'EVENT_DELETE_EDGE'
                        }
                    ],
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
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE',
                        },
                    ],
                    attributes: [
                        {
                            name: 'intervalMs',
                            type: 'NUMERIC_INPUT',
                        },
                    ],
					inPorts: [
						{
							name: 'first',
							type: '0',
                            edgeType: '0',
						},
						{
							name: 'second',
							type: '0',
                            edgeType: '0',
						}
					],
					outPorts: [
						{
							name: 'first',
							type: '0',
                            edgeType: '0',
						},
						{
							name: 'second',
							type: '0',
                            edgeType: '0',
						}
					]
                },
                [NODES.TRANSLATION]: {
                    name: 'translation',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    stroke: '#20292b',
                    icon: '',
                    iconColor: '#FFFFFF',
                    contextMenuItems: [
                        {
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE',
                        },
                    ],
                    attributes: [
                        {
                            name: 'direction',
                            type: 'VEC_3_INPUT',
                        },
                    ],
					inPorts: [
						{
							name: 'first',
							type: '0',
                            edgeType: '0',
						},
						{
							name: 'second',
							type: '0',
                            edgeType: '0',
						}
					],
                },
                [NODES.SCALE]: {
                    name: 'scale',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    stroke: '#20292b',
                    icon: '',
                    iconColor: '#FFFFFF',
                    contextMenuItems: [
                        {
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE'
                        }
                    ],
                    attributes: [
                        {
                            name: 'scaleFactor',
                            type: 'VEC_3_INPUT',
                        },
                    ]
                },
                [NODES.ROTATION]: {
                    name: 'rotation',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    stroke: '#20292b',
                    icon: '',
                    iconColor: '#FFFFFF',
                    contextMenuItems: [
                        {
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE'
                        }
                    ],
                    attributes: [
                        {
                            name: 'angularVelocity',
                            type: 'VEC_3_INPUT',
                        },
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
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE'
                        }
                    ],
                    attributes: [
                        {
                            name: 'position',
                            type: 'VEC_3_INPUT',
                        },
                    ]
                },
                [NODES.RESIZE]: {
                    name: 'resize',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    stroke: '#20292b',
                    icon: '',
                    iconColor: '#FFFFFF',
                    contextMenuItems: [
                        {
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE'
                        }
                    ],
                    attributes: [
                        {
                            name: 'scale',
                            type: 'VEC_3_INPUT',
                        }
                    ]
                },
                [NODES.ROTATE]: {
                    name: 'rotate',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    stroke: '#20292b',
                    icon: '',
                    iconColor: '#FFFFFF',
                    contextMenuItems: [
                        {
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE'
                        }
                    ],
                    attributes: [
                        {
                            name: 'angle',
                            type: 'VEC_3_INPUT',
                        }
                    ]
                },
                [NODES.VISIBILITY]: {
                    name: 'visibility',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    stroke: '#20292b',
                    icon: '',
                    iconColor: '#FFFFFF',
                    contextMenuItems: [
                        {
                            text: 'Delete',
                            action: 'EVENT_DELETE_NODE'
                        }
                    ],
                    attributes: [
                        {
                            name: 'visible',
                            type: 'BOOLEAN_INPUT'
                        }
                    ]
                },
                [NODES.PLAYER_CONTROLLER]: {
                    name: 'playerController',
                    fill: 'rgb(54, 67, 70, 0.8)',
                    stroke: '#20292b',
                    icon: '',
                    iconColor: '#FFFFFF',
                    attributes: [
                        {
                            name: 'speed',
                            type: 'NUMERIC_INPUT'
                        }
                    ]
                }
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
                text: 'Translation',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.TRANSLATION,
                attributes: {
                    name: 'New translate',
                    direction: {
                        x: 0,
                        y: 0, 
                        z: 0
                    }
                },
            },
            {
                text: 'Scale',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.SCALE,
                attributes: {
                    name: 'New scale',
                    scaleFactor: {
                        x: 0,
                        y: 0,
                        z: 0,
                    }
                },
            },
            {
                text: 'Rotation',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.ROTATION,
                attributes: {
                    name: 'New rotation',
                    angularVelocity: {
                        x: 0,
                        y: 0,
                        z: 0,
                    }
                },
            },
            {
                text: 'Translate',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.TRANSLATE,
                attributes: {
                    name: 'New translate',
                    position: {
                        x: 0,
                        y: 0,
                        z: 0,
                    }
                },
            },
            {
                text: 'Resize',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.RESIZE,
                attributes: {
                    name: 'New resize',
                    scale: {
                        x: 0,
                        y: 0,
                        z: 0,
                    }
                },
            },
            {
                text: 'Rotate',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.ROTATE,
                attributes: {
                    name: 'New rotate',
                    angle: {
                        x: 0,
                        y: 0,
                        z: 0,
                    }
                },
            },
            {
                text: 'Visibility',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.VISIBILITY,
                attributes: {
                    name: 'New visibility',
                    visible: true,
                },
            },
            {
                text: 'Player controller',
                action: 'EVENT_ADD_NODE',
                nodeType: NODES.PLAYER_CONTROLLER,
                attributes: {
                    name: 'New player controller',
                    speed: 0
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
                incrementNodeNames: false,
            },
        });

        const events = {
            ADD_NODE: "EVENT_ADD_NODE",
            DELETE_NODE: "EVENT_DELETE_NODE",
            SELECT_NODE: "EVENT_SELECT_NODE",
            UPDATE_NODE_POSITION: "EVENT_UPDATE_NODE_POSITION",
            UPDATE_NODE_ATTRIBUTE: "EVENT_UPDATE_NODE_ATTRIBUTE",
            ADD_EDGE: "EVENT_ADD_EDGE",
            DELETE_EDGE: "EVENT_DELETE_EDGE",
            SELECT_EDGE: "EVENT_SELECT_EDGE",
            DESELECT_ITEM: "EVENT_DESELECT_ITEM",
            UPDATE_TRANSLATE: "EVENT_UPDATE_TRANSLATE",
            UPDATE_SCALE: "EVENT_UPDATE_SCALE"
        }

        for (const key in events) {
            PLAYBOX.graph.on(events[key], () => console.log("EVENT: ", key));
        }

        PLAYBOX.graph.on('EVENT_ADD_NODE', n => {
            console.log('EVENT_ADD_NODE: ', n);
            PLAYBOX.data.nodes[n.id] = n;
        });
		
		PLAYBOX.graph.on('EVENT_DELETE_NODE', n => {
            console.log('EVENT_DELETE_NODE: ', n);
            n.edges.forEach(e => delete PLAYBOX.data.edges[e]);
            delete PLAYBOX.data.nodes[n.node.id];
		});
		
		PLAYBOX.graph.on('EVENT_ADD_EDGE', edge => {
            console.log('EVENT_ADD_EDGE: ', edge);
            // for (const [id, e] of Object.entries(PLAYBOX.data.edges)) {
            //     if (e.to === edge.to && e.inPort === edge.inPort) {
            //         delete PLAYBOX.data.edges[id];
            //     }
            // }

            PLAYBOX.data.edges[edge.edgeId] = edge;
		});
		
		PLAYBOX.graph.on('EVENT_DELETE_EDGE', e => {
            console.log('EVENT_DELETE_EDGE: ', e);
            delete PLAYBOX.data.edges[e.edgeId];
		});

        const edge1 = {
            edge: {
                edgeType: 0,
                from: '0',
                to: '1',
                inPort: 0,
                outPort: 0
            },
            edgeId: '3'
        }

        const edge2 = {
            edge: {
                edgeType: 0,
                from: '0',
                to: '1',
                inPort: 1,
                outPort: 1
            },
            edgeId: '3'
        }

        PLAYBOX.graph.createEdge(edge1.edge, edge1.edgeId, false);
        PLAYBOX.graph.createEdge(edge2.edge, edge2.edgeId, false);

        overlay.hidden = false;
    });
});

