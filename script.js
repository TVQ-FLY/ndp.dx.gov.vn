const btnOpen = document.querySelector('.search-navbar .open-menu')
const menu = document.querySelector('.menu-mobile')
const btnClose = document.querySelector('.search-navbar .close-menu')

btnOpen.onclick = ()=>{
    menu.classList.remove('translate-x-full')
    btnClose.classList.remove('hidden')
    btnOpen.classList.add('hidden')
}
btnClose.onclick = ()=>{
    menu.classList.add('translate-x-full')
    btnClose.classList.add('hidden')
    btnOpen.classList.remove('hidden')
}
