/*hover effect to ".viewProjects", the idea is to give hover only when it is not animated
since the animation is cut with certain movements of the mouse on it*/
heroLink.addEventListener('animationstart', () => {
  heroLink.classList.remove("viewProjects__linkProjects__hoverEffect");
});

heroLink.addEventListener('animationend', () => {
  heroLink.classList.add("viewProjects__linkProjects__hoverEffect");
});

/*hover effect to ".linkHero", the idea is to give hover only when it is not animated
since the animation is cut with certain movements of the mouse on it*/
heroLink3.addEventListener('animationstart', () => {
  heroLink3.classList.remove("linkHero__hoverEffect");
});

heroLink3.addEventListener('animationend', () => {
  heroLink3.classList.add("linkHero__hoverEffect");
});