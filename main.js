const background = document.querySelector('main');
const myBtn = document.querySelector('.btn');
const myColor = document.querySelector('span');
const myDiv = document.querySelector('p');
const logo = document.querySelector('h1');

myBtn.addEventListener('click', randomColor);


function randomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)]
  }
  background.style.backgroundColor = color;
  myColor.style.color = color;
  myColor.innerHTML = color;
  logo.style.color= color;
};