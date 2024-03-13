const btnMenu = document.getElementById('btn-menu')

function activeMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

}


btnMenu.addEventListener('click', activeMenu)