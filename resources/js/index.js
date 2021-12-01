let body = document.querySelector('body');
let element = document.documentElement;
let logo = document.querySelector('.logo-company');
let logoTitle = document.querySelector('.logo-company h1');

function scrollWindow (){
if (body.scrollTop > 80 || element.scrollTop > 80){
    logo.style.width = '150px'
    logo.style.height = '150px'
    logoTitle.style.fontSize = '1.5em'
    logoTitle.style.padding = '10px'
   
}else{
    logo.style.width = '250px'
    logo.style.height = '250px'
    logoTitle.style.fontSize = '3em'
}
}

window.onscroll = function(){scrollWindow()};