const mode = document.querySelector("#mode")
const body = document.body
mode.addEventListener("click", ()=>{
  const icon = mode.querySelector("i")
  icon.classList.contains("fa-sun") ? icon.classList.toggle("fa-moon") : icon.classList.remove("fa-moon")
  
  body.classList.toggle("dark")
})