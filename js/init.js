//header inti
$(function () {
  $("body").css({ "height": $(window).height(), "overflow": "hidden" });
  setTimeout(function () {
    $("header").animate({ "opacity": "1" }, 1000, "swing", function name() {
      setTimeout(function () {
        document.documentElement.style.overflow = "";
        $("body").css({ "height": "", "overflow": "visible", });
        // $(".banner").animate({ "height": "565px" }, 400, "swing");
        // $(".banner-more").animate({ "bottom": "5px" }, 400, "swing");
        // $(".banner-content").animate({ "bottom": "75px" }, 400, "swing", function () {
        //   document.documentElement.style.overflow = "";
        //   $("body").css({ "height": "", "overflow": "visible", });
        // });
      }, 400);
    });
  }, 500);
});

//banner init
$(function () {
  $(".banner").css("height", 620 + "px");
  $('video').get(0).load()
});

//banner hover
$(window).load(function(){
  $('.banner').mouseenter(function () {
    $('video').stop().fadeIn(300);
      $('video').get(0).load()
      let count=0;
      let timeId=setInterval(()=>{
        count++;
        $('video').get(0).play();
        if(count===5) clearInterval(timeId);
      } ,100);
  }).mouseleave(function () {
    $('video').stop().fadeOut(300);
    // $('video').get(0).pause();
  });
});

//function size
$(function () {
  // function windowSize(array, target) {
  //   if ($(window).width() < target) {
  //     for (let i = 0; i < array.length; i++) {
  //       array[i][0].css("width", (target + array[i][1] - $(window).width() + "px"));
  //     }
  //   } else if ($(window).width() >= target) {
  //     for (let j = 0; j < array.length; j++) {
  //       array[j][0].css("width", array[j][1] + "px");
  //     }
  //   }
  //   $(window).resize(function () {
  //     if ($(window).width() < target) {
  //       for (let i = 0; i < array.length; i++) {
  //         array[i][0].css("width", (target + array[i][1] - $(window).width() + "px"));
  //       }
  //     } else if ($(window).width() >= target) {
  //       for (let j = 0; j < array.length; j++) {
  //         console.log(array[j][0].css("width"));

  //         array[j][0].css("width", array[j][1] + "px");
  //       }
  //     }
  //   });
  // }
  // let header = $("header"),
  //   banner = $(".banner"),
  //   slide = $(".slide"),
  //   footer = $("footer"),
  //   service = $(".service"),
  //   product = $(".product"),
  //   content = $(".banner-content"),
  //   power = $(".service-power"),
  //   house = $(".service-house");
  // let size = [
  //   [header, $(window).width()],
  //   [banner, $(window).width()],
  //   [slide, $(window).width()],
  //   [footer, $(window).width()],
  //   [service, ($(window).width() - 40)],
  //   [product, ($(window).width() - 40)],
  //   [content, ($(window).width() * 86 / 100)],
  //   [power, (($(window).width() - 59) / 2)],
  //   [house, (($(window).width() - 59) / 2)]
  // ];
  // windowSize(size, 837);
})


//window size
$(function () {
  if ($(window).width() >= 837) {
    $("header").css("width", $(window).width() + "px");
    $(".banner").css("width", $(window).width() + "px");
    $(".slide").css("width", $(window).width() + "px");
    $(".footer").css("width", $(window).width() + "px");
    $(".service").css("width", $(window).width() - 40 + "px");
    $(".product").css("width", $(window).width() - 40 + "px");
    $(".footer-top").css("width", $(window).width() - 40 + "px");
    $(".banner-content").css("width", $(window).width() * 86 / 100 + "px");
  } else {
    $("header").css("width", 837 + "px");
    $(".banner").css("width", 837 + "px");
    $(".slide").css("width", 837 + "px");
    $(".footer").css("width", 837 + "px");
    $(".service").css("width", 837 - 40 + "px");
    $(".product").css("width", 837 - 40 + "px");
    $(".footer-top").css("width", 837 - 40 + "px");
    $(".banner-content").css("width", 837 * 86 / 100 + "px");
  }
  $(".service-power").css("width", (parseInt($(".service").css("width")) - 19) / 2 + "px");
  $(".service-house").css("width", (parseInt($(".service").css("width")) - 19) / 2 + "px");
});

//window resize
$(function () {
  $(window).resize(function () {
    if ($(window).width() >= 837) {
      $("header").css("width", $(window).width() + "px");
      $(".banner").css("width", $(window).width() + "px");
      $(".slide").css("width", $(window).width() + "px");
      $(".footer").css("width", $(window).width() + "px");
      $(".service").css("width", $(window).width() - 40 + "px");
      $(".product").css("width", $(window).width() - 40 + "px");
      $(".footer-top").css("width", $(window).width() - 40 + "px");
      $(".banner-content").css("width", $(window).width() * 86 / 100 + "px");
    } else {
      $("header").css("width", 837 + "px");
      $(".banner").css("width", 837 + "px");
      $(".slide").css("width", 837 + "px");
      $(".footer").css("width", 837 + "px");
      $(".service").css("width", 837 - 40 + "px");
      $(".product").css("width", 837 - 40 + "px");
      $(".footer-top").css("width", 837 - 40 + "px");
      $(".banner-content").css("width", 837 * 86 / 100 + "px");
    }
    $(".service-power").css("width", (parseInt($(".service").css("width")) - 19) / 2 + "px");
    $(".service-house").css("width", (parseInt($(".service").css("width")) - 19) / 2 + "px");
  });
});


//button
$(function () {
  //button init
  $(".arrow").animate({ "opacity": "0" }, 500, "swing");
  $(".button").animate({ "width": "136px" }, 400, "swing")
    //button mouseenter
    .mouseenter(function () {
      $(this).children(".arr-content").stop().animate({ "left": "33px" }, 350, "swing");
      $(this).children(".arrow").stop().animate({ "opacity": "1", "right": "20px" }, 350, "swing");
      //button mouseleave
    }).mouseleave(function () {
      $(this).children(".arr-content").stop().animate({ "left": "38px" }, 350, "swing");
      $(this).children(".arrow").stop().animate({ "opacity": "0", "right": "30px" }, 350, "swing");
    });
  //special-button init
  $(".special-button").animate({ "width": "176px" }, 400, "swing")
    //special-button mouseenter
    .mouseenter(function () {
      $(this).children(".arr-content").stop().animate({ "left": "30px" }, 350, "swing");
      $(this).children(".arrow").stop().animate({ "opacity": "1", "right": "17px" }, 350, "swing");
      //specail-button mouseleave
    }).mouseleave(function () {
      $(this).children(".arr-content").stop().animate({ "left": "38px" }, 350, "swing");
      $(this).children(".arrow").stop().animate({ "opacity": "0", "right": "25px" }, 350, "swing");
    });
});