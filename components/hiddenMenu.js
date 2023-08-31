
const hidenMenu = $q(".navBarMenu"),
    NavLine1 = $q(".header__navBar__line:nth-of-type(1)"),
    NavLine2 = $q(".header__navBar__line:nth-of-type(2)");
let numberMenu = 1;


//creates an x in the navbar if numberMenu equals 1 and disassembles the x if it is not
$q(".header__navBar").addEventListener("click", () => {

    NavLine1.style.animation = "navBarClickedLine1 0.5s Forwards";
    NavLine2.style.animation = "navBarClickedLine2 0.5s Forwards";
    if (numberMenu == 1) {
        numberMenu++;
        hidenMenu.style.animation = "navBarShow 1s forwards";
    } else {
        numberMenu--;
        hidenMenu.style.animation = "navBarHide 1s forwards";
        NavLine1.style.animation = "navBarClosingLine1 0.5s Forwards";
        NavLine2.style.animation = "navBarClosingLine2 0.5s Forwards";
    }
});

let closingNavBar = $qa('.navBarMenu a');
for (let i = 0; i < closingNavBar.length; i++) {
    closingNavBar[i].addEventListener("click", () => {

        NavLine1.style.animation = "navBarClickedLine1 0.5s Forwards";
        NavLine2.style.animation = "navBarClickedLine2 0.5s Forwards";
        if (numberMenu == 1) {
            numberMenu++;
            hidenMenu.style.animation = "navBarShow 1s forwards";
        } else {
            numberMenu--;
            hidenMenu.style.animation = "navBarHide 1s forwards";
            NavLine1.style.animation = "navBarClosingLine1 0.5s Forwards";
            NavLine2.style.animation = "navBarClosingLine2 0.5s Forwards";
        }
    });
}

let hideFunction = $class('hideMenuClose');
for (let i = 0; i < hideFunction.length; i++) {
    hideFunction[i].addEventListener("click", () => {
        if (numberMenu == 2) {
            numberMenu--;
            hidenMenu.style.animation = "navBarHide 1s forwards";
            NavLine1.style.animation = "navBarClosingLine1 0.5s Forwards";
            NavLine2.style.animation = "navBarClosingLine2 0.5s Forwards";
        }
    });
}