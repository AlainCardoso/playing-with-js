// Adding an image changer

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/firefox2.png');
    }else{
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

// Adding a personalized welcome message

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name:');
    /* If myName has no value, or its value is null, run setUserName() again from the start. 
    If it does have a value (if the above statements are not true), then store the value in localStorage and set it as the heading's text.*/
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool as u know, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

