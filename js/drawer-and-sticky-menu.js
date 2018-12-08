$(function () {

  if (window.matchMedia('(max-width: 480px)').matches) {
    // Drawer Menu
    $('.btn-menu').on('click', function () {
      $('.drawer').toggleClass('open');
      // ドロワーメニュー開閉によって背景スクロールの有無を制御
      if ($('.drawer').hasClass('open')) {
        $('body').css('overflow', 'hidden');
      } else if (!$('.drawer').hasClass('open')) {
        $('body').css('overflow', 'scroll');
      }
    });
  } else {
    // Sticky Change Menu
    var $window = $(window),
        $content = $('.main'),
        $change = $('.header-fixed'),
        topContent = $content.offset().top;
    var sticky = false;
    console.log(topContent);
    $window.on('scroll', function () {
      if ($window.scrollTop() > topContent) {
        if (sticky === false) {
          $change.fadeIn(100);
          sticky = true;
        }
      } else {
        if (sticky === true) {
          $change.fadeOut(100);
          sticky = false;
        }
      }
    });
    $window.trigger('scroll');
  }

});
