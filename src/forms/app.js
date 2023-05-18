import { appendComponent } from './components/componentLoader.js';

console.log("src/index");

const menuItem1 = document.querySelector('#menuItem1');

menuItem1.addEventListener('click', () => {
    loadContent1();
});

menuItem2.addEventListener('click', () => {
    loadContent2();
});

const loadContent2 = async () => {
    
    await appendComponent('content2', 'main-content');

    const boton1 = document.querySelector('#boton1');
    boton1.addEventListener('click', (event) => {
        event.preventDefault();
        alert('hola 2');
    });
}

const loadContent1 = async () => {

    await appendComponent('content1', 'main-content');
    
    const boton1 = document.querySelector('#boton1');
    boton1.addEventListener('click', (event) => {
        event.preventDefault();
        alert('hola 1');
    });

}