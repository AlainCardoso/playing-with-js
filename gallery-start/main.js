const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let i = 0;
let strg = 'images/pic1.jpg';
let picNum = 1;

do {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', strg);
    thumbBar.appendChild(newImage);
    strg = strg.replace(picNum, picNum+1);

    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;
    }
    
    picNum ++;
    i++;
} while (i < 5);
/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
