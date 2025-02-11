import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { gsap } from "gsap";

export function testimonialsSlider() {
	const swiperTarget = document.querySelector(".testimonials-slider_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Autoplay, Pagination, Navigation],
		loop: true,
		speed: 800,
		autoplay: {
			delay: 6000,
		},
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
		},
		pagination: {
			el: ".testimonials-slider_pagination",
			bulletClass: "swiper-bullet",
			bulletActiveClass: "is-active",
			clickable: true,
		},
		navigation: {
			prevEl: ".testimonials-slider_swiper-btn.is-prev",
			nextEl: ".testimonials-slider_swiper-btn.is-next",
		},
	});
}

export function reasonsSlider() {
	const swiperTarget = document.querySelector(".reasons-slider_swiper");
	if (!swiperTarget) return;

	// Dynamic numeration of slides
	const slides = document.querySelectorAll('[data-reasons-slider="slide"]');
	slides.forEach((slide, index) => {
		const slideCount = slide.querySelector('[data-reasons-slider="count"]');
		if (index < 10) {
			slideCount.textContent = "0" + (index + 1);
		} else {
			slideCount.textContent = index + 1;
		}
	});

	const swiper = new Swiper(swiperTarget, {
		modules: [Navigation],
		slidesPerView: 1.3,
		speed: 600,
		spaceBetween: 16,
		breakpoints: {
			992: {
				slidesPerView: 4.5,
				spaceBetween: 8,
			},
			768: {
				slidesPerView: 2.7,
				spaceBetween: 20,
			},
		},
		// Navigation arrows
		navigation: {
			disabledClass: "is-disabled",
			nextEl: ".reasons-slider_btn-next",
			prevEl: ".reasons-slider_btn-prev",
		},
	});
}

export function productImagesSlider() {
	const swiperTargets = document.querySelectorAll(".product-hero_swiper");
	if (!swiperTargets.length) return;

	swiperTargets.forEach((swiperTarget) => {
		const swiper = new Swiper(swiperTarget, {
			modules: [Pagination, Navigation],
			slidesPerView: 1,
			loop: true,
			speed: 600,
			spaceBetween: 0,
			pagination: {
				el: ".product-hero_swiper-pagination",
				bulletClass: "swiper-bullet",
				bulletActiveClass: "is-active",
				clickable: true,
			},
			navigation: {
				nextEl: ".product-hero_swiper-btn.is-next",
				prevEl: ".product-hero_swiper-btn.is-prev",
			},
		});
	});
}

export function productFeaturesSlider() {
	const swiperTarget = document.querySelector(".product-features_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Navigation],
		slidesPerView: 1.4,
		speed: 600,
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 2.6,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
		navigation: {
			disabledClass: "is-disabled",
			nextEl: ".product-features_btn-next",
			prevEl: ".product-features_btn-prev",
		},
	});
}

export function productMobilitySlider() {
	const swiperTarget = document.querySelector(".product-mobility_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Navigation],
		slidesPerView: "auto",
		speed: 800,
		spaceBetween: 16,
		breakpoints: {
			992: {
				spaceBetween: 20,
			},
		},
		navigation: {
			nextEl: ".product-mobility_swiper-btn.is-next",
			prevEl: ".product-mobility_swiper-btn.is-prev",
		},
	});
}

export function mobileUsageSwiper() {
	const swiperTarget = document.querySelector('[data-usage-swiper="target"]');
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		slidesPerView: 1.3,
		speed: 600,
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 2.7,
				spaceBetween: 20,
			},
		},
	});
}

export function mobileProductCustomizeSwiper() {
	const swiperTarget = document.querySelector('[data-mobile-customize-slides="target"]');
	if (!swiperTarget) return;

	const breakpoint = window.matchMedia("(max-width: 991px)");

	let swiper = null;
	const wrapper = swiperTarget.querySelector('[data-mobile-customize-slides="wrap"]');
	const slides = swiperTarget.querySelectorAll('[data-mobile-customize-slides="slide"]');

	function addSwiperClasses() {
		wrapper.classList.add("swiper-wrapper");
		slides.forEach((slide) => {
			slide.classList.add("swiper-slide");
		});
	}

	function removeSwiperClasses() {
		wrapper.classList.remove("swiper-wrapper");
		slides.forEach((slide) => {
			slide.classList.remove("swiper-slide");
		});
	}

	function initSwiper() {
		addSwiperClasses(); // Add classes before initializing Swiper
		swiper = new Swiper(swiperTarget, {
			slidesPerView: 1.1,
			speed: 600,
			spaceBetween: 16,
			breakpoints: {
				768: {
					spaceBetween: 20,
					slidesPerView: 2,
				},
			},
		});
	}

	function destroySwiper() {
		if (swiper) {
			swiper.destroy(true, true);
			swiper = null;
		}
		removeSwiperClasses(); // Remove classes after destroying Swiper
	}

	breakpoint.addEventListener("change", (event) => {
		if (event.matches) {
			initSwiper();
		} else {
			destroySwiper();
		}
	});

	// Try to init swiper when page loads if the breakpoint matches
	if (breakpoint.matches) {
		initSwiper();
	} else {
		destroySwiper();
	}
}

export function homeHeroSlides() {
	const swiperTarget = document.querySelector('[data-home-swiper="target"]');
	if (!swiperTarget) return;

	const slides = swiperTarget.querySelectorAll(".swiper-slide");
	if (slides.length > 1) {
		const swiper = new Swiper(swiperTarget, {
			modules: [Pagination, Autoplay],
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			allowTouchMove: true,
			breakpoints: {
				992: {
					allowTouchMove: false,
				},
			},
			speed: 1000,
			loop: true,
			pagination: {
				el: ".home-hero_swiper-pagination",
				bulletClass: "swiper-bullet",
				bulletActiveClass: "is-active",
				clickable: true,
			},
		});

		// Rotating text animation
		const rotatingTextWrap = document.querySelector('[data-swiper-text="wrap"]');
		const words = gsap.utils.toArray(".product-hero_rotating-text", rotatingTextWrap);

		gsap.set(words, {
			yPercent: (i) => (i ? 100 : 0),
			opacity: 1,
		});

		let previousSlideIndex = 0; // To keep track of the previously active slide

		swiper.on("slideChangeTransitionStart", function () {
			const currentSlideIndex = swiper.realIndex;

			// Animate the previous active word out by moving it UP
			gsap.to(words[previousSlideIndex], {
				yPercent: -100,
				duration: 0.8,
				ease: "power2.out",
				onComplete: () => {
					// Reset the previous word to prepare it for the next cycle
					gsap.set(words[previousSlideIndex], { yPercent: 100 });
				},
			});

			// Animate the current active word into view by moving it UP from the bottom
			gsap.fromTo(
				words[currentSlideIndex],
				{ yPercent: 100 },
				{
					yPercent: 0,
					duration: 0.8,
					ease: "power2.out",
				}
			);

			// Update previousSlideIndex to the current one
			previousSlideIndex = currentSlideIndex;
		});
	}
}

export function aboutGallerySlider() {
	const swiperTarget = document.querySelector(".about-gallery_swiper");

	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Autoplay],
		loop: true,
		speed: 800,
		autoplay: {
			delay: 1000,
		},

		centeredSlides: true,
		spaceBetween: 20,
		slidesPerView: 1.8,

		breakpoints: {
			992: {
				slidesPerView: 5,
				spaceBetween: 32,
			},
			768: {
				slidesPerView: 4,
			},
		},
	});
}

export function aboutValuesSlider() {
	const swiperTarget = document.querySelector(".about-values_swiper");

	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Navigation],
		slidesPerView: 1.3,
		speed: 600,
		spaceBetween: 16,
		breakpoints: {
			992: {
				slidesPerView: 2.7,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.7,
			},
		},
		// Navigation arrows
		navigation: {
			disabledClass: "is-disabled",
			nextEl: ".about-values_slider_nav-btn.is-next",
			prevEl: ".about-values_slider_nav-btn.is-prev",
		},
	});
}

export function mobileKnowledgeBlogSlider() {
	const swiperTarget = document.querySelector("[data-knowledge-blog-swiper]");

	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		slidesPerView: 1.3,
		speed: 600,
		spaceBetween: 16,
		breakpoints: {
			767: {
				slidesPerView: 2.3,
			},
		},
	});
}

export function knowledgePostGallerySlider() {
	const swiperTarget = document.querySelector("[data-knowledge-gallery-swiper]");

	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Navigation],
		slidesPerView: "auto",
		speed: 800,
		spaceBetween: 16,
		breakpoints: {
			992: {
				spaceBetween: 20,
			},
		},
		navigation: {
			nextEl: ".knowledge-block_gallery_swiper-btn.is-next",
			prevEl: ".knowledge-block_gallery_swiper-btn.is-prev",
		},
	});
}
