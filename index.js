const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const sidePanel = document.querySelector('.sidepanel');
const collapse = document.querySelector('.collapse');
const expand = document.querySelector('.expand');
const rightCol = document.querySelector('.right-col')

const section = document.getElementsByClassName('section');
const subSection = document.getElementsByClassName('sub-section');
const title = document.getElementsByClassName('title');

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

console.log("Loaded.")

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-500%';
    mainMenu.style.display = 'flex';
}

function openSidePanel() {
    sidePanel.style.display = "block";
    collapse.style.display = 'block';
    expand.style.display = "none"
}

function closeSidePanel() {
    sidePanel.style.display = "none";
    collapse.style.display = 'none';
    expand.style.display = "block"
}

if (width < 900) {
    title[0].onclick = function () {
        closeSidePanel()
    }
    title[1].onclick = function () {
        closeSidePanel()
    }
    title[2].onclick = function () {
        closeSidePanel()
    }
    title[3].onclick = function () {
        closeSidePanel()
    }
    title[4].onclick = function () {
        closeSidePanel()
    }    
}

if (width < 900) {
    section[0].onclick = function () {
        closeSidePanel()
    }
    section[1].onclick = function () {
        closeSidePanel()
    }
    section[2].onclick = function () {
        closeSidePanel()
    }
    section[3].onclick = function () {
        closeSidePanel()
    }
    section[4].onclick = function () {
        closeSidePanel()
    }    
    section[5].onclick = function () {
        closeSidePanel()
    }    
    section[6].onclick = function () {
        closeSidePanel()
    }    
    section[7].onclick = function () {
        closeSidePanel()
    }    
    section[8].onclick = function () {
        closeSidePanel()
    }    
    section[9].onclick = function () {
        closeSidePanel()
    }    
    section[10].onclick = function () {
        closeSidePanel()
    }    
}

if (width < 650) {
    subSection[0].onclick = function () {
        closeSidePanel()
    }
    subSection[1].onclick = function () {
        closeSidePanel()
    }
}

var myVar;

function loaderFunction() {
  myVar = setTimeout(showPage, 1400);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}