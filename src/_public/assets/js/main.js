jQuery(function ($) {
    //
    // 変数を定義
    //------------------------------------
    var $body = $('body'),
        $header = $('.c-header'),
        $menuButton = $('.c-menu');

    //
    // header-menu
    //------------------------------------
    function disableScroll() {
        var ycoord = $(window).scrollTop();
        $(".c-header").data("ycoord", ycoord);
        ycoord = ycoord * -1;
        $("body")
            .css("position", "fixed")
            .css("left", "0px")
            .css("right", "0px")
            .css("top", ycoord + "px");
        $(".c-header")
            .css("position", "fixed")
            .css("left", "0px")
            .css("right", "0px")
            .css("top", "0px");
    }
    function enableScroll() {
        $("body")
            .css("position", "")
            .css("left", "auto")
            .css("right", "auto")
            .css("top", "auto");
        $(window).scrollTop($(".c-header").data("ycoord"));
    }
    //ハンバーガーボタンクリック
    $menuButton.click(function () {
        if ($('.c-nav').hasClass('is-open')) {
            $('.c-nav').removeClass('is-open');
            enableScroll();
        } else {
            $('.c-nav').addClass('is-open');
            disableScroll();
        }
    });
    $('.c-nav__link').click(function () {
        $('.c-nav').removeClass('is-open');
        enableScroll();
    })
    $('.c-close').click(function () {
        $('.c-nav').removeClass('is-open');
        enableScroll();
    })
    //
    // pagetop
    //------------------------------------
    var $pagetop = $('.js-pagetop');
    $pagetop.click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });
    //
    //filter post category
    //------------------------------------
    $('.c-list__catitem').click(function () {
        $('.c-list__catitem').removeClass('is-active');
        $(this).addClass('is-active');
    });
});
