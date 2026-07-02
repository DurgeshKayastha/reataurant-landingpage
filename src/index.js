import { showContact } from "./pages/contact.js";
import { renderMenu } from "./pages/menu.js";
import { renderHome } from "./pages/home.js";
import "./style.css";

const homeButton = document.querySelector("#home-btn")
const menuButton = document.querySelector("#menu-btn")
const contactButton = document.querySelector("#contact-btn")

const content = document.querySelector("#content")

homeButton.addEventListener("click",() =>{
    content.textContent = "";
    renderHome();
})

menuButton.addEventListener("click",() =>{
    content.textContent = "";
    renderMenu();
})

contactButton.addEventListener("click",() =>{
    content.textContent = "";
    showContact();
})

renderHome();