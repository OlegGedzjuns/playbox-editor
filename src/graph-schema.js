import { EDGES, NODES } from "./constants.js";

const edgeContextMenu = [
    {
        text: 'Delete edge', 
        action: 'EVENT_DELETE_EDGE'
    }
];

const nodeContextMenu = [
    {
        text: 'Delete node',
        action: 'EVENT_DELETE_NODE'
    }
];

const systemNodeStyle = {
    fill: 'rgb(54, 67, 70, 0.8)',
    stroke: '#7BB31A',
    icon: '',
    iconColor: '#7BB31A',
};

const actionNodeStyle = {
    fill: 'rgb(54, 67, 70, 0.8)',
    stroke: '#FF9C00',
    icon: '',
    iconColor: '#FF9C00',
};

const helperNodeStyle = {
    fill: 'rgb(54, 67, 70, 0.8)',
    stroke: '#8B88FF',
    icon: '',
    iconColor: '#8B88FF',
};

const eventNodeStyle = {
    fill: 'rgb(54, 67, 70, 0.8)',
    stroke: '#EEDB00',
    icon: '',
    iconColor: '#EEDB00',
};

export const graphSchema = {
    edges: {
        [EDGES.BASE]: {
            stroke: '#0379EE',
            strokeWidth: 1,
            smoothInOut: true,
            targetMarker: null,
            contextMenuItems: edgeContextMenu,
        },
    },
    nodes: {
        [NODES.START]: {
            name: 'startState',
            ...systemNodeStyle,
            contextMenuItems: nodeContextMenu,
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
            ...helperNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'intervalMs',
                    type: 'NUMERIC_INPUT',
                },
            ],
            inPorts: [
                {
                    name: 'input',
                    type: '0',
                    edgeType: '0'
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
        [NODES.TRANSLATION]: {
            name: 'translation',
            ...actionNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'direction',
                    type: 'VEC_3_INPUT',
                },
            ]
        },
        [NODES.SCALE]: {
            name: 'scale',
            ...actionNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'scaleFactor',
                    type: 'VEC_3_INPUT',
                },
            ]
        },
        [NODES.ROTATION]: {
            name: 'rotation',
            ...actionNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'angularVelocity',
                    type: 'VEC_3_INPUT',
                },
            ]
        },
        [NODES.TRANSLATE]: {
            name: 'translate',
            ...actionNodeStyle,
            contextMenuItems: nodeContextMenu,
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
            ...actionNodeStyle,
            contextMenuItems: nodeContextMenu,
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
            ...actionNodeStyle,
            contextMenuItems: nodeContextMenu,
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
            ...actionNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'visible',
                    type: 'BOOLEAN_INPUT'
                }
            ]
        },
        [NODES.PLAYER_CONTROLLER]: {
            name: 'playerController',
            ...helperNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'speed',
                    type: 'NUMERIC_INPUT'
                }
            ]
        },
        [NODES.DELAY]: {
            name: 'delay',
            ...helperNodeStyle,
            contextMenuItems: nodeContextMenu,
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
        },
        [NODES.GRAPH_TRANSMITTER]: {
            name: 'graphTransmitter',
            ...helperNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'entityGuid',
                    type: 'TEXT_INPUT'
                }
            ],
            inPorts: [
                {
                    name: 'input',
                    type: '0',
                    edgeType: '0',
                }
            ],
        },
        [NODES.GRAPH_RECEIVER]: {
            name: 'graphReceiver',
            ...helperNodeStyle,
            contextMenuItems: nodeContextMenu,
            outPorts: [
                {
                    name: 'output',
                    type: '0',
                    edgeType: '0',
                }
            ],
        },
        [NODES.BIRD_CONTROLLER]: {
            name: 'birdController',
            ...helperNodeStyle,
            contextMenuItems: nodeContextMenu,
        },
        [NODES.COLLISION_START]: {
            name: 'collisionStart',
            ...eventNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'tag',
                    type: 'TEXT_INPUT'
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
        [NODES.TRIGGER_ENTER]: {
            name: 'triggerEnter',
            ...eventNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'tag',
                    type: 'TEXT_INPUT'
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
        [NODES.SPAWN]: {
            name: 'spawn',
            ...actionNodeStyle,
            contextMenuItems: nodeContextMenu,
            attributes: [
                {
                    name: 'position',
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
    },
};