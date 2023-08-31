
//darkens the background when pressed and changes shadows
$q(".header__light").addEventListener("click", () => {
    $q(".header__light__circle").classList.toggle("header__light__circleDark");

    let lightSectionCounter = $class('lightBackgroundSection');

    $q(".projects").classList.add('lightBackgroundSection');
    $q(".aboutMe").classList.add('lightBackgroundSection');
    $q(".contact").classList.add('lightBackgroundSection');
    $q("body").classList.add('lightBackgroundSection');

    let lightSelectorCounter = $class('lightBackgroundSelector');
    $q(".projects__container__card1").classList.add('lightBackgroundSelector');
    $q(".projects__container__card2").classList.add('lightBackgroundSelector');
    $q(".projects__container__card3").classList.add('lightBackgroundSelector');
    $q(".projects__container__card4").classList.add('lightBackgroundSelector');
    $q(".aboutMe__container").classList.add('lightBackgroundSelector');
    $q(".aboutMe__containerWebDev").classList.add('lightBackgroundSelector');
    $q(".contact__formContainer").classList.add('lightBackgroundSelector');

    for (let i = 0; i < lightSectionCounter.length; i++) {
        lightSectionCounter[i].classList.add("lightBackground");
        lightSectionCounter[i].classList.toggle("darkBackground");
    }

    for (let i = 0; i < lightSelectorCounter.length; i++) {
        lightSelectorCounter[i].classList.add("shadowClass");
        lightSelectorCounter[i].classList.toggle("ShadowLightClass");
    }
})