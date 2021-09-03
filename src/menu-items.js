import { NODES } from "./constants.js";

export const menuItems = [
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
    {
        text: 'Graph Transmitter',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.GRAPH_TRANSMITTER,
        attributes: {
            name: 'New graph transmitter',
            entityGuid: 0
        },
    },
    {
        text: 'Graph Receiver',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.GRAPH_RECEIVER,
        attributes: {
            name: 'New graph receiver'
        },
    },
    {
        text: 'Bird controller',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.BIRD_CONTROLLER,
        attributes: {
            name: 'New bird controller'
        },
    },
    {
        text: 'Collision start',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.COLLISION_START,
        attributes: {
            name: 'New collision start',
            tag: '',
        }
    },
    {
        text: 'Trigger enter',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.TRIGGER_ENTER,
        attributes: {
            name: 'New trigger enter',
            tag: '',
        }
    },
    {
        text: 'Spawn',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.SPAWN,
        attributes: {
            name: 'New spawn',
            position: {
                x: 0,
                y: 0,
                z: 0,
            }
        },
    },
    {
        text: 'Key Press',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.KEY_PRESS,
        attributes: {
            name: 'New Key Press',
            key: ''
        },
    },
    {
        text: 'Key Release',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.KEY_RELEASE,
        attributes: {
            name: 'New Key Release',
            key: ''
        },
    },
    {
        text: 'Ray Cast',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.RAY_CAST,
        attributes: {
            name: 'New Ray Cast',
        },
    },
    {
        text: 'Self',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.SELF,
        attributes: {
            name: 'New Self'
        }
    },
    {
        text: 'Has Tags',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.SELF,
        attributes: {
            name: 'New Has Tags',
            tags: ''
        }
    },
    {
        text: 'Destroy',
        action: 'EVENT_ADD_NODE',
        nodeType: NODES.DESTROY,
        attributes: {
            name: 'New Destroy'
        }
    }
];