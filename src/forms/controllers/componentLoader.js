// Source: https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript.
// Source: https://github.com/JeremyLikness/vanillajs-deck/blob/master/js/slideLoader.js (slide loader)
// Source: https://youtu.be/D9avX-jtIPM?t=3316 (fazt)

export const appendComponent = async (componentName, targetNodeId) => {
    try {
        // Gets the html.
        const componentHtml = await getComponentHtml(componentName);

        // Appends the html to the node especified.
        await appendChild(targetNodeId, componentHtml);

    } catch (error) {
        console.log(error);
    }
}

export const appendController = async (controller) => {
    // controller = div with html and js listeners.
    try {
        // Appends the divElement to the node especified.
        await appendChild(targetNodeId, controller);

    } catch (error) {
        console.log(error);
    }
}

export const getComponentHtml = async (componentName) => {
    try {
        const response = await fetch(`./forms/components/${componentName}.html` /*, options */);
        const html = await response.text();
        return html;
    } catch (error) {
        console.error(error);
    }
}

export const createElementWithTemplate = async (templateName) => {
    // Creates new div element.
    const divElement = document.createElement('div');

    // Gets the html.
    const componentHtml = await getComponentHtml(templateName);

    divElement.innerHTML = componentHtml;

    return divElement;
}

const appendChild = async (nodeId, componentHtml) => {
    // Creates new div element.
    const divElement = document.createElement('div');

    divElement.innerHTML = componentHtml;
    const node = document.querySelector(`#${nodeId}`);
    node.innerHTML = '';
    node.appendChild(divElement);
}
