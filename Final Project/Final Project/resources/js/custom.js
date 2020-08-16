$('a').smoothScroll();



function scroll() {
    let topBar = $('.top-bar')
    let topBtn = $('.top-btn')

    if($(window).scrollTop() > 20) {
        topBar.addClass('sticky');
        topBtn.removeClass('hide');
    } else {
        topBar.removeClass('sticky');
        topBtn.addClass('hide');
    }
}

scroll()


$(window).scroll(function(){

    ////How To put scroll() instead of repeating the same function ???///

    let topBar = $('.top-bar')
    let topBtn = $('.top-btn')

    if($(window).scrollTop() > 20) {
        topBar.addClass('sticky');
        topBtn.removeClass('hide');
    } else {
        topBar.removeClass('sticky');
        topBtn.addClass('hide');
    }
});



let bars = $('.mob-nav');
let close = $('.mob-close');

bars.click(function(){


    bars.removeClass('md-d-block');
    // $('.o').addClass('mob-overlay');
    close.addClass('md-d-block');
    $('.top-bar ul').removeClass('md-hide');
});

close.click(function(){
    bars.addClass('md-d-block');
    $('.o').removeClass('mob-overlay');
    close.removeClass('md-d-block');
    $('.top-bar ul').addClass('md-hide');
});



let faqLiBtn = $('section.qa .qa-container .qtitles ul li')
let faqABox = $('.qmain')

faqLiBtn.click(function(){
    let faqLiBtnIndex = faqLiBtn.index(this)

    faqLiBtn.removeClass('nowq')
    faqLiBtn.eq(faqLiBtnIndex).addClass('nowq')


    faqABox.addClass('hide')
    faqABox.eq(faqLiBtnIndex).removeClass('hide')
})






let faqBtn = $('section.qa .qmain .qmain-box .atitle');

faqBtn.click(function(){
    faqBtnOIndex = faqBtn.index(this);
    $('.amain').eq(faqBtnOIndex).toggleClass('hide');
    $('.qmain-box').eq(faqBtnOIndex).toggleClass('nowa');
    $('.atitle').eq(faqBtnOIndex).toggleClass('nowaa');
    $('.qmain .icon-show').eq(faqBtnOIndex).toggleClass('hide');
    $('.qmain .icon-hide').eq(faqBtnOIndex).toggleClass('hide');
});





let homeHeight = $('#home').position().top;
let aboutHeight = $('#about').position().top;
let spreadHeight = $('#spread').position().top;
let symptomsHeight = $('#symptoms').position().top;
let preventionHeight = $('#prevention').position().top;
let protectHeight = $('#protect').position().top;
let washHeight = $('#wash').position().top;
let safeHeight = $('#safe').position().top;

let protect2Height = $('#protect2').position().top;
let qaHeight = $('#qa').position().top;
let recentHeight = $('#recent').position().top;
let footerHeight = $('#footer').position().top;

$(window).scroll(function(){
    if ( $(window).scrollTop() >= ( footerHeight - 75 ) ) {
        $('header .top-bar ul li a').removeClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( recentHeight - 75 ) ) {
        $('header .top-bar ul li a').removeClass('main-link')
        $('#lnews').addClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( qaHeight - 75 ) ) {
        $('header .top-bar ul li a').removeClass('main-link')
        $('#lfaq').addClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( protect2Height - 75 ) && ( $(window).scrollTop() <= ( qaHeight - 75 ) )  ) {
        $('header .top-bar ul li a').removeClass('main-link')
    }



    else if ( $(window).scrollTop() >= ( safeHeight - 75 ) ) {
        $('header .top-bar ul li a').removeClass('main-link')
        $('#ltreatment').addClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( washHeight + 40 ) && ( $(window).scrollTop() <= ( safeHeight - 75 ) )  ) {
        $('header .top-bar ul li a').removeClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( protectHeight + 40 ) && ( $(window).scrollTop() <= ( washHeight + 40 )  )  ) {
        $('header .top-bar ul li a').removeClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( preventionHeight - 75 )  ) {
        $('header .top-bar ul li a').removeClass('main-link')
        $('#lprevention').addClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( symptomsHeight - 75 )  ) {
        $('header .top-bar ul li a').removeClass('main-link')
        $('#lsymptoms').addClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( spreadHeight - 75 ) && ( $(window).scrollTop() <= ( symptomsHeight - 75 ) ) ) {
        $('header .top-bar ul li a').removeClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( aboutHeight - 75 )  ) {
        $('header .top-bar ul li a').removeClass('main-link')
        $('#labout').addClass('main-link')
    }
    else if ( $(window).scrollTop() >= ( homeHeight - 10 ) ) {
        $('header .top-bar ul li a').removeClass('main-link')
        $('#lhome').addClass('main-link')
    }
});