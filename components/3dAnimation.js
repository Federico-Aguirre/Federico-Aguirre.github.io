// 3d movement
//Objects in which movement occurs
const aboutMeCardContainer = $q(".aboutMe__containerWebDev"),
    aboutMeCard = $q(".aboutMe__containerWebDev img");

//motion animation
aboutMeCardContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 1.5 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 0.45 - e.pageY) / 18.5;
    aboutMeCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animation upon entering
aboutMeCardContainer.addEventListener("mouseenter", (e) => {
    aboutMeCard.style.transition = "none";
});
//Animation when leaving
aboutMeCardContainer.addEventListener("mouseleave", (e) => {
    aboutMeCard.style.transition = "all 0.5s ease";
    aboutMeCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
