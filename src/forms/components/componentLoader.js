export const appendComponent = async (componentName, targetNodeId) => {
    // Source: https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript.
    // Source: https://github.com/JeremyLikness/vanillajs-deck/blob/master/js/slideLoader.js
    // Source: https://youtu.be/D9avX-jtIPM?t=3316 (fazt)

    try {
        // Gets the html.
        const componentHtml = await getComponentHtml(componentName);

        // Appends the html to the node especified.
        await appendChild(targetNodeId, componentHtml);

    } catch (error) {
        console.log(error);
    }
}

const getComponentHtml = async (componentName) => {
    try {
        const response = await fetch(`./forms/components/${componentName}.html` /*, options */);
        const html = await response.text();
        return html;
    } catch (error) {
        console.error(error);
    }
}

const appendChild = async (nodeId, componentHtml) => {
    // Creates new div element.
    const divElement = document.createElement('div');

    divElement.innerHTML = componentHtml;
    const node = document.querySelector(`#${nodeId}`);
    node.innerHTML = '';
    node.appendChild(divElement);
}
