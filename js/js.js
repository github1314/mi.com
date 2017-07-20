/**
 * (●'◡'●)Created by QinJiawei on 2017/7/20.
 */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    autoplay: 2000,     //可选选项，自动滑动
    loop: true,         //无限循环
    speed: 1000,          //滑动速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
    // 如果需要分页器
    pagination: '.swiper-pagination',
    autoplayDisableOnInteraction:false,
    paginationClickable:true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next'
});


$("#shop").mouseenter(function () {
    $(".shoppingCart").stop().slideDown();
});
$("#shop").mouseleave(function () {
    $(".shoppingCart").stop().slideUp();
});

/* hover效果  */
$(".content_2>ul>li:not(li:last-child)").hover(function () {
    $(this).css({"transform":"translateY(-7px)","box-shadow":"1px 5px 5px #cccccc","transition":"1s"});
},function () {
    $(this).css({"transform":"translateY(0)","box-shadow":"none","transition":"1s"});
});
$(".content_2>ul>li:last-child>div").hover(function () {
    $(this).css({"transform":"translateY(-7px)","box-shadow":"1px 5px 5px #cccccc","transition":"1s"});
},function () {
    $(this).css({"transform":"translateY(0)","box-shadow":"none","transition":"1s"});
});


/* 导航下拉 */

var oLi = $(".nav_1 nav ul .hoverList");
var oUl = $(".nav_1 nav ul");

// oLi.children(".navIntroduction").hide();
oUl.mouseenter(function () {
    $(".navIntroduction").stop().slideDown();
});

oUl.mouseleave(function () {
    $(".navIntroduction").stop().slideUp();
});
$(".navIntroduction").mouseenter(function () {
    $(".navIntroduction").stop().show();
});



oLi.mouseenter(function () {
    $(".navIntroduction>ul").hide();
    var index = $(this).index();
    console.log(index)
     $(".navIntroduction>ul").eq(index).show();
});


var aNav = $(".bannerContent nav");
var oNavLi = $(".bannerContent nav ul li");
aNav.mouseenter(function(){
    $(".toggleShow").show();
});

aNav.mouseleave(function () {
    $(".toggleShow").hide();
});
oNavLi.mouseenter(function(){
    $(".toggleShow").children("div").hide();
    var index = $(this).index();
    $(".toggleShow").children("div").eq(index).show();
});

/* 轮播的移动 */

event(".content_1_box","1","1");
event(".content_2_box","2","2");

/* 轮播的封装 */
function event(element1,element2,element3) {
    var index = 0;
    var timer = null;
    $(".left_"+element2).click(function () {
        clearInterval(timer);
        timer = setInterval(leftMove,2000);
    });
    $(".right_"+element3).click(function () {
        clearInterval(timer);
        timer = setInterval(rightMove,2000);
    });
    timer = setInterval(leftMove,2000);
    function leftMove() {
        if(index>3){
            clearInterval(timer);
        }
        index++;
        $(element1+" .content_1").animate({"marginLeft":(-index*245)+"px"},1000)
    }
    function rightMove() {
        if(index<2){
            clearInterval(timer);
        }
        index--;
        $(element1+" .content_1").animate({"marginLeft":(-index*245)+"px"},1000)
    }

};
