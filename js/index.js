import { infoP } from "./module.js";

const userPBtn = document.getElementById("nav-btn-userP")

const cardContain = document.getElementById("Card-Contain");
const headingTop = document.getElementById("Heading-top");
const cardShowBtn = document.getElementById("show-Cards");



userPBtn.addEventListener("click", function() {
 location.href = "./pages/userProfile.html"
})



let cardShown = false;

headingTop.innerText = "blog.yet";


makeCards();

cardShowBtn.addEventListener("click", function() {
    if(cardShown) {
        cardShowBtn.textContent = "Show more"
        cardContain.style.display = "none"  
    } else {
        cardShowBtn.textContent = "Show less"
        cardContain.style.display = "flex"  
    };
    cardShown = !cardShown
});

function makeCards() {
    for(let i = 0; i < infoP.length; i++) {
        cardContain.innerHTML += `
        <div class="card" id="cardS${i}">
        <p>${infoP[i]}</p>
        </div>
        `
    };
};





