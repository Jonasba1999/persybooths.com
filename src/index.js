// Importing custom css
import "./custom-styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function dottedBoothPin() {
	const dots = document.querySelector('[data-dots-pin="image"]');
	if (!dots) return;

	// Pinnning dotted booth image
	let dotsPin = ScrollTrigger.create({
		trigger: dots,
		pin: dots,
		pinSpacing: false,
		start: "center center",
		endTrigger: '[data-features-scroll="content-layer"]',
		end: "top top",
		onLeave: () => {
			gsap.set(dots, { opacity: 0 });
		},
		onEnterBack: () => {
			gsap.set(dots, { opacity: 1 });
		},
	});
}

function boothScrollAnimation() {
	const contentLayer = document.querySelector('[data-features-scroll="content-layer"]');
	if (!contentLayer) return;
	const imageLayer = document.querySelector('[data-features-scroll="image-layer"]');
	const leftItems = document.querySelectorAll('[data-features-scroll="left-item"]');
	const rightItems = document.querySelectorAll('[data-features-scroll="right-item"]');
	const modalBtns = document.querySelectorAll('[data-features-scroll="modal-trigger"]');
	const boothImg = document.querySelector('[data-features-scroll="booth-img"]');
	const animationBuffer = 400;

	// Calculations for boothPin end
	const windowHeight = window.innerHeight;
	const imgHeight = boothImg.offsetHeight;
	const bottomSpace = (windowHeight - imgHeight) / 2;

	let sectionPin = ScrollTrigger.create({
		trigger: contentLayer,
		start: "top top",
		pin: true,
		end: () => {
			return "+=" + animationBuffer * leftItems.length;
		},
		pinspacing: true,
	});

	let boothPin = ScrollTrigger.create({
		trigger: imageLayer,
		pin: true,
		start: "top top",
		end: () => {
			return "+=" + (animationBuffer * leftItems.length + 700 + bottomSpace);
		},
		pinSpacing: false,
	});

	// Creating scroll animation for each feature item
	leftItems.forEach((leftItem, index) => {
		const rightItem = rightItems[index];
		const modalBtn = modalBtns[index];
		let tl = gsap.timeline({
			scrollTrigger: {
				toggleActions: "play none none reverse",
				trigger: ".home-features_wrap",
				start: () => {
					return index * animationBuffer + "px";
				},
				end: "+=200px",
				preventOverlaps: true,
			},
		});

		if (index !== 0) {
			tl.to([leftItems[index - 1], rightItems[index - 1], modalBtns[index - 1]], {
				opacity: 0,
			}).fromTo(
				[leftItem, rightItem, modalBtn],
				{
					opacity: 0,
				},
				{
					opacity: 1,
				}
			);
		}
	});
}

function sideModalAnimation() {
	// Getting all modal triggers
	const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
	if (modalTriggers.length === 0) return;
	let activeTl = null;

	modalTriggers.forEach((trigger) => {
		// Getting corresponding modal
		const modalName = trigger.getAttribute("data-modal-trigger");
		const modal = document.querySelector(`[data-modal="${modalName}"]`);

		// Getting other corresponding modal's elements
		const modalWrap = modal.querySelector('[data-modal="modal-wrap"]');
		const modalOverlay = modal.querySelector('[data-modal="modal-overlay"]');
		const closeBtns = modal.querySelectorAll('[data-modal="close-btn"]');

		let modalTl = gsap.timeline({ paused: true });

		modalTl
			.set(modal, {
				display: "flex",
			})
			.fromTo(
				modalWrap,
				{
					x: "100%",
				},
				{
					x: "0%",
					duration: 0.8,
					ease: "power3.inOut",
				}
			)
			.fromTo(
				modalOverlay,
				{
					opacity: 0,
				},
				{
					opacity: 0.1,
					duration: 0.3,
					ease: "linear",
				},
				"<"
			);

		trigger.addEventListener("click", () => {
			modalTl.play();
			activeTl = modalTl;
		});

		closeBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				activeTl.reverse();
			});
		});

		modalOverlay.addEventListener("click", () => {
			activeTl.reverse();
		});
	});
}

function indexFeaturesSlider() {
	const swiperTargets = document.querySelectorAll(".home-features_swiper");
	if (!swiperTargets) return;

	swiperTargets.forEach((target) => {
		const swiper = new Swiper(target, {
			modules: [Autoplay, Pagination, EffectFade],
			loop: true,
			autoplay: {
				delay: 2000,
			},
			slidesPerView: 1,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			// If we need pagination
			pagination: {
				el: ".home-features_swiper-nav",
				bulletClass: "swiper-bullet",
				bulletActiveClass: "is-active",
			},
		});
	});
}

function customCursorAnimation() {
	const cursor = document.querySelector(".cursor");
	if (!cursor) return;
	const cursorTriggers = document.querySelectorAll('[data-cursor-animation="trigger"]');
	const cursorIcon = document.querySelector('[data-cursor-animation="icon"]');

	// Creating following cursor
	gsap.set(cursor, { xPercent: -50, yPercent: -50 });
	let xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" }),
		yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

	window.addEventListener("pointermove", (e) => {
		xTo(e.clientX);
		yTo(e.clientY);
	});

	let showTl = gsap.timeline({ paused: true });
	showTl.to(cursor, {
		scale: 1,
		duration: 0.4,
		ease: "power4.inOut",
	});

	// Show cursor on hover
	cursorTriggers.forEach((trigger) => {
		// Set cursor size
		const cursorSize = trigger.getAttribute("data-cursor-size");
		const isSlide = trigger.getAttribute("data-slide-cursor");

		trigger.addEventListener("mouseover", () => {
			if (isSlide) {
				gsap.set(cursorIcon, { rotation: 45 });
			} else {
				gsap.set(cursorIcon, { rotation: 0 });
			}
			if (cursorSize === "small") {
				gsap.set(cursor, {
					width: "2.5rem",
					height: "2.5rem",
					onComplete: () => {
						showTl.play();
					},
				});
			} else if (cursorSize === "medium") {
				gsap.set(cursor, {
					width: "3.5rem",
					height: "3.5rem",
					onComplete: () => {
						showTl.play();
					},
				});
			} else if (cursorSize === "large") {
				gsap.set(cursor, {
					width: "5rem",
					height: "5rem",
					onComplete: () => {
						showTl.play();
					},
				});
			}
		});
		trigger.addEventListener("mouseout", () => {
			showTl.reverse();
		});
	});
}

function usageHoverAnimation() {
	const headings = document.querySelectorAll('[data-usage-hover="heading"]');
	const images = document.querySelectorAll('[data-usage-hover="image"]');

	// Ensure there are both headings and images
	if (headings.length === 0 || images.length === 0) return;

	// Loop through each heading and add event listeners
	headings.forEach((heading, index) => {
		const image = images[index];

		heading.addEventListener("mouseover", () => {
			// Grey out all siblings except the hovered one
			headings.forEach((sibling) => {
				if (sibling !== heading) {
					gsap.to(sibling, {
						color: "#B4B4B4",
						duration: 0.2,
					});
				}
			});

			// Optional: Show the corresponding image
			if (image) {
				gsap.to(image, { opacity: 1, duration: 0.2 });
			}
		});

		heading.addEventListener("mouseout", () => {
			// Reset all headings to black when mouse leaves
			headings.forEach((sibling) => {
				gsap.to(sibling, {
					color: "black",
					duration: 0.2,
				});
			});

			// Optional: Hide the image
			if (image) {
				gsap.to(image, { opacity: 0, duration: 0.2 });
			}
		});
	});
}

function reasonsSlider() {
	const swiperTarget = document.querySelector(".reasons-slider_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Navigation],
		slidesPerView: 4.5,
		spaceBetween: 8,
		// Navigation arrows
		navigation: {
			disabledClass: "is-disabled",
			nextEl: ".reasons-slider_btn-next",
			prevEl: ".reasons-slider_btn-prev",
		},
	});
}

function reasonsSliderHover() {
	const slides = document.querySelectorAll('[data-reasons-slider="slide"]');
	if (!slides) return;

	slides.forEach((slide, index) => {
		const slideContent = slide.querySelector('[data-reasons-slider="content"]');
		const slideDescription = slide.querySelector('[data-reasons-slider="description"]');
		const slideCount = slide.querySelector('[data-reasons-slider="count"]');
		let hoverTl = gsap.timeline({ paused: true });

		slideCount.textContent = index + 1;

		hoverTl
			.to(slideContent, {
				backgroundColor: "#E8EFBD",
				duration: 0.2,
				y: "-0.5rem",
			})
			.to(
				slideDescription,
				{
					y: "-100%",
					duration: 0.2,
				},
				"<"
			);

		slide.addEventListener("mouseover", () => {
			hoverTl.play();
		});
		slide.addEventListener("mouseout", () => {
			hoverTl.reverse();
		});
	});
}

function testimonialsSlider() {
	const swiperTarget = document.querySelector(".testimonials-slider_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Autoplay],
		loop: true,
		autoplay: {
			delay: 4000,
		},
		slidesPerView: 1.5,
		spaceBetween: 32,
		centeredSlides: true,
	});
}

function displayCurrentYear() {
	const targetTexts = document.querySelectorAll('[data-display-year="text"]');
	if (targetTexts.length === 0) return;

	const currentYear = new Date().getFullYear();

	targetTexts.forEach((text) => {
		text.textContent = currentYear;
	});
}

function quoteFormQtyInput() {
	const quoteProducts = document.querySelectorAll('[data-product-quote="product"]');
	if (quoteProducts.length === 0) return;

	quoteProducts.forEach((product) => {
		const inputField = product.querySelector('[data-product-quote="input"]');
		const minusBtn = product.querySelector('[data-product-quote="minus"]');
		const plusBtn = product.querySelector('[data-product-quote="plus"]');

		// Set default value of 0 to qty input
		inputField.value = 0;

		minusBtn.addEventListener("click", () => qtyDecrease(inputField));
		plusBtn.addEventListener("click", () => qtyIncrease(inputField));
	});

	// Additional function to increase qty field value when inner product Quote button is clicked
	const productQuoteBtns = document.querySelectorAll("[data-product-quote-btn]");
	if (productQuoteBtns) {
		productQuoteBtns.forEach((btn) => {
			const productName = btn.getAttribute("data-product-quote-btn");
			const inputField = document.querySelector(`#${productName}`);

			btn.addEventListener("click", () => {
				if (parseInt(inputField.value) === 0) {
					qtyIncrease(inputField);
				}
			});
		});
	}

	function qtyDecrease(inputField) {
		if (inputField.value > 0) {
			inputField.value = parseInt(inputField.value) - 1;
		}
	}

	function qtyIncrease(inputField) {
		inputField.value = parseInt(inputField.value) + 1;
	}
}

function formSelectFieldColor() {
	const selectWraps = document.querySelectorAll('[data-form-field="select-wrap"]');
	if (selectWraps.length === 0) return;

	selectWraps.forEach((wrap) => {
		const selectField = wrap.querySelector('[data-form-field="select"]');
		const selectToggle = document.querySelector('[data-form-field="select-toggle"]');
		selectField.addEventListener("change", () => {
			if (selectField.value) {
				selectToggle.style.color = "black";
			} else {
				selectToggle.style.color = "#8B8D8F";
			}
		});
	});
}

function productImagesSlider() {
	const swiperTarget = document.querySelector(".product-hero_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Pagination],
		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
		pagination: {
			el: ".product-hero_swiper-pagination",
			bulletClass: "swiper-bullet",
			bulletActiveClass: "is-active",
		},
	});
}

function rotatingText() {
	const words = gsap.utils.toArray(".product-hero_rotating-text");

	if (words.length === 0) return;

	const tl = gsap.timeline({
		repeat: -1,
	});
	gsap.set(words, {
		yPercent: (i) => i && 100,
		opacity: 1,
	});
	words.forEach((word, i) => {
		const next = words[i + 1];
		if (next) {
			tl.to(word, { yPercent: -100 }, "+=1.5").to(next, { yPercent: 0 }, "<");
		} else {
			// Final word
			tl.to(word, { yPercent: -100 }, "+=1.5").fromTo(
				words[0],
				{
					yPercent: 100,
				},
				{
					yPercent: 0,
					immediateRender: false,
				},
				"<"
			);
		}
	});
}

function productFeaturesSlider() {
	const swiperTarget = document.querySelector(".product-features_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Navigation],
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			disabledClass: "is-disabled",
			nextEl: ".product-features_btn-next",
			prevEl: ".product-features_btn-prev",
		},
	});
}

function customFormSubmitBtn() {
	const forms = document.querySelectorAll('[data-form-submit="form"]');
	if (forms.length === 0) return;

	forms.forEach((form) => {
		const defaultBtn = form.querySelector('[data-form-submit="default-btn"]');
		const customBtn = form.querySelector('[data-form-submit="custom-btn"]');

		customBtn.addEventListener("click", () => {
			defaultBtn.click();
		});
	});
}

function accordionAnimation() {
	const accordionInstances = document.querySelectorAll('[data-accordion="instance"]');
	if (accordionInstances.length === 0) return;

	accordionInstances.forEach((instance) => {
		const accordionItems = instance.querySelectorAll('[data-accordion="accordion-item"]');
		if (accordionItems.length === 0) return;

		let activeTl = null;
		let activeAccordion = null;
		const animationDuration = parseInt(instance.getAttribute("data-accordion-duration"));

		function openAccordion(accordion, accordionTl) {
			if (activeTl && activeAccordion) {
				activeAccordion.classList.remove("is-open");
				activeTl.reverse();
			}
			accordionTl.play();
			activeTl = accordionTl;
			activeAccordion = accordion;
		}

		function closeAccordion(accordionTl) {
			accordionTl.reverse();
			activeTl = null;
			activeAccordion = null;
		}

		accordionItems.forEach((accordion) => {
			const accordionTrigger = accordion.querySelector('[data-accordion="trigger"]');
			const accordionExpandWrap = accordion.querySelector('[data-accordion="expand-wrap"]');

			const accordionTl = gsap.timeline({
				paused: true,
			});
			accordionTl.fromTo(
				accordionExpandWrap,
				{
					height: 0,
				},
				{
					height: "auto",
					duration: animationDuration / 1000,
					ease: "power3.inOut",
				}
			);

			accordionTrigger.addEventListener("click", () => {
				accordion.classList.toggle("is-open");
				if (accordion.classList.contains("is-open")) {
					openAccordion(accordion, accordionTl);
				} else {
					closeAccordion(accordionTl);
				}
			});

			// Open accordion on load if needed
			if (accordion.getAttribute("data-accordion-open")) {
				accordion.classList.toggle("is-open");
				openAccordion(accordion, accordionTl);
			}
		});
	});
}

function productMobilitySlider() {
	const swiperTarget = document.querySelector(".product-mobility_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		slidesPerView: "auto",
		loop: true,
		spaceBetween: 20,
	});
}

function productStickyNav() {
	const productBar = document.querySelector('[data-product-bar="sticky-bar"]');
	if (!productBar) return;
	const heroSection = document.querySelector('[data-product-bar="hero"]');

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: heroSection,
			start: "bottom top",
			toggleActions: "play none none reverse",
		},
	});
	tl.set(productBar, {
		display: "flex",
	}).fromTo(
		productBar,
		{
			y: "1rem",
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.2,
		}
	);
}

function popupAnimation() {
	const popupTriggers = document.querySelectorAll("[data-popup-trigger]");
	if (popupTriggers.length === 0) return;

	popupTriggers.forEach((trigger) => {
		const popupName = trigger.getAttribute("data-popup-trigger");
		const popup = document.querySelector(`[data-popup=${popupName}]`);

		// Getting other corresponding popup's elements
		const popupWrap = popup.querySelector('[data-popup="wrap"]');
		const popupOverlay = popup.querySelector('[data-popup="overlay"]');
		const closeBtn = popup.querySelector('[data-popup="close-btn"]');

		let popupTl = gsap.timeline({ paused: true });

		popupTl
			.set(popup, {
				display: "flex",
			})
			.fromTo(
				popupWrap,
				{
					y: "2rem",
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.3,
					ease: "power3.inOut",
				}
			)
			.fromTo(
				popupOverlay,
				{
					opacity: 0,
				},
				{
					opacity: 0.1,
					duration: 0.3,
					ease: "linear",
				},
				"<"
			);

		trigger.addEventListener("click", (e) => {
			e.stopPropagation();
			e.preventDefault();
			popupTl.play();
		});

		closeBtn.addEventListener("click", () => {
			popupTl.reverse();
		});

		popupOverlay.addEventListener("click", () => {
			popupTl.reverse();
		});
	});
}

function mobileMenuAnimation() {
	const mobileMenu = document.querySelector('[data-mobile-menu="menu"]');
	if (!mobileMenu) return;

	const menuTrigger = document.querySelector('[data-mobile-menu="trigger"]');
	const menuWrap = mobileMenu.querySelector('[data-mobile-menu="wrap"]');
	const menuOverlay = mobileMenu.querySelector('[data-mobile-menu="overlay"]');
	const accordionButtons = document.querySelectorAll('[data-accordion="accordion-item"]');

	// Change "auto" height value when accordion is activated for menu animation
	accordionButtons.forEach((button) => {
		button.addEventListener("click", () => {
			setTimeout(() => {
				menuTl.invalidate();
			}, 500);
		});
	});

	let menuOpen = false;

	let mm = gsap.matchMedia();

	mm.add("(max-width: 991px)", () => {
		menuTl = gsap.timeline({ paused: true });

		menuTl
			.set(mobileMenu, {
				display: "block",
			})
			.fromTo(
				mobileMenu,
				{
					height: 0,
				},
				{
					height: "auto",
					duration: 0.7,
					ease: "power3.inOut",
				}
			)
			.fromTo(
				menuOverlay,
				{
					opacity: 0,
				},
				{
					opacity: 0.1,
					duration: 0.3,
					ease: "linear",
				},
				"<"
			);

		menuTrigger.addEventListener("click", () => {
			if (!menuOpen) {
				menuTrigger.textContent = "Close";
				menuTl.play();
				menuOpen = true;
			} else {
				menuTrigger.textContent = "Menu";
				menuTl.reverse();
				menuOpen = false;
			}
		});

		menuOverlay.addEventListener("click", () => {
			menuTrigger.textContent = "Menu";
			menuTl.reverse();
			menuOpen = false;
		});
	});
}

function productFeaturesVideo() {
	const featureItems = document.querySelectorAll(".product-features_wrap");
	if (featureItems.length === 0) return;

	featureItems.forEach((item) => {
		const featureVideo = item.querySelector("video");
		const featureImage = item.querySelector(".product-features_image");
		console.log(featureVideo);
		item.addEventListener("mouseenter", () => {
			gsap.to(featureImage, {
				opacity: 0,
				duration: 0.3,
			});
			featureVideo.play();
		});
		item.addEventListener("mouseleave", () => {
			gsap.to(featureImage, {
				opacity: 1,
				duration: 0.3,
			});
			featureVideo.currentTime = 0;
			featureVideo.pause();
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	dottedBoothPin();
	boothScrollAnimation();
	sideModalAnimation();
	indexFeaturesSlider();
	customCursorAnimation();
	usageHoverAnimation();
	reasonsSlider();
	reasonsSliderHover();
	testimonialsSlider();
	displayCurrentYear();
	quoteFormQtyInput();
	formSelectFieldColor();
	productImagesSlider();
	rotatingText();
	productFeaturesSlider();
	customFormSubmitBtn();
	accordionAnimation();
	productMobilitySlider();
	productStickyNav();
	popupAnimation();
	mobileMenuAnimation();
	productFeaturesVideo();
});
