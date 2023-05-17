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
});
