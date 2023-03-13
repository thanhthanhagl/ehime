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
    //contact form
    //disable checkbox
    $('#option6').on('click',function() {
        var cb = $('#option6').is(':checked');
        $('#inputoption6').prop('disabled', !cb);  
    });
    //---------------form validation --------------
  $(".c-form__content").validate({
    rules: {
      "name": {
        required: true
      },
      "email": {
        required: true,
        email: true,
      },
      "phone": {
        required: true,
        fnType: true
      },
      "note": {
        required: true
      },
    },
    messages: {
      "name": {
        required: "『氏名』を入力してください。"
      },
      "email": {
        required: "『メールアドレス』を入力してください。",
        email: "example@gmail.com"
      },
      "phone": {
        required: "『電話番号』を入力してください。",
        fnType: "00-0000-0000"
      },
      "note": {
        required: "『お問い合わせ内容』を入力してください。"
      },
    }
  });
  $.validator.addMethod('fnType', function (value) {
    return value.match(/\(?([0-9]{2})\)?([ .-]?)([0-9]{4})\2([0-9]{4})/);
  }, 'Enter Valid  phone number');
  $('.c-form__input').blur(function () {
    if ($(this).val().length == 0) {
      $(this).nextAll('.c-form__error').addClass('is-error');
    }
    else {
      $(this).nextAll('.c-form__error').removeClass('is-error');
    }
  });
  $(".c-back--submit").click(function () {
    if($(".c-form__content").valid()){
      alert("縺秘未蠢�ｒ縺雁ｯ�○縺�◆縺�縺阪≠繧翫′縺ｨ縺�＃縺悶＞縺ｾ縺吶ゅ〒縺阪ｋ縺�縺第掠縺上＃騾｣邨｡縺�◆縺励∪縺吶�");
      window.location.reload();
    }
    else{
      $(".c-form").addClass('is-error')
    }
  });
});
