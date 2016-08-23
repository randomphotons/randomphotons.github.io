$( function() {

  var $container = $('#cards');

  $container.imagesLoaded( function(){
    $('#loading').hide();
    $container.animate({opacity:1},1000).isotope({
      layoutMode: 'packery',
      itemSelector: '.card-block',
      packery: {
        columnWidth: '.card-sizer'
      },
      percentPosition: true
    });
    
    // reload layout after font load
    var font = new FontFaceObserver('FortAwesome');
    font.load().then(function () {
      $container.isotope('layout');
    }, function () {
      console.log('FortAwesome is not available');
    });
  });
  
  // Isotope - filter items on click
  $('a.js-filter').on( 'click', function() {

    //Sort cards
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });

    //Scroll back to filter bar if user if below bar
    if ($(window).scrollTop() > 250) {
      $('body,html').animate({
          //scrollTop: 0
          scrollTop: $('#filter-focus').offset().top
          }, "fast");
    }

    // Highlight current subnav link
    $('a.js-filter').removeClass('current');
    $(this).addClass('current');
    return false;
  });
  
  $("#toggle").click(function(){
    $("#tuckedMenu").toggleClass("custom-menu-tucked");
    $(this).toggleClass("x");
    return false;
  });
});
