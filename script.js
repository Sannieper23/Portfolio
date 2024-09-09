

const toggleMenuVisibility = () => {
    const menu = document.getElementById('popup-menu')
    setMenuVisibility(menu.classList.contains('hidden'))
}
const setMenuVisibility = visible => {
    const menu = document.getElementById('popup-menu')
    if(menu) {
        if(visible) {
            menu.classList.remove('hidden')
        } else {
            menu.classList.add('hidden')
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    const aElements = document.querySelectorAll("a");
    aElements.forEach(element => element.addEventListener('click', () => setMenuVisibility(false)));

    addEventListener('scroll', () => setMenuVisibility(false));
});