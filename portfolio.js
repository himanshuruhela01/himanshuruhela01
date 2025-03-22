



let tabLinks = document.getElementsByClassName("tab-links")
let tabContents = document.getElementsByClassName("tab-contents")

function openTab(tabname){
    for (const tabLink of tabLinks) {
        tabLink.classList.remove('active-link')
    }
    for (const tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }
   event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}

// Sidemenu js------------

let sideMenu = document.querySelector("#sidemenu")

function openMenu(){
    sideMenu.style.right = '0'
}
function closeMenu(){
    sideMenu.style.right = '-200px'
}


// Form msg-------------

