function parallax_height() {
    var scroll_top = $(this).scrollTop();/**scrollTop https://developer.mozilla.org/es/docs/Web/API/Element/scrollTop */
    var header_height = $(".sample-header-section").outerHeight();/** OUTERHEIGHT https://developer.mozilla.org/es/docs/Web/API/Window/outerHeight */
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: (header_height - scroll_top)+(header_height - scroll_top)*0.1 });
  }
  parallax_height();
  $(window).scroll(function() {
    parallax_height();
  });
  $(window).resize(function() {
    parallax_height();
  });
