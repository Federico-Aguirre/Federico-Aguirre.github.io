/* underlined in .header__home when looking at that section, 
You have to specify px even if it is a margin of 0 for that works */
const red = $q(".header__home"),
    section = $q(".hero"),
    sectionOptions = {
        rootMargin: "-360px 0px 0px 0px"
    };

const sectionObserver = new IntersectionObserver(function (
    entries, sectionObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            red.classList.add("navScrolled");
        } else {
            red.classList.remove("navScrolled");
        }
    });
},
    sectionOptions);

sectionObserver.observe(section);


/* underlined in .header__projects when looking at that section, 
You have to specify px even if it is a margin of 0 for that works*/
const red2 = $q(".header__projects"),
    section2 = $q(".projects"),
    section2Options = {
        rootMargin: "-439px 0px -30px 0px"
    };

const section2Observer = new IntersectionObserver(function (
    entries, section2Observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            red2.classList.add("navScrolled");
        } else {
            red2.classList.remove("navScrolled");
        }
    });
},
    section2Options);

section2Observer.observe(section2);


/* underlined in .header__aboutMe when looking at that section, 
You have to specify px even if it is a margin of 0 for that works */
const red3 = $q(".header__aboutMe"),
    section3 = $q(".aboutMe"),
    section3Options = {
        rootMargin: "-300px 0px -100px 0px"
    };

const section3Observer = new IntersectionObserver(function (
    entries, section3Observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            red3.classList.add("navScrolled");
        } else {
            red3.classList.remove("navScrolled");
        }
    });
},
    section3Options);

section3Observer.observe(section3);


/* underlined in .header__contact when looking at that section, 
You have to specify px even if it is a margin of 0 for that works */
const red4 = $q(".header__contact"),
    section4 = $q(".contact__formContainer"),
    section4Options = {
        rootMargin: "0px 0px -350px 0px"
    };

const section4Observer = new IntersectionObserver(function (
    entries, section4Observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            red4.classList.add("navScrolled");
        } else {
            red4.classList.remove("navScrolled");
        }
    });
},
    section4Options);

section4Observer.observe(section4);


const headerColor1 = $q(".header__projects"),
    headerColor2 = $q(".header__aboutMe"),
    headerColor3 = $q(".header__contact"),
    heroLink = $q(".viewProjects"),
    heroLink2 = $q(".viewProjects__linkProjects"),
    heroLink3 = $q(".linkHero"),
    section5 = $q(".hero__container__logo"),
    section5Options = {
        rootMargin: "-360px 0px 0px 0px"
    };

const section5Observer = new IntersectionObserver(function (
    entries, section5Observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // headercolor gives white color to the header when it is in top 0
            headerColor1.classList.add("headerColor");
            headerColor2.classList.add("headerColor");
            headerColor3.classList.add("headerColor");
            heroLink.style.display = "block";
            heroLink2.style.display = "block";
            heroLink3.style.display = "none";
        } else {
            headerColor1.classList.remove("headerColor");
            headerColor2.classList.remove("headerColor");
            headerColor3.classList.remove("headerColor");
            if (Query800.matches) {
                heroLink.style.display = "none";
                heroLink2.style.display = "none";
                heroLink3.style.display = "block";
            } else {
                heroLink.style.display = "block";
                heroLink2.style.display = "block";
                heroLink3.style.display = "none";
            }
        }
    });
},
    section5Options);

section5Observer.observe(section5);