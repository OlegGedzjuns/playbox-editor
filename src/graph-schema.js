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
            fill: 'rgb(54, 67, 70, 0.8)',
            icon: '',
            iconColor: '#14CC47',
            stroke: '#20292b',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
            contextMenuItems: nodeContextMenu,
        },
        [NODES.COLLISION_START]: {
            name: 'collisionStart',
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
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