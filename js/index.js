import { infoP } from "./module.js";
import { pageDocs } from "./module.js";

pageDocs.userPBtn.addEventListener("click", function() {
 location.href = "./pages/userProfile.html"
})

let cardShown = false;

pageDocs.headingTop.innerText = "blog.yet";



pageDocs.cardShowBtn.addEventListener("click", function() {
    if(cardShown) {
        pageDocs.cardShowBtn.textContent = "Show more"
        pageDocs.cardContain.style.display = "none"  
    } else {
        pageDocs.cardShowBtn.textContent = "Show less"
        pageDocs.cardContain.style.display = "flex"  
    };
    cardShown = !cardShown
});

makeCards();
function makeCards() {
    for(let i = 0; i < infoP.length; i++) {
        pageDocs.cardContain.innerHTML += `
        <div class="card">
        <p>${infoP[i]}</p>
        </div>
        `
    };
};





