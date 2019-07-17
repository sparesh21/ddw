AOS.init();
$(document).ready(function() {
  $.scrollify({
    section: ".page-panel",
    scrollbars: false,
    easing: "swing",
    scrollSpeed: 1000,
    updateHash: false,
    afterRender: function() {

    }
  });

  $(".work-items").flip({
    trigger: 'click',
    speed: 1000
  });

  $('.details-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    vertical: true
  });

  $('#filterOptions li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');

    // reset the active class on all the buttons
    $('#filterOptions li').removeClass('active');
    // update the active state on our clicked button
    $(this).parent().addClass('active');

    if (ourClass == 'all') {
      // show all our items
      $('#ourHolder').children('div.item').show();
    } else {
      // hide all elements that don't share ourClass
      $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('#ourHolder').children('div.' + ourClass).show();
    }
    return false;
  });
});