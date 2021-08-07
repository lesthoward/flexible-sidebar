const sidebarItemName = document.querySelectorAll('.sidebar__item--name');
sidebarItemName.forEach(itemName => {
    itemName.dataset.name = itemName.textContent
})

const sidebarItem = document.querySelectorAll('.sidebar__item--name');
sidebarItem.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('sidebar__item--name--active')
    })
    item.addEventListener('mouseleave', () => {
        item.classList.remove('sidebar__item--name--active')
    })
})

const sidebarClose = document.querySelector('.sidebar__close');
const sidebar = document.querySelector('.sidebar');
sidebarClose.addEventListener('click', () => {  
    sidebar.classList.toggle('sidebar--close')
})