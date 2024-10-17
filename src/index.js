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

	let mm = gsap.matchMedia();

	mm.add("(min-width: 992px)", () => {
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
				trigger: ".features-scroll_wrap",
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
	if (!modalTriggers.length) return;
	let activeTl = null;
	const modalTimelines = {};

	function openModal(modalTl, modal) {
		modalTl.play();
		activeTl = modalTl;
		window.location.hash = modal.getAttribute("data-modal");
	}

	function closeModal() {
		activeTl.reverse();
		// Remove hash from URL without reloading the page
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}

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

		// Store the timeline in an object using modalName as the key
		modalTimelines[modalName] = { timeline: modalTl, modal: modal };

		trigger.addEventListener("click", () => {
			openModal(modalTl, modal);
		});

		closeBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				closeModal();
			});
		});

		modalOverlay.addEventListener("click", () => {
			closeModal();
		});
	});

	// Open popup if URL hash matches any popup's data-popup attribute on page load
	window.addEventListener("load", () => {
		const hash = window.location.hash.substring(1); // Remove the `#` from the hash
		if (hash && modalTimelines[hash]) {
			const { timeline, modal } = modalTimelines[hash];
			openModal(timeline, modal);
		}
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
			pagination: {
				el: ".home-features_swiper-nav",
				bulletClass: "swiper-bullet",
				bulletActiveClass: "is-active",
				clickable: true,
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
		const cursorType = trigger.getAttribute("data-cursor-type");
		//  cusorTypes: link (default), slide-prev, slide-next

		trigger.addEventListener("mouseover", () => {
			// 1. Setting cursor arrow direction
			if (cursorType === "slide-prev") {
				gsap.set(cursorIcon, { rotation: -135 });
			} else if (cursorType === "slide-next") {
				gsap.set(cursorIcon, { rotation: 45 });
			} else {
				gsap.set(cursorIcon, { rotation: 0 });
			}

			// 2. Animating cursor to size
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
	if (!headings.length || !images.length) return;

	headings.forEach((heading, index) => {
		// Getting current heading image
		const image = images[index];

		heading.addEventListener("mouseenter", () => {
			gsap.to(image, { autoAlpha: 1, duration: 0.2 });
			gsap.to(heading, {
				opacity: 1,
				duration: 0.2,
			});

			// Changing sibling headings
			headings.forEach((sibling) => {
				if (sibling !== heading) {
					sibling.classList.add("no-hover");
					gsap.to(sibling, {
						opacity: 0.25,
						duration: 0.2,
					});
				}
			});

			// Hiding sibling images
			images.forEach((sibling) => {
				if (sibling !== image) {
					gsap.to(sibling, { autoAlpha: 0, duration: 0.2 });
				}
			});
		});

		heading.addEventListener("mouseleave", () => {
			// Reset all headings to black when mouse leaves
			headings.forEach((sibling) => {
				sibling.classList.remove("no-hover");
				gsap.to(sibling, {
					opacity: 1,
					duration: 0.2,
				});
			});

			if (image) {
				gsap.to(image, { autoAlpha: 0, duration: 0.2 });
			}
		});
	});
}

function reasonsSlider() {
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

function reasonsSliderHover() {
	const slides = document.querySelectorAll('[data-reasons-slider="slide"]');
	if (!slides.length) return;

	const swiperWrapper = document.querySelector('[data-reasons-slider="wrap"]');
	let descriptionMaxHeight = 0;

	let mm = gsap.matchMedia();

	mm.add("(min-width: 992px)", () => {
		slides.forEach((slide, index) => {
			const slideContent = slide.querySelector('[data-reasons-slider="content"]');
			const slideDescription = slide.querySelector('[data-reasons-slider="description"]');
			const descriptionHeight = slideDescription.offsetHeight;
			if (descriptionHeight > descriptionMaxHeight) {
				descriptionMaxHeight = descriptionHeight;
			}
			let hoverTl = gsap.timeline({ paused: true });

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

		// Adjust slider wrap top-padding to match the heighest description
		gsap.set(swiperWrapper, {
			paddingTop: descriptionMaxHeight + "px",
		});
	});
}

function testimonialsSlider() {
	const swiperTarget = document.querySelector(".testimonials-slider_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Autoplay, Pagination],
		loop: true,
		autoplay: {
			delay: 4000,
		},
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 1.5,
			},
			992: {
				spaceBetween: 32,
				slidesPerView: 1.5,
			},
		},
		pagination: {
			el: ".testimonials-slider_pagination",
			bulletClass: "swiper-bullet",
			bulletActiveClass: "is-active",
			clickable: true,
		},
	});
}

function displayCurrentYear() {
	const targetTexts = document.querySelectorAll('[data-display-year="text"]');
	if (!targetTexts.length) return;

	const currentYear = new Date().getFullYear();

	targetTexts.forEach((text) => {
		text.textContent = currentYear;
	});
}

function quoteFormQtyInput() {
	const quoteProducts = document.querySelectorAll('[data-product-quote="product"]');
	if (!quoteProducts.length) return;

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
			if (inputField.value < 1) {
				inputField.closest(".quote-modal_product").classList.remove("has-qty");
			}
		}
	}

	function qtyIncrease(inputField) {
		inputField.value = parseInt(inputField.value) + 1;
		if (inputField.value > 0) {
			inputField.closest(".quote-modal_product").classList.add("has-qty");
		}
	}
}

function formSelectFieldColor() {
	const selectWraps = document.querySelectorAll('[data-form-field="select-wrap"]');
	if (!selectWraps.length) return;

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
	const swiperTargets = document.querySelectorAll(".product-hero_swiper");
	if (!swiperTargets.length) return;

	swiperTargets.forEach((swiperTarget) => {
		const swiper = new Swiper(swiperTarget, {
			modules: [Pagination, Navigation],
			slidesPerView: 1,
			loop: true,
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

function productFeaturesSlider() {
	const swiperTarget = document.querySelector(".product-features_swiper");
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Navigation],
		slidesPerView: 1.4,
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

function customFormSubmitBtn() {
	const forms = document.querySelectorAll('[data-form-submit="form"]');
	if (!forms.length) return;

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
	if (!accordionInstances.length) return;

	accordionInstances.forEach((instance) => {
		const accordionItems = instance.querySelectorAll('[data-accordion="accordion-item"]');
		if (!accordionItems.length) return;

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
		modules: [Navigation],
		slidesPerView: "auto",
		loop: true,
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

function productStickyNav() {
	const productBar = document.querySelector('[data-product-bar="sticky-bar"]');
	if (!productBar) return;
	const heroSection = document.querySelector('[data-product-bar="hero"]');
	const footer = document.querySelector("footer");

	// Create the animation for showing the product bar when hero section leaves the viewport
	let showTl = gsap.timeline({
		scrollTrigger: {
			trigger: heroSection,
			start: "bottom top",
			toggleActions: "play none none reverse",
		},
	});
	showTl
		.set(productBar, {
			display: "flex",
		})
		.fromTo(
			productBar,
			{
				y: "1rem",
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.3,
				ease: "power3.out",
			}
		);

	// Create a separate animation for hiding the product bar when the footer enters the viewport
	let hideTl = gsap.timeline({
		scrollTrigger: {
			trigger: footer,
			start: "top bottom",
			end: "top top",
			toggleActions: "play none none reverse",
		},
	});
	hideTl
		.to(productBar, {
			y: "1rem",
			opacity: 0,
			duration: 0.3,
			ease: "power3.out",
		})
		.set(productBar, {
			display: "none",
		});
}

function popupAnimation() {
	const popupTriggers = document.querySelectorAll("[data-popup-trigger]");
	if (!popupTriggers.length) return;

	// Store the timelines with their corresponding popups
	const popupTimelines = {};

	// Utility function to open popup
	function openPopup(popupTl, popup) {
		popupTl.play();
		// Update the URL hash without reloading the page
		window.location.hash = popup.getAttribute("data-popup");
	}

	// Utility function to close popup
	function closePopup(popupTl) {
		popupTl.reverse();
		// Remove hash from URL without reloading the page
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}

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

		// Store the timeline in an object using popupName as the key
		popupTimelines[popupName] = { timeline: popupTl, popup: popup };

		trigger.addEventListener("click", (e) => {
			e.stopPropagation();
			e.preventDefault();
			openPopup(popupTl, popup);
		});

		closeBtn.addEventListener("click", () => {
			closePopup(popupTl);
		});

		popupOverlay.addEventListener("click", () => {
			closePopup(popupTl);
		});
	});

	// Open popup if URL hash matches any popup's data-popup attribute on page load
	window.addEventListener("load", () => {
		const hash = window.location.hash.substring(1); // Remove the `#` from the hash
		if (hash && popupTimelines[hash]) {
			const { timeline, popup } = popupTimelines[hash];
			openPopup(timeline, popup);
		}
	});
}

function mobileMenuAnimation() {
	const mobileMenu = document.querySelector('[data-mobile-menu="menu"]');
	if (!mobileMenu) return;

	const menuTrigger = document.querySelector('[data-mobile-menu="trigger"]');
	const menuWrap = mobileMenu.querySelector('[data-mobile-menu="wrap"]');
	const menuOverlay = mobileMenu.querySelector('[data-mobile-menu="overlay"]');
	const accordionButtons = document.querySelectorAll('[data-accordion="accordion-item"]');

	let menuOpen = false;

	let mm = gsap.matchMedia();

	mm.add("(max-width: 991px)", () => {
		// Change "auto" height value when accordion is activated for menu animation
		accordionButtons.forEach((button) => {
			button.addEventListener("click", () => {
				setTimeout(() => {
					menuTl.invalidate();
				}, 500);
			});
		});

		menuTl = gsap.timeline({
			paused: true,
			onStart: () => {
				gsap.set(mobileMenu, { display: "block" }); // Ensure display is set to block when animation starts
			},
			onReverseComplete: () => {
				gsap.set(mobileMenu, { display: "none" }); // Hide menu when reverse animation completes
			},
		});

		menuTl
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
	if (!featureItems.length) return;

	featureItems.forEach((item) => {
		const featureVideo = item.querySelector("video");
		const featureImage = item.querySelector(".product-features_image");
		item.addEventListener("mouseenter", () => {
			featureVideo.play();
		});
		item.addEventListener("mouseleave", () => {
			featureVideo.currentTime = 0;
			featureVideo.pause();
		});
	});
}

function mobileUsageSwiper() {
	const swiperTarget = document.querySelector('[data-usage-swiper="target"]');
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		slidesPerView: 1.3,
		spaceBetween: 16,
		breakpoints: {
			768: {
				slidesPerView: 2.7,
				spaceBetween: 20,
			},
		},
	});
}

function mobileProductCustomizeSwiper() {
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

function rotatingText() {
	const wordWraps = document.querySelectorAll('[data-rotating-text="wrap"]');
	if (!wordWraps.length) return;

	wordWraps.forEach((wrap) => {
		const words = gsap.utils.toArray(".product-hero_rotating-text", wrap);

		if (!words.length) return;

		const tl = gsap.timeline({
			repeat: -1,
		});
		gsap.set(words, {
			yPercent: (i) => (i ? 100 : 0),
			opacity: 1,
		});

		words.forEach((word, i) => {
			const next = words[i + 1];

			if (next) {
				// Animate current word up and next word into view
				tl.to(word, { yPercent: -100, duration: 0.8, ease: "power2.out" }, "+=1.5").to(next, { yPercent: 0, duration: 0.8, ease: "power2.out" }, "<");
			} else {
				// Final word: animate up and loop back to the first word
				tl.to(word, { yPercent: -100, duration: 0.8, ease: "power2.out" }, "+=1.5").fromTo(
					words[0],
					{ yPercent: 100 },
					{ yPercent: 0, immediateRender: false, duration: 0.8, ease: "power2.out" },
					"<"
				);
			}
		});
	});
}

function homeHeroSlides() {
	const swiperTarget = document.querySelector('[data-home-swiper="target"]');
	if (!swiperTarget) return;

	const swiper = new Swiper(swiperTarget, {
		modules: [Pagination, Autoplay],
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		allowTouchMove: false,
		speed: 800,
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

function testimonialSliderLabels() {
	const testimonialSlides = document.querySelectorAll('[data-testimonial-slides="slide"]');
	if (!testimonialSlides.length) return;

	testimonialSlides.forEach((slide) => {
		const label = slide.querySelector(".label");
		const category = label.textContent.toLowerCase().replace(" ", "-");
		label.classList.add(`is-${category}`);
	});
}

function customFormValidation() {
	$("form").each(function () {
		$(this).validate({
			rules: {
				Name: {
					required: true,
					minlength: 2,
				},
				Email: {
					required: true,
					email: true,
				},
				Message: {
					required: true,
					minlength: 5,
				},
				"Privacy-Policy": {
					required: true, // This is the checkbox field
				},
				Phone: {
					required: false, // Optional field
					digits: true, // Ensure it's only digits if filled
				},
				"Quote-Delivery": {
					required: true, // Required custom select dropdown field
				},
				"Company-name": {
					required: true,
				},
			},
			messages: {
				Name: {
					required: "Please enter your name",
					minlength: "Your name must consist of at least 2 characters",
				},
				Email: {
					required: "Please enter your email",
					email: "Please enter a valid email address",
				},
				Message: {
					required: "Please enter a message",
					minlength: "Your message must be at least 5 characters long",
				},
				Phone: {
					digits: "Please enter a valid phone number",
				},
				"Quote-Delivery": {
					required: "Please select an option from the list", // Custom message for the select field
				},
				"Company-name": {
					required: "Please enter your company",
				},
			},
			errorPlacement: function (error, element) {
				// Handle custom dropdown select field
				if (element.attr("name") === "Quote-Delivery") {
					element.closest(".form_select").append(error);
					// Append the icon inside the wrapper for visual feedback
					const svgIcon = `
                        <svg class="error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" stroke="#A5565A" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 5.4502L8 8.4502" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
                            <path d="M8 10.45L8 10.5" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>`;
					// Prepend the SVG icon to the error message for the custom dropdown
					error.html(svgIcon + " " + error.text());
					element.closest(".form_select").append(error);
				} else if (element.attr("name") === "Privacy-Policy") {
					// Add error class to the visual checkbox wrapper div
					element.closest(".form_checkbox-wrap").find(".form_checkbox").addClass("checkbox-error");
				} else {
					// For other fields, show the default error message with icon
					const svgIcon = `
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" stroke="#A5565A" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 5.4502L8 8.4502" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
                            <path d="M8 10.45L8 10.5" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>`;

					// Prepend the SVG icon to the error message
					error.html(svgIcon + " " + error.text());
					error.insertAfter(element);
				}
			},
			errorElement: "span",
			// Handle the success event (when the field becomes valid)
			success: function (label, element) {
				if ($(element).attr("name") === "Quote-Delivery") {
					// Remove error class and any error message for the custom dropdown
					$(element).closest(".form_select").find(".form_select-toggle").removeClass("error");
					$(element).closest(".form_select").find("span.error").remove();
				} else if ($(element).attr("name") === "PrivacyPolicy") {
					// Remove error class from the visual checkbox wrapper div
					$(element).closest(".form_checkbox-wrap").find(".form_checkbox").removeClass("checkbox-error");
				}
			},
			// Overriding showErrors to consistently apply the icon whenever error is updated
			showErrors: function (errorMap, errorList) {
				// Call the default behavior to show errors
				this.defaultShowErrors();

				// Iterate through each error in the errorList
				for (let i = 0; i < errorList.length; i++) {
					const error = errorList[i].message;
					const element = $(errorList[i].element);

					// Get the existing error message span and re-add the icon
					const errorLabel = element.siblings("span.error");

					if (errorLabel.length) {
						const svgIcon = `
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" stroke="#A5565A" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 5.4502L8 8.4502" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M8 10.45L8 10.5" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
                            </svg>`;

						// Update the error message with the icon every time it's updated
						errorLabel.html(svgIcon + " " + error);
					}
				}
			},
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	$.validator.setDefaults({
		ignore: [], // Do not ignore any hidden elements
	});
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
	mobileUsageSwiper();
	mobileProductCustomizeSwiper();
	homeHeroSlides();
	testimonialSliderLabels();
	customFormValidation();
	ScrollTrigger.refresh();
});
