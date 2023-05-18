import { createElementWithTemplate } from './componentLoader.js';

const Template = 'sub-content1'; // Html template.

export default async () => {

    // Creates new div element with the specified template.
    const divElement = await createElementWithTemplate(Template);
    
    // Adds listeners.
    const boton1 = divElement.querySelector('#botonSub1');
    boton1.addEventListener('click', (event) => {
        event.preventDefault();
        alert('hola sub 1');
    });

    return divElement;
};
