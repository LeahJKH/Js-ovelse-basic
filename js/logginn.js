import { userDocs } from "./module.js";
import { user } from "./module.js";

const inputPass = document.querySelector("#input-pass")
const inputField = document.querySelector("#input-field")
const checkPassBtn = document.querySelector("#checkpass-user")

let curruser = ""

checkPassBtn.addEventListener("click", () => {
    console.log(inputField + " " + inputPass)
    if (inputField.value === user.per.brukernavn && inputPass.value === user.per.password) {
        curruser = user.per;
        userLoggedIn(curruser);
    } else if (inputField === user.emilie.brukernavn && inputPass === user.emilie.password) {
        curruser = user.emilie;
        userLoggedIn(curruser);
    } else {

    }
});

function userLoggedIn(userlogged) {
    userDocs.userName.innerText += " " + userlogged.brukernavn; 
    userDocs.userAge.innerText = userlogged.alder.toString();
    userDocs.userRealname.innerText = userlogged.navn;
    userDocs.userSince.innerText += " " + userlogged.brukerSiden;
};