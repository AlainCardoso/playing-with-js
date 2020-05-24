function createParagraph() {
    let pg = document.createElement('p');
    pg.textContent = 'You clicked the button!';
    document.body.appendChild(pg);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}