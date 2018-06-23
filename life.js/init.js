//header inti
$(function () {
  //$("body").css({ "height": $(window).height(), "overflow": "hidden" });
  setTimeout(function () {
    $("header").animate({ "opacity": "1" }, 1000, "swing", function name() {
      setTimeout(function () {
        $(".banner").animate({ "height": "565px" }, 400, "swing");
        $(".banner-more").animate({ "bottom": "5px" }, 400, "swing");
        $(".banner-content").animate({ "bottom": "75px" }, 400, "swing", function () {
          document.documentElement.style.overflow = "";
          $("body").css({ "height": "", "overflow": "visible", });
        });
      }, 400);
    });
  }, 500);
});

//banner init
$(function () {
  $(".banner").css("height", $(window).height() + "px");
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
//main
  $(function () {
    $('.bb').click(function () {
      $(this).addClass('active').siblings().removeClass('active')
      var index = $(this).index()
      $('audio')[index].load()
      $('audio')[index].play()
      $('img').eq(index).show().siblings().hide()
      $('.wz div').eq(index).show().siblings().hide()
    })
  })


