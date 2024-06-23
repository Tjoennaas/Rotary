



const slideshows = document.querySelectorAll('.slideshow');


slideshows.forEach(slideshow => {

	const slides = slideshow.querySelectorAll('.slideshow__slide');
	const previousButton = slideshow.querySelector('.slideshow__previous-button');
	const nextButton = slideshow.querySelector('.slideshow__next-button');
	

	let currentSlideIndex = 0;

	const lastSlideIndex = slides.length - 1;

	const goToNextSlide = () => {
		if (currentSlideIndex === lastSlideIndex) {
			currentSlideIndex = 0;
		} else {
			currentSlideIndex += 1;
		}
	};

	
	const goToPreviousSlide = () => {
		if (currentSlideIndex === 0) {
			currentSlideIndex = lastSlideIndex;
		} else {
			currentSlideIndex -= 1;
		}
	};

	const goToSingleSlide = new_slide_index => {
		currentSlideIndex = new_slide_index;
	};

	
	const renderSlideshow = () => {
		slides.forEach((slide, slideIndex) => {
			if (slideIndex === currentSlideIndex) {
				slide.classList.add('slideshow__slide--visible');
			} else {
				slide.classList.remove('slideshow__slide--visible');
			}
		});

	
	};

	previousButton.addEventListener('click', () => {
		goToPreviousSlide();
		renderSlideshow();
	});

	
	nextButton.addEventListener('click', () => {
		goToNextSlide();
		renderSlideshow();
	});


	});











document.querySelectorAll('.scrollButton').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
		

		document.querySelectorAll('.scrollButton').forEach(btn => {
            btn.style.color = '';
        });

        this.style.color = 'red'; 

        const targetSelector = this.getAttribute('data-target');
        const targetSection = document.querySelector(targetSelector); 

        if (targetSection) {
         
            const headerOffset = 250;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
             
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});