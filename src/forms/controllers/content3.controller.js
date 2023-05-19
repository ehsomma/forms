import { createElementWithTemplate, appendComponent } from './componentLoader.js';
import SubContent1 from './sub-content1.controller.js';

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

    // Adds sub controller.
    const divSubContentTarget = divElement.querySelector('#sub-content-1');   
    const newDivSubContent1 = await SubContent1();
    divSubContentTarget.appendChild(newDivSubContent1);
  
    return divElement;
};
