jQuery(document).ready(function($){

  $('#btn-navtoggle').click(function() {
    $('#main-menu').animate({
      height: 'toggle'
    }, {
      duration: 200,
      specialEasing: {
        height: 'easeOutQuart'
      },
      complete: function() {
      }
    });
  });
});





