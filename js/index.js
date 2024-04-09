import { infoP, pageDocs, user } from "./module.js";


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
cardFull()

function cardFull() {
    let postArr = []
    let finishedarr = []
    user.user1.posts.forEach(x => {
        postArr.push(
            `
            <div class="card">
            <img src="${user.user1.pfp}" class="profile-picture">
            <h3>${user.user1.brukernavn}</h3>
            <p>${infoP[x]}</p>
            </div>
            `
            ) 
    })
    user.user2.posts.forEach((x => {
        postArr.push(
            `
            <div class="card">
            <img src="${user.user2.pfp}" class="profile-picture">
            <h3>${user.user2.brukernavn}</h3>
            <p>${infoP[x]}</p>
            </div>
            `
            )
    }))
    for(let i = 0; i < 32; i++) {
        let random = Math.floor(Math.random() * 31 + 1) 
        finishedarr.push(postArr[random])
    }
   console.log(postArr)
   console.log(finishedarr)
    pageDocs.cardContain.innerHTML += finishedarr.toString()
}











