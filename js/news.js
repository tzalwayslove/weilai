
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
