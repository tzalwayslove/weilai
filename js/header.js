/**
 * when the element is hovered, the next element change style
 * @param {Element} element 
 * @param {Object} json 
 * @param {Number} speed 
 */
function hoverChangeNext(element, json, speed) {
  let obj = {};
  for (let key in json) {
    obj[key] = element.next().css(key);
  }
  element.mouseenter(function () {
    for (let k in json) {
      $(this).next().stop().animate({ "bottom": json[k] }, speed, "swing");
    }
  }).mouseleave(function name() {
    for (let k in json) {
      $(this).next().stop().animate({ "bottom": obj[k] }, speed, "swing");
    }
  });
}

/**
 * when the element is hovered, this child display
 * @param {Element} element 
 */
function hoverDisplayChildren(element) {
  element.mouseenter(function () {
    $(this).children("ul").css("display", "block");
  }).mouseleave(function () {
    $(this).children("ul").css("display", "none");
  });
}

//nav-hover
$(function () {
  hoverChangeNext($(".nav a"),{"bottom":"5px"},200)
});

//nav-hover ul-display
$(function () {
  hoverDisplayChildren($(".nav>ul>.drop"));
});

// header fixed
$(function () {
  let count = 0;
  $(window).scroll(function () {
    if ($(window).scrollTop()>=$(window).height()) {
      if (count===0) {
        $("header>.logo a").css("background","url(images/logo-black.png)");
        $("header a").css("color","#fff");
        $("header li ul").css("backgroundColor","#000");
        $("header .nav-consult a").css("border","2px solid #fff");
        $("header").css({ "position": "fixed", "height": "0","backgroundColor":"#000","color":"#fff"}).stop().animate({ "height": "70px" }, 300, "swing");
        count++;
      }
    }else {
      if (count===1) {
        $("header").stop().animate({ "height": "0px" }, 300, "swing", function () {
          $("header>.logo a").css("background", "url(images/logo.png)");
          $("header a").css("color","#000");
          $("header .nav-consult a").css("border","2px solid #000");
          $("header li ul").css("backgroundColor", "#fff");
          $(this).css({ "position": "absolute", "height":"70px","backgroundColor":"#fff","color":"#000"});
        });
        count--;
      }
    }
  });
});