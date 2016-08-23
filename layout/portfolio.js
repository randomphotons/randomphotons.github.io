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
    
    
    function onHashChange() {
      var matches = location.hash.match( /#([^&]+)/i );
      var hashFilter = matches && decodeURIComponent(matches[1]);
      doFilter(hashFilter);
    }

    // Get notifications
    $(window).on( 'hashchange', onHashChange );
    // Update the filter on load
    onHashChange();
  });
  
  function isAll(filterValue) {
    return !filterValue || filterValue == '*' || filterValue == '';
  }

  function doFilter(filterValue) {
    var filter = isAll(filterValue) ? '*' : '.' + filterValue;
    $container.isotope({ filter: filter });

    var href = "#" + filterValue;
    $('a.js-filter').removeClass('current');
    // Highlight current subnav link
    $('a.js-filter[href="'+href+ '"]').addClass('current');
    return true;

    //Scroll back to filter bar if user if below bar
    if ($(window).scrollTop() > 250) {
      $('body,html').animate({
          //scrollTop: 0
          scrollTop: $('#filter-focus').offset().top
          }, "fast");
    }
  }

  $("#toggle").click(function(){
    $("#tuckedMenu").toggleClass("custom-menu-tucked");
    $(this).toggleClass("x");
    return false;
  });
});

