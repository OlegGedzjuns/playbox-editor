const PLAYBOX = {
    graph: null,
    data: null,
};

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
    DELAY: 10,
};

const graphSchema = {
    edges: {
        [EDGES.BASE]: {
            stroke: '#0379EE',
            strokeWidth: 1,
            smoothInOut: true,
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
            outPorts: [
                {
                    name: 'output',
                    type: '0',
                    edgeType: '0',
                }
            ]
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
                {
                    name: 'isRelative',
                    type: 'BOOLEAN_INPUT',
                },
            ],
            inPorts: [
                {
                    name: 'input',
                    type: '0',
                    edgeType: '0',
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: '0',
                    edgeType: '0',
                }
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
            ],
            inPorts: [
                {
                    name: 'input',
                    type: '0',
                    edgeType: '0',
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: '0',
                    edgeType: '0',
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
            ],
            inPorts: [
                {
                    name: 'input',
                    type: '0',
                    edgeType: '0',
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: '0',
                    edgeType: '0',
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
            contextMenuItems: [
                {
                    text: 'Delete',
                    action: 'EVENT_DELETE_NODE'
                }
            ],
            attributes: [
                {
                    name: 'speed',
                    type: 'NUMERIC_INPUT'
                }
            ]
        },
        [NODES.DELAY]: {
            name: 'delay',
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
                    name: 'delayMs',
                    type: 'NUMERIC_INPUT'
                }
            ],
            inPorts: [
                {
                    name: 'input',
                    type: '0',
                    edgeType: '0',
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: '0',
                    edgeType: '0',
                }
            ]
        }
    },
};

const menuItems = [
    {
        text: 'Start',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.START,
        attributes: {
            name: 'START',
        },
    },
    {
        text: 'Interval',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.INTERVAL,
        attributes: {
            name: 'New interval',
            intervalMs: 1000,
        },
    },
    {
        text: 'Translation',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.TRANSLATION,
        attributes: {
            name: 'New translation',
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
            },
            isRelative: false,
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
    {
        text: 'Delay',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.DELAY,
        attributes: {
            name: 'New delay',
            delayMs: 1000
        },
    },
];

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

        if (PLAYBOX.graph) PLAYBOX.graph.element.remove();

        const graph = document.createElement('div');
        graph.classList.add('playbox-graph');
        graph.setAttribute('style', 'display: block;');
        container.prepend(graph);

        PLAYBOX.graph = new pcuiGraph.Graph({
            dom: graph,
            graphData: PLAYBOX.data,
            graphSchema: graphSchema,
            contextMenuItems: menuItems,
        });

        overlay.hidden = false;
    });
});

