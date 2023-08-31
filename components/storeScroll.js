const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

window.onscroll = e => {  /* Activates when scrolling Windows */
    storeScroll()
}

storeScroll()