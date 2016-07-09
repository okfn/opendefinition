(function($) {
  // disable ribbon clickthrough
  if ( $(document).width() > 767) { $('.okfn-ribbon a').click(function(e) {e.preventDefault();}); }
  
  // active class
  $('#okf-panel').on('show', function () {
    $('.okfn-ribbon').addClass('active');
  })
  $('#okf-panel').on('hidden', function () {
    $('.okfn-ribbon').removeClass('active');
  })
})(jQuery);
