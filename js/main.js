$(window).on("load", function () {
    // When the page has finished loading, hide the loader and show the content
    $("#loader").fadeOut("slow", function () {
        $("#content").fadeIn("slow");
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        if (scrollPos > 0) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    $('.clickable-hamburger-menu').click(function () {
        $('.hamburger-menu').toggleClass('clicked');
        $('.navigation').toggleClass('open');
    });

    $('.navigation ul li a').click(function () {
        $('.hamburger-menu').removeClass('clicked');
        $('.navigation').removeClass('open');
    });

    $("div").scroll(function () {
        if ($('.navigation').hasClass('open')) {
            $('.hamburger-menu').removeClass('clicked');
            $('.navigation').removeClass('open');
        }
    });
});

/* Custom scroll fade animation */
function scrollFunction(classname, repeat) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (repeat == true) {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('custom_show');
                } else {
                    $(entry.target).removeClass('custom_show');
                }
            } else {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('custom_show');
                }
            }
        })
    }
    )

    $(classname).each((_, el) => observer.observe(el));
}

scrollFunction('.custom_hidden_repeat', true)
scrollFunction('.custom_hidden_stay', false)
scrollFunction('.custom_hidden_stay_fast', false)
scrollFunction('.custom_hidden_stay_up', false)
scrollFunction('.custom_hidden_stay_size', false)