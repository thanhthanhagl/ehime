jQuery(function ($) {
    //
    // 変数を定義
    //------------------------------------
    var $body = $('body'),
        $header = $('.c-header'),
        $menuButton = $('.c-menu'),
        desktopMode = ($menuButton.css('display') != 'none');
    function headerHeight() {
        $headerHeight = $header.outerHeight();
    }
    headerHeight();

    //
    // header-menu
    //------------------------------------
    //ハンバーガーボタンクリック
    $menuButton.click(function () {
        if ($(this).hasClass('is-open')) {
            $(this).removeClass('is-open');
            $('.c-header__item.is-hover').removeClass('is-open');
        } else {
            $(this).addClass('is-open');
        }
    });

    //SPメニュー内アコーディオン
    $(".c-header__item.is-hover").click(function (e) {
        if (!desktopMode) {
            if ($(this).hasClass('is-open')) {
                $(this).removeClass('is-open');
            } else {
                $(this).addClass('is-open');
            }
        }
    });
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
