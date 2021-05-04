const searchInput = document.querySelector('.search-box--input');
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-box--icon');
const openMenuBtn = document.querySelector('.btn');
const sideMenu = document.querySelector('.side-nav')

searchBtn.addEventListener('click', openInput);
openMenuBtn.addEventListener('click', openSideNav);

function openInput() { searchInput.classList.toggle('open'); }

function openSideNav() {
    sideMenu.classList.toggle('open'); 
    openMenuBtn.classList.toggle('open'); 
}


