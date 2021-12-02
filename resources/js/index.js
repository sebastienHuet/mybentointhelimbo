let body = document.querySelector('body');
let element = document.documentElement;
let logo = document.querySelector('.logo-company');
let logoTitle = document.querySelector('.logo-company h1');
let menu = document.querySelector('.menu-container');

function scrollWindow (){
if (body.scrollTop > 80 || element.scrollTop > 80){
    logo.style.width = '100px'
    logo.style.height = '100px'
    logoTitle.style.fontSize = '1em'
    logoTitle.style.padding = '10px'
    menu.style.backgroundColor = 'rgba(255,255,255,0.94)';
   
}else{
    logo.style.width = '250px'
    logo.style.height = '250px'
    logoTitle.style.fontSize = '3em'
    menu.style.backgroundColor = 'transparent';
}
}

window.onscroll = function(){scrollWindow()};
