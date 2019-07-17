$(document).ready(function() {
  AOS.init();
  $(".work-items").flip({
    trigger: 'click',
    speed: 1000
  });
  setTimeout(function() {
    $('#pagepiling').pagepiling({
      menu: '#menu',
      afterLoad: function(anchorLink, index) {

      },
      afterRender: function() {
        AOS.init();
      }, // anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    });
  }, 1000)

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