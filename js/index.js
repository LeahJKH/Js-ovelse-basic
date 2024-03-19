document.addEventListener("DOMContentLoaded", function(){
    const btnPressed = document.querySelector("#times-pressed-btn");
    const btnClicker = document.querySelector("#btn-clicker");
    let btnTimesPressed = 0; 
    let world = false;

    function countBtnPress() {
        btnPressed.textContent = `You have pressed the button ${btnTimesPressed} times!`;
    }

    btnClicker.addEventListener("click", function() {
        const worldTxt = document.querySelector("#world-txt");
        world = !world;
        btnTimesPressed++; 
        countBtnPress();
        if (world) {
            worldTxt.innerText = "Goodbye World!";
        } else {
            worldTxt.innerText = "Hello World!";
        }
    });

    const boolean = true;
    const string = "Hei";
    const number = 100;
    const stringnumber = "100";
    const array = [23, 11, 20];
    const objects = {
        pål: 20,
        emma: 21,
        per: 35,
    };
    const litteralString = `hei jeg har ${number} terninger`;

    countBtnPress();
});
