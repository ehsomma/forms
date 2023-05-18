import { controllers } from '../controllers/index.js';

export const addHashchangeListener = () => {
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash);
        router(window.location.hash);
    });
}

export const router = async (route) => {
    let divElement = null;

    try {    
        const node = document.querySelector(`#main-content`);
        node.innerHTML = '';

        switch (route) {
            case '#':
                divElement = await controllers.content1();
                break;

            case '#option1':
                divElement = await controllers.content1();
                break;

            case '#option2':
                divElement = await controllers.content2();
                break;

            case '#option3':
                divElement = await controllers.content3();
                break;

            default:
                divElement = await controllers.notFound();
                break;
        }

        node.appendChild(divElement);

    } catch (error) {
        console.log(error);
    }
}

