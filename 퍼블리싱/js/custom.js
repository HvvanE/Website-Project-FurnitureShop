// Scroll Header Change
$(window).scroll(function(){
  if($(window).scrollTop() > 50) {
    $('header, nav, .logo a, #searchbar').addClass('on')
  }
  else {
    $('header, nav, .logo a, #searchbar').removeClass('on')
  }
})

$(function(){
  // Slick Slide
  $('.other-items').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.welcome-slide').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  
  /* Tab Menu */
  $('.tab1').show()
  $('.review-btn a:first-child').click(function(){
    $('.tab1').show()
    $('.tab2').hide()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
  })
  $('.review-btn a:last-child').click(function(){
    $('.tab2').show()
    $('.tab1').hide()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
  })
  
})
