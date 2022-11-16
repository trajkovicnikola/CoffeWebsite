const burger = document.getElementsByClassName('burger')[0]
const linkovi = document.getElementsByClassName('linkovi')[0]

burger.addEventListener('click', () => {
    linkovi.classList.toggle('active')
}
)

var loader = document.getElementById("preloader")
window.addEventListener("load", function(){
    loader.style.display = "none"
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})