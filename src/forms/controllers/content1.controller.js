import { createElementWithTemplate } from './componentLoader.js';

const Template = 'content1'; // Html template.

export default async () => {
    // Creates new div element with the specified template.
    const divElement = await createElementWithTemplate(Template);
    
    // Adds listeners.
    const boton1 = divElement.querySelector('#boton1');
    boton1.addEventListener('click', (event) => {
        event.preventDefault();
        alert('hola 1');
    });

    return divElement;
};

