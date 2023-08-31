
new fullpage('#fullpage', {
    //options here

    autoScrolling: true,
    scrollbar: true,

    responsiveWidth: 800,
    afterResponsive: function (isResponsive) {
        if (isResponsive) {
            fullpage_api.setAutoScrolling(false);
        }
    }
});

//methods
fullpage_api.setAllowScrolling(true);