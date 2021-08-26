import { graphSchema } from "./graph-schema.js";
import { menuItems } from "./menu-items.js";

const PLAYBOX = {
    graph: null,
    data: null,
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
    editor.call('selector:clear');

    const fileUrl = asset.get('file.url');
    const fileHash = asset.get('file.hash');

    Ajax({
        url: '{{url.home}}' + fileUrl.appendQuery('t=' + fileHash),
        notJson: asset.type !== 'json',
    }).on('load', (_, r) => {
        PLAYBOX.data = JSON.parse(r);

        if (PLAYBOX.graph) PLAYBOX.graph.element.remove();

        const graphElement = document.createElement('div');
        graphElement.classList.add('playbox-graph');
        graphElement.setAttribute('style', 'display: block;');
        container.prepend(graphElement);

        PLAYBOX.graph = new pcuiGraph.Graph({
            dom: graphElement,
            graphData: PLAYBOX.data,
            graphSchema: graphSchema,
            contextMenuItems: menuItems,
        });

        overlay.hidden = false;
    });
});

