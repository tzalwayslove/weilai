// slide
$(function () {
  let arr = ["images/slide-1.jpg", "images/slide-2.jpg", "images/slide-3.jpg", "images/slide-4.jpg"];
  let $ul = $(".slide-content ul");
  let $point = $(".slide-point");
  for (let i = 0; i < arr.length; i++) {
    $("<li><img src=" + arr[i] + "></li>").appendTo($ul);
    $("<i></i>").appendTo($point).click(function () {
      $(this).addClass("current").siblings().removeClass("current");
      $ul.children("li").eq($(this).index()).stop().animate({ "opacity": "1" }, 600, "swing").siblings().stop().animate({ "opacity": "0" }, 600, "swing");
    });
  }
  $(".slide-content li:first").css("opacity", "1").siblings().css("opacity", "0");
  $(".slide-point>i:first").addClass("current").siblings().removeClass("current");

  //auto-slide
    let index=0;
    setInterval(function () {
      for (let i = 0; i < $point.children().length;i++){
        if ($point.children().eq(i).hasClass("current")) {
          index=i;
        }
      }
      if (index === 3) {
        index = -1;
      }
      $point.children().eq(index + 1).click();
    }, 5000);
});