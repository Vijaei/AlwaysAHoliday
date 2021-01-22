//refencing work by Kyle Shanks https://codepen.io/mavrK/pen/ZQwmYW 

//<script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.7.js"></script>
//<script src="http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.10/jquery-ui.js"></script>


$(document).ready(function () {
    // Page scrolling function for the nav-links
    $(".nav-link").click(function () {
        $("html,body").animate(
            { scrollTop: $(this.hash).offset().top - 80 },
            1400
        );
        return false;
    });

    // Back to Top Link
    $(".top-link").click(function () {
        $("html,body").animate(
            { scrollTop: $("#topSection").offset().top },
            2000
        );
        return false;
    });

    // Function to change the nav-bar on scroll
    $(window).scroll(function () {
        $(window).scrollTop() >= 110
            ? $(".nav-bar").addClass("scrolled")
            : $(".nav-bar").removeClass("scrolled");
    });

    // Setting the active nav-link based on the scroll position
    // There is a better way to do this but this way works so I'll fix it later
    $(window).scroll(function () {
        if (
            $(window).scrollTop() >=
            $("#contactSection").offset().top - $(window).height() / 2
        ) {
            $(".nav-link").removeClass("active");
            $("#contactLink").addClass("active");
        } else if (
            $(window).scrollTop() >=
            $("#topSection").offset().top - $(window).height() / 2
        ) {
            $(".nav-link").removeClass("active");
            $("#topSection").addClass("active");
        } else if (
            $(window).scrollTop() >=
            $("#availablenowSection").offset().top - $(window).height() / 2
        ) {
            $(".nav-link").removeClass("active");
            $("#availablenowLink").addClass("active");
        } else if (
            $(window).scrollTop() >=
            $("#missionstatmentSection").offset().top - $(window).height() / 2
        ) {
            $(".nav-link").removeClass("active");
            $("#missionstatmentLink").addClass("active");
        } else if (
            $(window).scrollTop() >=
            $("#gallerySection").offset().top - $(window).height() / 2
        ) {
            $(".nav-link").removeClass("active");
            $("#galleryLink").addClass("active");
        } else if (
            $(window).scrollTop() >=
            $("#aboutSection").offset().top - $(window).height() / 2
        ) {
            $(".nav-link").removeClass("active");
            $("#aboutLink").addClass("active");
        } else if (
            $(window).scrollTop() >=
            $("#topSection").offset().top - $(window).height() / 2
        ) {
            $(".nav-link").removeClass("active");
            $("#topLink").addClass("active");
        }
    });
});
