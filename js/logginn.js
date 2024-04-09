import { userDocs } from "./module.js";
import { user } from "./module.js";

let curruser = ""

if (sessionStorage.getItem("user") === "per"){
    curruser = user.per;
    userLoggedIn(curruser);
} else if (sessionStorage.getItem("user") === "emilie"){
    curruser = user.emilie;
    userLoggedIn(curruser);
}
    
userDocs.checkPassBtn.addEventListener("click", () => {
     if (userDocs.inputField.value === user.per.brukernavn && userDocs.inputPass.value === user.per.password) {
        curruser = user.per;
        sessionStorage.setItem("user", "per")
        userLoggedIn(curruser);
    } else if (userDocs.inputField.value === user.emilie.brukernavn && userDocs.inputPass.value === user.emilie.password) {
        curruser = user.emilie;
        sessionStorage.setItem("user", "emilie")
        userLoggedIn(curruser);
    } else {

    }
});

function userLoggedIn(userlogged) {
    userDocs.userName.innerText = "Welcome back: " + userlogged.brukernavn; 
    userDocs.userAge.innerText = userlogged.alder.toString();
    userDocs.userRealname.innerText = userlogged.navn;
    userDocs.userSince.innerText = "created at: " + userlogged.brukerSiden;
};