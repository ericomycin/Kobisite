const harmbuger = document.querySelector(".harmburger-menu");
const sideBar = document.querySelector(".side-menu");
const closeButton = document.querySelector(".close");

harmbuger.addEventListener("click", () =>{
  sideBar.classList.add("active")
});

closeButton.addEventListener("click", () =>{
  sideBar.classList.remove("active")
})

document.addEventListener('click', function (event) {
if (!harmbuger.contains(event.target) && !sideBar.contains(event.target)) {
sideBar.classList.remove("active")
}})