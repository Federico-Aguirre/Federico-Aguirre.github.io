/* Effect of swiping from left to right when observed */
const izquierda = $qa('.aboutMe__containerForEffects'),
    izquierda2 = $qa('.aboutMe__containerWebDevForEffects'),
    izquierda3 = $qa('.contact__links');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && Query800.matches) {
            entry.target.classList.add("classAppearByLeft");
        }
    })
})

izquierda.forEach(image => {
    observer.observe(image)
})

izquierda2.forEach(image => {
    observer.observe(image)
})

izquierda3.forEach(image => {
    observer.observe(image)
})


/* Right-to-left swipe effect when observed */
const derecha = $qa('.projects__container'),
    derecha2 = $qa('.contact__formContainerForEffects'),

    mirar = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.intersectionRatio > 0 && Query800.matches) {
                entry.target.classList.add("classAppearFromTheRight");
            }
        })
    })

derecha.forEach(image => {
    mirar.observe(image)
})

derecha2.forEach(image => {
    mirar.observe(image)
})