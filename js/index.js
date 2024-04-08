import { userDocs } from "./module.js";
import { user } from "./module.js";

const userPBtn = document.getElementById("nav-btn-userP")

const cardContain = document.getElementById("Card-Contain");
const headingTop = document.getElementById("Heading-top");
const cardShowBtn = document.getElementById("show-Cards");

userPBtn.addEventListener("click", () => {
 location.href = "./userProfile.html"
})

const infoP = ["hei jeg ser deg", "månen er fin", "litago er godt", "veldig lang text"];

let cardShown = false;

headingTop.innerText = "header text";


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


const number = 2
const perUser = user.per

userDocs.userName.innerText += " " + perUser.brukernavn; 
userDocs.userAge.innerText = perUser.alder.toString();
userDocs.userRealname.innerText = perUser.navn;
userDocs.userSince.innerText += " " + perUser.brukerSiden;
