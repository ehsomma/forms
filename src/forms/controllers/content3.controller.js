import { createElementWithTemplate, appendComponent } from './componentLoader.js';

const Template = 'content3'; // Html template.

export default async () => {
    // Creates new div element with the specified template.
    const divElement = await createElementWithTemplate(Template);
    
    // Adds listeners.
    const boton1 = divElement.querySelector('#boton1');
    boton1.addEventListener('click', (event) => {
        event.preventDefault();
        alert('hola 3');
    });



    const divSubContentTarget = divElement.querySelector('#sub-content-1');
    const divNewSubContent = await createElementWithTemplate('sub-content1');
    
    divSubContentTarget.innerHTML = '';
    divSubContentTarget.appendChild(divNewSubContent);

    const botonSub1 = divElement.querySelector('#botonSub1');
    botonSub1.addEventListener('click', (event) => {
        event.preventDefault();
        alert('hola 3');
    });
    
    // no:.... hay que usar sub-content1.controller.js para obtener el nuvoDiv

    return divElement;
};
