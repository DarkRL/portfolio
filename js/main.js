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


$(document).ready(function() {
    $(".wrapper").scroll(function() {
      $('.fade-in, .fade-up, .fade-in-slowly').each(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $(this).offset().top;
        var distance = (elementOffset - scrollTop);
  
        // Fade in the element when it enters the viewport
        if (distance < $(window).height() - 100) {
          $(this).addClass('fade-in-active');
        }
      });
    });
  
    // Fade in the elements on page load if they are already visible
    $('.fade-in, .fade-up, .fade-in-slowly').each(function() {
      var scrollTop = $(window).scrollTop();
      var elementOffset = $(this).offset().top;
      var distance = (elementOffset - scrollTop);
      if (distance < $(window).height() - 100) {
        $(this).addClass('fade-in-active');
      }
    });
  });