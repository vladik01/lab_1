$('.container-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  infinite: true,
  responsive: [
	{
	  breakpoint: 1060,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true
	  }
	},
	{
	  breakpoint: 794,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1, 
		dots: false
	  }
	},
	{
	  breakpoint:530,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false
	  }
	}

  ]
});