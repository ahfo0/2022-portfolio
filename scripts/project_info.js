// 스크롤 관련 js

// 상단 헤더 스크롤 연동 Jquery
$(function () {
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop(); if (Math.abs(lastScrollTop - st) <= delta)
            return; // 스크롤값을 받아서 리턴한다. 
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $("#header").css("top", "-6.77vw"); // 스크롤을 내렸을때 #header의 CSS 속성중 top 값을 변경한다.
            $('#project_list').css({ 'visibility': 'hidden' });
            $('#project_list').slideUp();
        } else {
            $("#header").css("top", "0"); // 스크롤을 올렸을때 #header의 CSS 속성중 top 값을 변경한다.

        } lastScrollTop = st;
    });
});

// 헤더 project list jQuery
$('#project_list').slideUp();
$('#project').on('click', () => {
    $('#project_list').css({ 'visibility': 'visible' });
    $('#project_list').slideToggle();

})

// 하단 네비게이션 스크롤 연동
document.querySelector('#nav').style.bottom = "-4.166vw";
window.addEventListener('scroll', () => {
    // console.log('스크롤');
    if (document.querySelector('html').scrollTop > 10) {
        document.querySelector('#nav').style.bottom = "0";
    } else {
        document.querySelector('#nav').style.bottom = "-4.166vw";
    }
});

// nav (위쪽 화살표) 눌러서 최상단으로 부드럽게 이동
document.querySelector('#home').addEventListener('click', (e) => {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});   