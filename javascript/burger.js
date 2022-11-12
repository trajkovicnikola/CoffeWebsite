const burger = document.getElementsByClassName('burger')[0]
const linkovi = document.getElementsByClassName('linkovi')[0]

burger.addEventListener('click', () => {
    linkovi.classList.toggle('active')
}
)