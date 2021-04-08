$(document).ready(function(){
  $('.slide-home .slide-group').slick({
	dots: true,
	infinite: true,
	speed: 500,
	touchMove: true
  });

  $('.channel .slide-group').slick({
	 infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  rows: 2,
	  dots: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        rows: 2,
	      }
	    }
	  ]
  });

  $('.promote .slide-group').slick({
	 infinite: true,
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  dots: true,
  });

   $('.course-slide .slide-group').slick({
	dots: true,
	infinite: true,
	speed: 500,

	touchMove: true
  });

	$('.portfolio.video .slide-group').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 640,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,

	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

});



$(document).ready(function(){
	$("button.menu-icon").click(function(){
		$("ul.dropdown").slideToggle( "hidden" );
	});

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("li.sub-menu").click(function(){
	    if ( $(this).hasClass('active') ) {
	        	$(this).removeClass('active');
		        $(this).removeClass('rotate-arrow');
		        $(".sub-menu-item").slideUp("hidden");
		    } else {
		        $('li.sub-menu').removeClass('active');
		        $('li.sub-menu').removeClass('rotate-arrow');
		        $(this).addClass('active');
		        $(this).addClass('rotate-arrow');
		        $(".sub-menu-item").slideUp("hidden");
		        $(".sub-menu-item",this).slideDown("hidden");
		    }
		});
	} else {
		$("li.sub-menu").mouseenter(function() {
			$('li.sub-menu').removeClass('active');
	        $('li.sub-menu').removeClass('rotate-arrow');
	        $(this).addClass('active');
	        $(this).addClass('rotate-arrow');
	        $(".sub-menu-item").fadeOut("fast");
	        $(".sub-menu-item",this).fadeIn("fast");
		}).mouseleave(function() {
			$(this).removeClass('active');
	        $(this).removeClass('rotate-arrow');
	        $(".sub-menu-item").fadeOut("fast");
		});
	}

	$(".read-more a").click(function(){
		$(".about .content").toggleClass("fix-height");
		if($(".about .content").hasClass("fix-height")){
			$(".read-more").removeClass("open");
		} else {
			$(".read-more").addClass("open");
		}
	});
});
$(document).ready(function(){
	$(".course-detail .tabbar-content .ps").addClass("hide");
	$(".tabbar .tab-list a").click(function(){
		event.preventDefault();
		$(".tabbar .tab-list a").removeClass("active");
		$(this).addClass("active");

		if($(".course-detail .tabbar .tab-list a").hasClass("detail active")){
			$(".course-detail .tabbar-content .detail").removeClass("hide");
			$(".course-detail .tabbar-content .ps").addClass("hide");
		} else{
			$(".course-detail .tabbar-content .ps").removeClass("hide");
			$(".course-detail .tabbar-content .detail").addClass("hide");
		}

	});

	$(".course-detail a.read-more").click(function(){
		event.preventDefault();
		$(".course-detail .tabbar-content .content.detail").toggleClass("fix-height");
		if($(".course-detail .tabbar-content .content.detail").hasClass("fix-height")){
			$(".read-more").removeClass("open");
		} else {
			$(".read-more").addClass("open");
		}
	});

	$(".notification").click(function(){
		$(".notification .noti-box").toggleClass("hide");
	});
});







