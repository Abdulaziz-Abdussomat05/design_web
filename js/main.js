"use strict"
window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader")
    setTimeout(function() {
        loader.style.opacity = "0"
         setTimeout(function(){
            loader.style.display = "none"
        },1500)
    },2000)

    const alModalBtn = document.querySelectorAll("[data-modal]"),
modal = document.querySelector(".modal"),
modalClose = document.querySelector("[data-close]")

alModalBtn.forEach((btn) => {
  btn.addEventListener("click",openModal )
})

function openModal() {
  modal.classList.add("show")
  modal.classList.remove("hide")
  document.body.style.overflow = "hidden"
  clearInterval(timeModalOut)
}

function closeModal() {
  modal.classList.add("hide")
  modal.classList.remove("show")
  document.body.style.overflow = "";
 

}

modalClose.addEventListener("click", closeModal)

modal.addEventListener("click", (e) => {
  if(e.target === modal) {
    closeModal()
  }
})

const timeModalOut = setTimeout(openModal, 5000)

})