$(function () {

  // ドロワーメニュー
  $('.btn-menu').on('click', function () {
    $('.drawer').toggleClass('open');
    // ドロワーメニュー開閉によって背景スクロールの有無を制御
    if ($('.drawer').hasClass('open')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'scroll');
    }
  });

});
