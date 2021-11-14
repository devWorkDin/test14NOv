let menu = document.querySelector(".menu")
let burger = document.querySelector(".demo");
let button_contact = document.querySelector(".contact_button");
let div_contact = document.querySelector(".contact")
burger.addEventListener("click",()=>{

    burger.classList.toggle("open")
    menu.classList.toggle("menu_shown")
    
    
})

button_contact.addEventListener("click",()=>{
    div_contact.classList.toggle("show")
})