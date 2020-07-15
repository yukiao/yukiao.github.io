const header = document.querySelector('website-header').shadowRoot;
const burger = header.querySelector('.hamburger');
burger.addEventListener('click',function(){
    const sidebar = header.querySelector('.sidebar-navigation');
    sidebar.classList.toggle('sidebar-navigation-show')
})