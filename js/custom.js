
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function() {
    // Calculăm înălțimea antetului (zona cu sigle)
    var headerHeight = $("#header-top").outerHeight();
    
    if ($(window).scrollTop() > headerHeight) {
        // Când am scrollat mai mult decât înălțimea antetului, fixăm meniul
        $(".navbar").addClass("navbar-fixed-top top-nav-collapse");
    } else {
        // Când suntem sus, meniul revine la poziția lui naturală
        $(".navbar").removeClass("navbar-fixed-top top-nav-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#intro').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#detail').parallax("100%", 0.2);
    $('#video').parallax("100%", 0.3);
    $('#speakers').parallax("100%", 0.1);
    $('#program').parallax("100%", 0.2);
    $('#register').parallax("100%", 0.1);
    $('#faq').parallax("100%", 0.3);
    $('#venue').parallax("100%", 0.1);
    $('#sponsors').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);

  }
  initParallax();


  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function() {
		$("#owl-speakers").owlCarousel({
			autoPlay: 6000, // Schimbă slide-ul la 6 secunde
			items : 1,      // AFIȘEAZĂ DOAR O PERSOANĂ
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [979,1],
			itemsTablet: [768,1],
			itemsMobile : [479,1],
			navigation : false, // Putem lăsa doar punctele de jos pentru navigare
			pagination : true,
		});

  $(document).ready(function() {
    $("#owl-sponsori").owlCarousel({
      autoPlay: 6000,
      items : 6,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,3],
    });
  });
  
  $(document).ready(function() {
    $("#owl-partners").owlCarousel({
      autoPlay: 6000,
      items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,3],
    });
  });
		
  });


  /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

