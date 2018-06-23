window.onload = function () {
  
  /*banner start*/
  var fmBanner = document.getElementsByClassName("fm-banner")[0];
  var bannerBg = fmBanner.children[1];
  fmBanner.onmouseover = function () {
    bannerBg.setAttribute('opcity', 1);
    bannerBg.style.opacity = .5
    bannerBg.style.display = 'block';
  }
  fmBanner.onmouseout = function () {
    bannerBg.style.opacity = 1;
    bannerBg.removeAttribute('opcity');
    bannerBg.style.display = 'none'
  }
  setTimeout(function () {
    // fmBanner.style.width = 98 + '%';
    fmBanner.style.margin = '0 auto';
  }, 1000)
  /*banner end*/
  
  /*fm-blnav start*/
  var fmBlnav = document.getElementsByClassName("fm-blnav")[0];
  var blNavLis = fmBlnav.getElementsByTagName("a");
  for (var i = 0; i < blNavLis.length; ++i) {
    blNavLis[i].onmouseover = function () {
      var Div = document.createElement('div');
      Div.className = "fm-blunder";
      for (var i = 0; i < blNavLis.length; ++i) {
        if (blNavLis[i].children[1]) {
          blNavLis[i].removeChild(blNavLis[i].children[1])
        }
      }
      this.appendChild(Div)
    }
  }
  /*fm-blnav end*/
  
  /*fmnav-fr start*/
  var fmnavFr = document.getElementsByClassName("fmnav-fr")[0];
  
  /*fmnav-fr end*/
  
  
  /*动画函数开始*/
  function animateOne(target, ele, num) {
    clearInterval(ele.timer);
    var speed = target > ele.offsetLeft ? num : -num;
    ele.timer = setInterval(function () {
      var val = target - ele.offsetLeft;
      ele.style.left = ele.offsetLeft + speed + 'px';
      if (Math.abs(val) <= Math.abs(speed)) {
        ele.style.left = target + 'px';
        clearInterval(ele.timer)
      }
    }, 40)
  }
  
  function animateTwo(ele, target) {
    //要用定时器，先清定时器
    //一个萝卜一个坑儿，一个元素对应一个定时器
    clearInterval(ele.timer);
    //定义定时器
    ele.timer = setInterval(function () {
      //获取步长
      //步长应该是越来越小的，缓动的算法。
      var step = (target - ele.offsetLeft) / 10;
      //对步长进行二次加工(大于0向上取整,小于0项下取整)
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      //动画原理： 目标位置 = 当前位置 + 步长
      ele.style.left = ele.offsetLeft + step + "px";
      //检测缓动动画有没有停止
      console.log(1);
      if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
        //处理小数赋值
        ele.style.left = target + "px";
        clearInterval(ele.timer);
      }
    }, 30);
  }
  
  
  /*动画函数结束*/
  /*第二部分右边开始*/
  $('#weishang').click(function () {
    $(".timeline").eq(0).animate({
      height: '700px'
    }, 3000);
  })
  
  /*第二部分右边结束*/
  
  /*预售开始*/
  var c = 'lines';
  var percent = $("#" + c).attr('tip');
  //绘制起点、控制点、终点
  cmove(c, percent)  //canvas id名称 以及总百分比
};

function cmove(id, perNum) {
  var c = document.getElementById(id);
  var percent = perNum;
  var w = document.body.clientWidth || document.documentElement.clientWidth;
  var r = 320 / 108;
  var h = $(".objectTop").height() * 0.6;
  h = parseInt(w / r);
  $(".ratio").css({"padding-bottom": 150+ "px"})
  var timer;
  var points = new Array();
  var ball = {x: 0, y: 0, speed: 0.01, t: 0}
  c.width = w;
  c.height = h;
  var content = c.getContext('2d');
  var startX = 0;
  var startY = h * 0.725;
  
  var c1x = w * 0.05;
  var c1y = h * 0.725;
  var c2x = w * 0.1;
  var c2y = h * 0.55;
  
  var endX = w * 0.2;
  var endY = h * 0.6;
  
  var a1x = w * 0.35;
  var a1y = h * 0.6;
  var a2x = w * 0.45;
  var a2y = h * 0.35;
  
  var a3x = w * 0.625;
  var a3y = h * 0.4;
  
  var b1x = w * 0.7625;
  var b1y = h * 0.4;
  var b2x = w * 0.85;
  var b2y = h * 0.15;
  var b3x = w;
  var b3y = 10;
  var p0 = {x: startX, y: startY};
  var p1 = {x: c1x, y: c1y};
  var p2 = {x: c2x, y: c2y};
  var p3 = {x: endX, y: endY};
  
  var a0 = {x: endX, y: endY};
  var a1 = {x: a1x, y: a1y};
  var a2 = {x: a2x, y: a2y};
  var a3 = {x: a3x, y: a3y};
  
  var b0 = {x: a3x, y: a3y};
  var b1 = {x: b1x, y: b1y};
  var b2 = {x: b2x, y: b2y};
  var b3 = {x: b3x, y: b3y};
  cauculate(p0, p1, p2, p3)
  cauculate(a0, a1, a2, a3)
  cauculate(b0, b1, b2, b3)
  
  function cauculate(p0, p1, p2, p3) {
    
    var cx = 3 * (p1.x - p0.x);
    var bx = 3 * (p2.x - p1.x) - cx;
    var ax = p3.x - p0.x - bx - cx;
    var cy = 3 * (p1.y - p0.y);
    var by = 3 * (p2.y - p1.y) - cy;
    var ay = p3.y - p0.y - by - cy;
    for (var i = 0; i < 1; i += 0.01) {
      var t = i;
      var xt = ax * (t * t * t) + bx * (t * t) + cx * t + p0.x;
      var yt = ay * (t * t * t) + by * (t * t) + cy * t + p0.y;
      points.push({x: xt, y: yt});
    }
    /*	ball.t+=ball.speed;
      if(ball.t>1){
        ball.t=1;
        //clearInterval(timer)
      }*/
    
  }
  
  var i = 0;
  
  function drawScreen() {
    content.fillStyle = "#ffffff";
    content.fillRect(0, 0, w, h);
    content.lineWidth = 1;
    //三次方贝塞尔曲线
    
    content.beginPath();
    content.strokeStyle = '#ffcec0';
    
    var gradient1 = content.createLinearGradient(w / 2, 0, w / 2, h);
    gradient1.addColorStop(0, '#fdebe6');
    gradient1.addColorStop(1, '#FFFFFF');
    
    content.fillStyle = gradient1;
    content.moveTo(startX, startY);
    content.bezierCurveTo(c1x, c1y, c2x, c2y, endX, endY);
    content.lineTo(endX, endY);
    content.bezierCurveTo(a1x, a1y, a2x, a2y, a3x, a3y);
    content.lineTo(a3x, a3y);
    content.bezierCurveTo(b1x, b1y, b2x, b2y, b3x, b3y);
    content.stroke();
    content.lineTo(w, h);
    content.lineTo(0, h);
    content.lineTo(startX, startY);
    content.closePath();
    content.fill();
    
    /**画阴影*/
    content.globalCompositeOperation = 'source-over';
    content.beginPath();
    
    content.shadowOffsetX = 0; // 阴影Y轴偏移
    content.shadowOffsetY = 5; // 阴影X轴偏移
    content.shadowBlur = 3; // 模糊尺寸
    content.shadowColor = 'rgba(250, 85, 39, 0.5)'; // 颜色
    content.fillStyle = gradient1;
    content.moveTo(startX, startY);
    content.bezierCurveTo(c1x, c1y, c2x, c2y, endX, endY);
    content.lineTo(endX, endY);
    content.bezierCurveTo(a1x, a1y, a2x, a2y, a3x, a3y);
    content.lineTo(a3x, a3y);
    content.bezierCurveTo(b1x, b1y, b2x, b2y, b3x, b3y);
    content.stroke();
    content.closePath();
    /**画阴影*/
      //绘制运动的小球
    
    var length = parseInt((points.length - 1) * percent);
    if (i >= length) {
      i = length;
    }
    var set = (percent * 100 * i / length);
    var results = /^[0-9]*[1-9][0-9]*$/.test(set) ? 1 : 0;
    set = (results == 1) ? set : set.toFixed(2);
    var mess = set + "%";
    var xt = points[i].x;
    var yt = points[i].y;
    i += 1;
    //content.
    content.beginPath();
    content.shadowOffsetX = 0; // 阴影Y轴偏移
    content.shadowOffsetY = 0; // 阴影X轴偏移
    content.shadowBlur = 0; // 模糊尺寸
    content.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色
    content.fillStyle = "#ffe1a4";
    content.arc(xt, yt, 5, 0, Math.PI * 2, false);
    content.closePath()
    content.fill();
    content.beginPath();
    content.fillStyle = "#ffaa00";
    content.arc(xt, yt, 3, 0, Math.PI * 2, false);
    content.closePath()
    content.fill();
    content.fillStyle = "#ffaa00";
    content.font = "12px Arial";
    content.textAlign = 'center'; //设置文本的水平对对齐方式
    content.baseline = "middle";
    var mx = xt;
    var my = yt + 6;
    if (xt < 20) {
      content.moveTo(mx, my);
      content.lineTo(mx + 4, my + 4);
      content.lineTo(mx + 4 + 40, my + 4);
      content.lineTo(mx + 4 + 40, my + 4 + 16);
      content.lineTo(mx, my + 4 + 16);
      content.lineTo(mx, my);
      content.fill();
      
      content.fillStyle = "#ffffff";
      content.fillText(mess, mx + 22, my + 16)
    } else if (xt > (w - 20)) {
      content.moveTo(mx, my);
      content.lineTo(mx - 4, my + 4);
      content.lineTo(mx - 4 - 40, my + 4);
      content.lineTo(mx - 4 - 40, my + 4 + 16);
      content.lineTo(mx, my + 4 + 16);
      content.lineTo(mx, my);
      content.fill();
      content.fillStyle = "#ffffff";
      content.fillText(mess, mx - 22, my + 16)
    } else {
      content.moveTo(mx, my);
      content.lineTo(mx - 4, my + 4);
      content.lineTo(mx - 4 - 20, my + 4);
      content.lineTo(mx - 4 - 20, my + 4 + 16);
      content.lineTo(mx + 4 + 20, my + 4 + 16);
      content.lineTo(mx + 4 + 20, my + 4);
      content.lineTo(mx + 4, my + 4);
      content.lineTo(mx, my);
      content.fill();
      content.fillStyle = "#ffffff";
      content.fillText(mess, mx, my + 16)
    }
    
    
  }
  $('.ratio').click(function(){
    timer = setInterval(drawScreen, 20)
  })
  
  
  
  
  /*预售结束*/
  
}

/*jshint esversion:6*/
var can = document.createElement("canvas");
document.body.appendChild(can);
var ctx = can.getContext('2d');

function resize() {
  // can.width = 2000;
  can.width = window.innerWidth;
  can.height = window.innerHeight;
}

const max_radius = 3;
const min_radius = 1;
const drag = 50;
window.onresize = function () {
  resize();
};

function cfill() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0,0, can.width, can.height);
  ctx.fill();
}

var mouse = {
  x: -1000,
  y: -1000
};
can.onmousemove = function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};
can.ontouchmove = function (e) {
  mouse.x = e.touches[0].clientX;
  mouse.y = e.touches[0].clientY;
};
resize();
cfill();

function distance(x, y, x1, y1) {
  return Math.sqrt(( x1 - x ) * ( x1 - x ) + ( y1 - y ) * ( y1 - y ));
}

class Particle {
  constructor(pos, target, vel, color, radius) {
    this.pos = pos;
    this.target = target;
    this.vel = vel;
    this.color = color;
    this.radius = radius;
    var arr = [-1, 1];
    this.direction = arr[~~(Math.random() * 2)] * Math.random() / 10;
  }
  
  set(type, value) {
    this[type] = value;
  }
  
  update() {
    this.radius += this.direction;
    this.vel.x = (this.pos.x - this.target.x) / drag;
    this.vel.y = (this.pos.y - this.target.y) / drag;
    if (distance(this.pos.x, this.pos.y, mouse.x, mouse.y) < 50) {
      this.vel.x += this.vel.x - (this.pos.x - mouse.x) / 15;
      this.vel.y += this.vel.y - (this.pos.y - mouse.y) / 15;
    }
    if (this.radius >= max_radius) {
      this.direction *= -1;
    }
    if (this.radius <= 1) {
      this.direction *= -1;
    }
    this.pos.x -= this.vel.x;
    this.pos.y -= this.vel.y;
  }
  
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

var particles = [];
var colors = ["hotpink", "skyblue", "white", "#dda520", "green"];
var bool = true;
var current = 0, i;

function changeText(text) {
  var current = 0, temp, radius, color;
  cfill();
  ctx.fillStyle = "#fff";
  ctx.font = "80px Times";
  ctx.fillText(text, can.width * 0.5 - ctx.measureText(text).width * 0.5, can.height * 0.5 + 60);
  var data = ctx.getImageData(0, 0, can.width, can.height).data;
  cfill();
  for (i = 0; i < data.length; i += 8) {
    temp = {x: (i / 4) % can.width, y: ~~((i / 4) / can.width)};
    if (data[i] !== 0 && ~~(Math.random() * 5) == 1/*(temp.x % (max_radius+1) === 0 && temp.y % (max_radius+1) === 0)*/) {
      if (data[i + 4] !== 255 || data[i - 4] !== 255 || data[i + can.width * 4] !== 255 || data[i - can.width * 4] !== 255) {
        if (current < particles.length) {
          particles[current].set("target", temp);
        } else {
          radius = max_radius - Math.random() * min_radius;
          temp = {x: Math.random() * can.width, y: Math.random() * can.height};
          if (bool) {
            temp = {x: (i / 4) % can.width, y: ~~((i / 4) / can.width)};
          }
          color = colors[~~(Math.random() * colors.length)];
          var p = new Particle(
            temp,
            {x: (i / 4) % can.width, y: ~~((i / 4) / can.width)}, {x: 0, y: 0},
            color,
            radius);
          particles.push(p);
        }
        ++current;
      }
    }
  }
  bool = false;
  particles.splice(current, particles.length - current);
}

function draw() {
  cfill();
  for (i = 0; i < particles.length; ++i) {
    particles[i].update();
    particles[i].draw();
  }
}

changeText("蔚来全新概念EVE，值得你拥有");
setInterval(draw, 1);
/*jshint esversion:6 end*/


/*星空开始*/
function Star(id, x, y) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.r = Math.floor(Math.random() * 2) + 1;
  var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
  this.color = "rgba(255,255,255," + alpha + ")";
}

Star.prototype.draw = function () {
  ctx1.fillStyle = this.color;
  ctx1.shadowBlur = this.r * 2;
  ctx1.beginPath();
  ctx1.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  ctx1.closePath();
  ctx1.fill();
}

Star.prototype.move = function () {
  this.y -= .15;
  if (this.y <= -10) this.y = HEIGHT + 10;
  this.draw();
}

Star.prototype.die = function () {
  stars[this.id] = null;
  delete stars[this.id];
}


function Dot(id, x, y, r) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.r = Math.floor(Math.random() * 5) + 1;
  this.maxLinks = 2;
  this.speed = .5;
  this.a = .5;
  this.aReduction = .005;
  this.color = "rgba(255,255,255," + this.a + ")";
  this.linkColor = "rgba(255,255,255," + this.a / 4 + ")";
  
  this.dir = Math.floor(Math.random() * 140) + 200;
}

Dot.prototype.draw = function () {
  ctx1.fillStyle = this.color;
  ctx1.shadowBlur = this.r * 2;
  ctx1.beginPath();
  ctx1.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  ctx1.closePath();
  ctx1.fill();
}

Dot.prototype.link = function () {
  if (this.id == 0) return;
  var previousDot1 = getPreviousDot(this.id, 1);
  var previousDot2 = getPreviousDot(this.id, 2);
  var previousDot3 = getPreviousDot(this.id, 3);
  if (!previousDot1) return;
  ctx1.strokeStyle = this.linkColor;
  ctx1.moveTo(previousDot1.x, previousDot1.y);
  ctx1.beginPath();
  ctx1.lineTo(this.x, this.y);
  if (previousDot2 != false) ctx1.lineTo(previousDot2.x, previousDot2.y);
  if (previousDot3 != false) ctx1.lineTo(previousDot3.x, previousDot3.y);
  ctx1.stroke();
  ctx1.closePath();
}

function getPreviousDot(id, stepback) {
  if (id == 0 || id - stepback < 0) return false;
  if (typeof dots[id - stepback] != "undefined") return dots[id - stepback];
  else return false;//getPreviousDot(id - stepback);
}

Dot.prototype.move = function () {
  this.a -= this.aReduction;
  if (this.a <= 0) {
    this.die();
    return
  }
  this.color = "rgba(255,255,255," + this.a + ")";
  this.linkColor = "rgba(255,255,255," + this.a / 4 + ")";
  this.x = this.x + Math.cos(degToRad(this.dir)) * this.speed,
    this.y = this.y + Math.sin(degToRad(this.dir)) * this.speed;
  
  this.draw();
  this.link();
}

Dot.prototype.die = function () {
  dots[this.id] = null;
  delete dots[this.id];
}


var canvas1 = document.getElementById('canvas1'),
  ctx1 = canvas1.getContext('2d'),
  WIDTH,
  HEIGHT,
  mouseMoving = false,
  mouseMoveChecker,
  mouseX,
  mouseY,
  stars = [],
  initStarsPopulation = 80,
  dots = [],
  dotsMinDist = 2,
  maxDistFromCursor = 50;

setCanvasSize();
init();

function setCanvasSize() {
  WIDTH = document.documentElement.clientWidth,
    HEIGHT = document.documentElement.clientHeight;
  
  canvas1.setAttribute("width", WIDTH);
  canvas1.setAttribute("height", HEIGHT);
}

function init() {
  ctx1.strokeStyle = "white";
  ctx1.shadowColor = "white";
  for (var i = 0; i < initStarsPopulation; i++) {
    stars[i] = new Star(i, Math.floor(Math.random() * WIDTH), Math.floor(Math.random() * HEIGHT));
    //stars[i].draw();
  }
  ctx1.shadowBlur = 0;
  animate();
}

function animate() {
  ctx1.clearRect(0, 0, WIDTH, HEIGHT);
  
  for (var i in stars) {
    stars[i].move();
  }
  for (var i in dots) {
    dots[i].move();
  }
  drawIfMouseMoving();
  requestAnimationFrame(animate);
}

window.onmousemove = function (e) {
  mouseMoving = true;
  mouseX = e.clientX;
  mouseY = e.clientY;
  clearInterval(mouseMoveChecker);
  mouseMoveChecker = setTimeout(function () {
    mouseMoving = false;
  }, 100);
}


function drawIfMouseMoving() {
  if (!mouseMoving) return;
  
  if (dots.length == 0) {
    dots[0] = new Dot(0, mouseX, mouseY);
    dots[0].draw();
    return;
  }
  
  var previousDot = getPreviousDot(dots.length, 1);
  var prevX = previousDot.x;
  var prevY = previousDot.y;
  
  var diffX = Math.abs(prevX - mouseX);
  var diffY = Math.abs(prevY - mouseY);
  
  if (diffX < dotsMinDist || diffY < dotsMinDist) return;
  
  var xVariation = Math.random() > .5 ? -1 : 1;
  xVariation = xVariation * Math.floor(Math.random() * maxDistFromCursor) + 1;
  var yVariation = Math.random() > .5 ? -1 : 1;
  yVariation = yVariation * Math.floor(Math.random() * maxDistFromCursor) + 1;
  dots[dots.length] = new Dot(dots.length, mouseX + xVariation, mouseY + yVariation);
  dots[dots.length - 1].draw();
  dots[dots.length - 1].link();
}

//setInterval(drawIfMouseMoving, 17);

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

/*星空结束*/
/*火箭开始*/
var img = document.getElementsByClassName("bear")[0];
window.onscroll = function () {
    //被卷去的距离大于200显示小火箭，否则隐藏
    //2.显示隐藏小火箭
    if(scroll().top>200){
        img.style.display = "block";
    }else{
        img.style.display = "none";
    }
    //每次移动滚动条的时候都给leader赋值，模拟leader获取距离顶部的距离
    leader = scroll().top;
}
//3.缓动跳转到页面最顶端（利用我们的缓动动画）
var timer = null;
var target = 0; //目标位置
var leader = 0; //显示区域自身的位置
img.onclick = function () {
    //技术点：window.scrollTo(0,0);
    //要用定时器，先清定时器
    clearInterval(timer);
    timer = setInterval(function () {
        //获取步长
        var step = (target-leader)/10;
        //二次处理步长
        step = step>0?Math.ceil(step):Math.floor(step);
        leader = leader +step;
        //显示区域移动
        window.scrollTo(0,leader);
        //清除定时器
        if(leader === 0){
            clearInterval(timer);
        }
    },25);
}


/*火箭结束 */
function scroll() {  // 开始封装自己的scrollTop
  if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
      // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
      return {
          left: window.pageXOffset,
          top: window.pageYOffset
      }
  }
  else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
      return {
          left: document.documentElement.scrollLeft,
          top: document.documentElement.scrollTop
      }
  }
  return {   // 未声明 DTD
      left: document.body.scrollLeft,
      top: document.body.scrollTop
  }
}