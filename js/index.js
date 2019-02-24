$( document ).ready(function() {
  $(".menu-titles").hide();
  $(".title").effect( "bounce", { times: 2 }, 1000 );

  $(".menu").click(function(x) {
    $(this).toggleClass("change");
    $(".menu-titles").slideToggle();
  });
  if ($(window).width() > 768) {
    $(".center-block p").hide();

    $('.box1').hover(
    function () {
      $(".box1 img").css("opacity, 0");
      $(".box1 p").fadeIn();
    },
    function () {
      $(".box1 img").css("opacity, 1");
      $(".box1 p").fadeOut();
    }
  );
  	$('.box2').hover(
    function () {
      $(".box2 img").css("opacity, 0");
      $(".box2 p").fadeIn();
    },
    function () {
      $(".box2 img").css("opacity, 1");
      $(".box2 p").fadeOut();
    }
  );

  		$('.box3').hover(
    function () {
      $(".box3 img").css("opacity, 0");
      $(".box3 p").fadeIn();
    },
    function () {
      $(".box3 img").css("opacity, 1");
      $(".box3 p").fadeOut();
    }
  );

  $('.box4').hover(
    function () {
      $(".box4 img").css("opacity, 0");
      $(".box4 p").fadeIn();
    },
    function () {
      $(".box4 img").css("opacity, 1");
      $(".box4 p").fadeOut();
    }
  );

  $('.box5').hover(
    function () {
      $(".box5 img").css("opacity, 0");
      $(".box5 p").fadeIn();
    },
    function () {
      $(".box5 img").css("opacity, 1");
      $(".box5 p").fadeOut();
    }
  );

  $('.box6').hover(
    function () {
      $(".box6 img").css("opacity, 0");
      $(".box6 p").fadeIn();
    },
    function () {
      $(".box6 img").css("opacity, 1");
      $(".box6 p").fadeOut();
    }
  );

  }
  else {
  	$(".box1 p").show();
  	$(".box2 p").show();
  	$(".box3 p").show();
  	$(".box4 p").show();
  	$(".box5 p").show();
  	$(".box6 p").show();
  	$(".box7 p").show();
  }

  $(".social-media--links--container").slideDown(1000);
  $(".work-link").click(function() {
        $(".menu-titles").slideUp();
        $(".menu").removeClass("change");
  });
});
