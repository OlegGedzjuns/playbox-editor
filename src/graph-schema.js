import { EDGES, NODES } from "./constants.js";

export const graphSchema = {
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
            ]
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
        },
        [NODES.GRAPH_TRANSMITTER]: {
            name: 'graphTransmitter',
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
            contextMenuItems: [
                {
                    text: 'Delete',
                    action: 'EVENT_DELETE_NODE'
                }
            ],
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
            contextMenuItems: [
                {
                    text: 'Delete',
                    action: 'EVENT_DELETE_NODE'
                }
            ]
        },
        [NODES.COLLISION_START]: {
            name: 'collisionStart',
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
            contextMenuItems: [
                {
                    text: 'Delete',
                    action: 'EVENT_DELETE_NODE'
                }
            ],
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