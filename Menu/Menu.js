/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


let header = document.querySelector('.header');
let body = document.querySelector('body');
let menuButton = document.querySelector('.menu-button');

function menuCreator(array) {
  let div = document.createElement('div');
  let ul = document.createElement('ul');
  header.appendChild(div);
  div.classList.add('menu');

  array.forEach((item) => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  })
  div.appendChild(ul);
  
  menuButton.addEventListener('click', (event) => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('menu--open');
  })

  return div;
}

menuCreator(menuItems);



