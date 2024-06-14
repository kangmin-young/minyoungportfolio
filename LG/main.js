$(document).ready(function(){
    //.wrap .tab li 를 클릭하면
    $(".wrap .tab li").click(function(){
        let current = $(this).attr("data-tab");
    //.wrap .tab li에 클래스on 지워라.
    $(".wrap .tab li").removeClass("on");
    $(".content").removeClass("on");
    //클릭된나의 속성중 data-tab 을 가지고와서 클래스 on 을 붙여라.
    $(this).addClass("on");
    $("#"+current).addClass("on");
    });//click
    });//ready