$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("header").addClass("change")
    } else {
        $("header").removeClass("change")
    }
});