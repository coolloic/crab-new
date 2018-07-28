// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" highlight", "");
  }
  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " highlight";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
(function($) {
	if (typeof $ === 'undefined') {
		throw new Error('JavaScript requires jQuery');
	}

	$('[data-target]').click(function(){
		var me = $(this),
			target = me.attr('data-target');
		if(!me.hasClass('active')){
			$('[data-target],[data-target-id]').removeClass('active');
		}
		$('[data-target-id = '+target+']').toggleClass('active');
		me.toggleClass('active');
	});

	$('.burger-menu').click(function(){
		$(this).toggleClass('active');
		$('.f-menu__nav,.f-menu').toggleClass('active');
	});
  $(document).click(function(event) {
    if (!$(event.target).closest('.f-menu').length) {
      $("body").find('.active').removeClass('active');
    }
  });
  // ingredients event
  $('#ingredients').click(function(){
    var me = $(this),
      ingredients = me.closest('.ingredients'),
      allChks = ingredients.find('input'),
      itemChks = ingredients.find('.ingredients-item input'),
      itemChksChecked = ingredients.find('.ingredients-item input:checked');

    allChks.prop('checked',(me.prop('checked')&&(itemChks.length > itemChksChecked.length)));
  });
  $('.ingredients-item input').change(function(){
    var me = $(this),
      ingredients = me.closest('.ingredients'),
      allChks = ingredients.find('input'),
      selectAll = ingredients.find('#ingredients'),
      itemChks = ingredients.find('.ingredients-item input'),
      itemChksChecked = ingredients.find('.ingredients-item input:checked');
      if(itemChks.length == itemChksChecked.length){
        allChks.prop('checked',true);
      } else {
        selectAll.prop('checked',false);
      }
  });

  // slick carousel
  $('.responsive').slick({
    dots: true,
  	prevArrow: $('.prev'),
  	nextArrow: $('.next'),
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  });
  $('.single-responsive').slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    autoplay: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
})(jQuery);