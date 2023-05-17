console.log("src/index");

const menuItem1 = document.querySelector('#menuItem1');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');

menuItem1.addEventListener('click', () => {
    div1.style.display = 'block';
    div2.style.display = 'none';
});

menuItem2.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'block';

    loadContent2();
});


const loadContent2 = (e) => {
    // Source: https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript.

    alert('Cargando...');
    (e || window.event).preventDefault();

    const divElement = document.createElement('div');
    

    fetch('./menu/components/content2.html' /*, options */)
        .then((response) => response.text())
        .then((html) => {
            //document.querySelector('#div2').innerHTML = html;

            // https://youtu.be/D9avX-jtIPM?t=3316 (fazt)

            divElement.innerHTML = html;
            document.querySelector('#div2').innerHTML = '';
            document.querySelector('#div2').appendChild(divElement);

            const boton1 = document.querySelector('#boton1');
            boton1.addEventListener('click', () => {
                alert('hola');
            });

        })
        .catch((error) => {
            console.warn(error);
        });
}