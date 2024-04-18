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
} else {
  
}


    userDocs.checkPassBtn.addEventListener("click", () => {
        for(let i = 1; i <= Object.keys(user).length; i++) {
            let usercheck = user[`user${i}`];
    
            if (userDocs.inputField.value === usercheck.brukernavn && userDocs.inputPass.value === usercheck.password) {
                console.log(usercheck);
                curruser = usercheck;
                localStorage.setItem("user", JSON.stringify(usercheck)); 
                userLoggedIn(curruser); 
                return;
            }
        }
        console.log("Invalid username or password");
    });  
  
function userLoggedIn(userlogged) {
   
    userDocs.userName.innerText = "Welcome back: " + userlogged.brukernavn; 
    userDocs.userAge.innerText = userlogged.alder.toString();
    userDocs.userRealname.innerText = userlogged.navn;
    userDocs.userSince.innerText = "created at: " + userlogged.brukerSiden;
};

