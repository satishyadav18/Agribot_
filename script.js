const sideBar = document.querySelector('.side-links')
const hamMenu = document.querySelector('.ham')
const closeMenu = document.querySelector('.close')

hamMenu.addEventListener('click',()=>{
    sideBar.style.display = 'flex'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click',()=>{
    sideBar.style.display = 'none'
    closeMenu.style.display = 'none'
})