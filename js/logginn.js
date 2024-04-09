import { userDocs, user, pageDocs } from "./module.js";

pageDocs.userHBtn.addEventListener("click", function() {
    location.href = "../index.html"
   })

let curruser = ""

if (sessionStorage.getItem("user") === "per"){
    curruser = user.per;
    userLoggedIn(curruser);
} else if (sessionStorage.getItem("user") === "emilie"){
    curruser = user.emilie;
    userLoggedIn(curruser);
}
userDocs.checkPassBtn.addEventListener("click", () => {
                if (userDocs.inputField.value === user.user1.brukernavn && userDocs.inputPass.value === user.user1.password) {
                    console.log("per found")
                   curruser = user.user1;
                   sessionStorage.setItem("user", `${user.user1}`)
                   userLoggedIn(curruser);
                } else {
                console.log("done")
                }
            })
        
  

function userLoggedIn(userlogged) {
    userDocs.userName.innerText = "Welcome back: " + userlogged.brukernavn; 
    userDocs.userAge.innerText = userlogged.alder.toString();
    userDocs.userRealname.innerText = userlogged.navn;
    userDocs.userSince.innerText = "created at: " + userlogged.brukerSiden;
};