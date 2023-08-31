/* affects the margin top and bottom of the imaginary scroll in the "aboutMe" section. */
const scrollMove = $q(".aboutMe__container__scroll"),
    text = $q(".aboutMe__container__text__content"),
    studies = $q(".aboutMe__container__studies__content");

$q(".aboutMe__container__studies").addEventListener("click", () => {
    scrollMove.classList.add("aboutMe__container__scrollDown");
    text.style.display = "none";
    studies.style.display = "grid";
});

$q(".aboutMe__container__text").addEventListener("click", () => {
    scrollMove.classList.remove("aboutMe__container__scrollDown");
    text.style.display = "block";
    studies.style.display = "none";
})