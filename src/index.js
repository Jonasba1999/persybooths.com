// Importing custom css
import "./custom-styles.css";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// Overlay scrollbar
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } from "overlayscrollbars";

// Global lenis instance
let lenis;
function smoothScroll() {
	lenis = new Lenis({
		lerp: 0.1,
	});

	// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
	lenis.on("scroll", ScrollTrigger.update);

	// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
	// This ensures Lenis's smooth scroll animation updates on each GSAP tick
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000); // Convert time from seconds to milliseconds
	});

	// Disable lag smoothing in GSAP to prevent any delay in scroll animations
	gsap.ticker.lagSmoothing(0);
}

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
	const boothImgWrap = document.querySelector('[data-features-scroll="booth-img-wrap"]');
	const boothImg = document.querySelector('[data-features-scroll="booth-img"]');
	const animationBuffer = 800;

	if (boothImg.complete) {
		initScrollAnimation();
	} else {
		boothImg.addEventListener("load", initScrollAnimation);
	}

	function initScrollAnimation() {
		// Calculations for boothPin end
		const windowHeight = window.innerHeight;
		const imgHeight = boothImg.offsetHeight;
		const bottomSpace = (windowHeight - imgHeight) / 2;

		// Timeline for booth image scaling
		let boothScaleTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: imageLayer,
				start: "top top",
				end: () => {
					return "+=" + animationBuffer * leftItems.length;
				},
				scrub: true,
			},
		});

		boothScaleTimeline.to(boothImgWrap, {
			scale: 0.9, // Target scale, adjust as needed
			ease: "none",
		});

		let contentLayerPin = ScrollTrigger.create({
			trigger: contentLayer,
			start: "top top",
			pin: true,
			end: () => {
				return "+=" + animationBuffer * leftItems.length;
			},
			pinspacing: true,
		});

		let imageLayerPin = ScrollTrigger.create({
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
			let featuresChangeTl = gsap.timeline({
				scrollTrigger: {
					toggleActions: "play none none reverse",
					trigger: ".features-scroll_wrap",
					start: () => {
						return index * animationBuffer + "px";
					},
					end: "+=200px",
					scrub: false,
					preventOverlaps: true,
				},
			});

			if (index !== 0) {
				featuresChangeTl
					.to([leftItems[index - 1], rightItems[index - 1], modalBtns[index - 1]], {
						opacity: 0,
					})
					.fromTo(
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
	ScrollTrigger.refresh();
}

function sideModalAnimation() {
	// Getting all modals on the page
	const modals = document.querySelectorAll("[data-modal]");
	if (!modals.length) return;

	let activeTl = null;
	const modalTimelines = {};

	function openModal(modalTl, modal) {
		modalTl.play();
		toggleScroll(true);
		activeTl = modalTl;
		window.location.hash = modal.getAttribute("data-modal");
	}

	function closeModal() {
		activeTl.reverse();
		toggleScroll();
		// Remove hash from URL without reloading the page
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}

	// Loop through each modal
	modals.forEach((modal) => {
		// Getting the modal's name
		const modalName = modal.getAttribute("data-modal");

		// Getting all triggers for this modal
		const triggers = document.querySelectorAll(`[data-modal-trigger="${modalName}"]`);

		// Getting other modal's elements
		const modalWrap = modal.querySelector('[data-modal-el="wrap"]');
		const modalOverlay = modal.querySelector('[data-modal-el="overlay"]');
		const closeBtns = modal.querySelectorAll('[data-modal-el="close-btn"]');

		// Create the timeline for this modal
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

		// Attach click event to each trigger to open the modal
		triggers.forEach((trigger) => {
			trigger.addEventListener("click", () => {
				openModal(modalTl, modal);
			});
		});

		// Attach close event listeners
		closeBtns.forEach((btn) => {
			btn.addEventListener("click", (event) => {
				closeModal();
			});
		});

		// Close modal via overlay click
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

function customCursorAnimation() {
	const cursor = document.querySelector(".cursor");
	if (!cursor) return;
	const cursorTriggers = document.querySelectorAll('[data-cursor-animation="trigger"]');
	const cursorIcon = document.querySelector('[data-cursor-animation="icon"]');

	// Set initial state of the cursor
	gsap.set(cursor, { xPercent: -50, yPercent: -50, autoAlpha: 0 });

	let xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" }),
		yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });

	window.addEventListener("pointermove", (e) => {
		xTo(e.clientX);
		yTo(e.clientY);
	});

	// Cursor reveal timeline
	let showTl = gsap.timeline({ paused: true });
	showTl.set(cursor, { autoAlpha: 1 }).to(cursor, { scale: 1, duration: 0.4, ease: "power4.inOut" });

	// Cursor click animation (check if cursor is visible)
	const cursorClick = () => {
		if (gsap.getProperty(cursor, "autoAlpha") === 1) {
			gsap.to(cursor, { scale: 0.9, duration: 0.15, ease: "power2.inOut" });
		}
	};

	// Cursor release animation
	const cursorRelease = () => {
		if (gsap.getProperty(cursor, "autoAlpha") === 1) {
			gsap.to(cursor, { scale: 1, duration: 0.15, ease: "power2.inOut" });
		}
	};

	document.addEventListener("mousedown", cursorClick);
	document.addEventListener("mouseup", cursorRelease);

	// Show cursor on hover
	cursorTriggers.forEach((trigger) => {
		// Set cursor size
		const cursorSize = trigger.getAttribute("data-cursor-size");
		const cursorType = trigger.getAttribute("data-cursor-type");

		trigger.addEventListener("mouseover", () => {
			// Set cursor icon rotation
			if (cursorType === "slide-prev") {
				gsap.set(cursorIcon, { rotation: -135 });
			} else if (cursorType === "slide-next") {
				gsap.set(cursorIcon, { rotation: 45 });
			} else {
				gsap.set(cursorIcon, { rotation: 0 });
			}

			// Set cursor size and reveal
			if (cursorSize === "small") {
				gsap.set(cursor, { width: "2.5rem", height: "2.5rem" });
			} else if (cursorSize === "medium") {
				gsap.set(cursor, { width: "3.5rem", height: "3.5rem" });
			} else if (cursorSize === "large") {
				gsap.set(cursor, { width: "5rem", height: "5rem" });
			}

			// Play the reveal timeline
			showTl.play();
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
			});
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

function productFeaturesSlider() {
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
	// Getting all popups on the page
	const popups = document.querySelectorAll("[data-popup]");
	if (!popups.length) return;

	// Store the timelines with their corresponding popups
	const popupTimelines = {};

	// Utility function to open popup
	function openPopup(popupTl, popup) {
		toggleScroll(true);
		popupTl.play();
		// Update the URL hash without reloading the page
		window.location.hash = popup.getAttribute("data-popup");
	}

	// Utility function to close popup
	function closePopup(popupTl) {
		toggleScroll();
		popupTl.reverse();
		// Remove hash from URL without reloading the page
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}

	// Loop through each popup
	popups.forEach((popup) => {
		// Getting the popup's name
		const popupName = popup.getAttribute("data-popup");

		// Getting all triggers for this popup
		const triggers = document.querySelectorAll(`[data-popup-trigger="${popupName}"]`);

		// Getting other popup elements
		const popupWrap = popup.querySelector('[data-popup-el="wrap"]');
		const popupOverlay = popup.querySelector('[data-popup-el="overlay"]');
		const closeBtn = popup.querySelector('[data-popup-el="close-btn"]');

		// Create the timeline for this popup
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

		// Attach click event to each trigger to open the popup
		triggers.forEach((trigger) => {
			trigger.addEventListener("click", (e) => {
				e.preventDefault();
				e.stopPropagation();
				openPopup(popupTl, popup);
			});
		});

		// Attach close event listeners
		closeBtn.addEventListener("click", () => {
			closePopup(popupTl);
		});

		// Close popup via overlay click
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
			if (featureVideo) {
				featureVideo.play();
			}
			if (featureImage && featureVideo) {
				gsap.to(featureImage, {
					opacity: 0,
					duration: 0.3,
				});
			}
		});
		item.addEventListener("mouseleave", () => {
			if (featureVideo) {
				featureVideo.currentTime = 0;
				featureVideo.pause();
			}
			if (featureImage && featureVideo) {
				gsap.to(featureImage, {
					opacity: 1,
					duration: 0.3,
				});
			}
		});
	});
}

function mobileUsageSwiper() {
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
			speed: 600,
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
				PrivacyPolicy: {
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
				} else if ($(element).attr("name") === "Privacy-Policy") {
					// Remove error class from the visual checkbox wrapper div
					$(element).closest(".form_checkbox-wrap").find(".form_checkbox").removeClass("checkbox-error");
				} else {
					// For all other fields, remove the error <span> element to prevent layout shifts
					$(label).remove();
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

function indexMobilityPinAnimation() {
	const pinSection = document.querySelector('[data-index-mobility-animation="section"]');
	if (!pinSection) return;

	const nextSection = pinSection.nextElementSibling; // Select next element
	const videoBlock = pinSection.querySelector('[data-index-mobility-animation="video-block"]');

	let mm = gsap.matchMedia();

	mm.add("(min-width: 992px)", () => {
		let pinAnimation = gsap.timeline({
			scrollTrigger: {
				refreshPriority: -1,
				trigger: videoBlock,
				pin: videoBlock,
				pinSpacing: false,
				start: "center center",
				endTrigger: nextSection,
				end: "top top",
				scrub: 0.1,
			},
		});

		// Add the animation to the timeline
		pinAnimation.to(videoBlock, {
			scale: 0.85,
			ease: "linear",
		});

		ScrollTrigger.refresh();
	});
}

function toggleScroll(disable = false) {
	if (disable) {
		lenis.stop();
		osInstance.options({
			overflow: {
				x: "hidden", // Disable horizontal scrolling
				y: "hidden", // Disable vertical scrolling
			},
			scrollbars: {
				visibility: "hidden", // Hide the scrollbars
			},
		});
	} else {
		lenis.start();
		osInstance.options({
			overflow: {
				x: "scroll", // Re-enable horizontal scrolling (if applicable)
				y: "scroll", // Re-enable vertical scrolling
			},
			scrollbars: {
				visibility: "auto", // Make the scrollbars visible again
			},
		});
	}
}

// Global overlay instance
let osInstance;
function overlayScrollbar() {
	// Simple initialization with an element
	osInstance = OverlayScrollbars(document.body, {});
}

function indexHeroScroll() {
	const heroSection = document.querySelector('[data-index-hero-scroll="section"]');
	if (!heroSection) return;

	const heroSwiper = document.querySelector('[data-index-hero-scroll="swiper"]');

	// create
	let mm = gsap.matchMedia();

	// add a media query. When it matches, the associated function will run
	mm.add("(min-width: 992px)", () => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: heroSection,
				start: "top top",
				end: "bottom top",
				scrub: 0.01,
			},
		});

		tl.to(heroSection, {
			borderBottomLeftRadius: "10px",
			borderBottomRightRadius: "10px",
			duration: 0.1,
		}).to(
			heroSwiper,
			{
				y: "15%",
				ease: "linear",
			},
			"<"
		);
	});
}

function indexStoryImagesParallax() {
	const imagesWrap = document.querySelector('[data-index-story-parallax="images-wrap"]');
	if (!imagesWrap) return;

	const bigImage = imagesWrap.querySelector('[data-index-story-parallax="big-img"]');
	const smallImages = imagesWrap.querySelectorAll('[data-index-story-parallax="small-img"]');

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: imagesWrap,
			start: "top bottom",
			end: "bottom top",
			scrub: 1,
			ease: "linear",
		},
	});

	tl.fromTo(
		bigImage,
		{
			y: "3%",
		},
		{
			y: "-1%",
		}
	).fromTo(
		smallImages,
		{
			y: "-5%",
		},
		{
			y: "5%",
			ease: "linear",
		},
		"<"
	);
}

function cookiesPopup() {
	// Function that modifies the cookieYes popup with JS
	function applyCustomCode() {
		const preferenceCenter = document.querySelector(".cky-preference-center");
		if (!preferenceCenter) return;

		preferenceCenter.setAttribute("data-lenis-prevent", "");

		const primaryBtns = document.querySelectorAll(".cky-btn-accept");
		const primaryBtnHTML =
			'<div class="button_text-wrap"><div class="button_visible-text">Accept all</div><div class="button_hidden-text">Accept all</div></div>';
		primaryBtns.forEach((btn) => {
			btn.innerHTML = primaryBtnHTML;
			btn.classList.add("button");
		});

		const secondaryBtns = document.querySelectorAll(".cky-btn-customize, .cky-btn-preferences");
		secondaryBtns.forEach((btn) => {
			btn.classList.add("button", "is-ghost");
		});

		const closeImg = preferenceCenter.querySelector(".cky-btn-close img");
		const newCloseImage = "https://cdn.prod.website-files.com/66f058a100becd0dab3c7c70/671794f17dca0eee2831d22a_close.svg";
		closeImg.src = newCloseImage;
	}

	// Mutation observer to wait for cookieYes banner to load
	const observer = new MutationObserver((mutationsList, observer) => {
		for (const mutation of mutationsList) {
			if (mutation.type === "childList") {
				// Check if the cookie banner is now in the DOM
				if (document.querySelector(".cky-consent-container")) {
					applyCustomCode();
					observer.disconnect(); // Stop observing once the banner is found
					break;
				}
			}
		}
	});

	observer.observe(document.body, { childList: true, subtree: true });
}

function navBgAnimation() {
	const navLinks = document.querySelectorAll('.header_nav [data-nav-bg-animation="link"]');
	if (!navLinks.length) return;

	const navBlob = document.querySelector('[data-nav-bg-animation="blob"]');
	const navWrap = document.querySelector('[data-nav-bg-animation="nav-wrap"]');
	const navContainer = navBlob.parentElement;
	let blobHidden = true;
	let currentLink;

	// Variable to check if subpage is current url
	const currentUrl = window.location.href;

	// Logic for product inner pages
	function isActiveNav(link) {
		return link.classList.contains("w--current") || currentUrl.includes(link.href);
	}

	function getLinkInfo(link) {
		const linkCoords = link.getBoundingClientRect();
		const navCoords = navContainer.getBoundingClientRect();

		// Calculate the left position relative to the parent container
		const leftPosition = linkCoords.left - navCoords.left;

		const data = {
			width: linkCoords.width,
			leftPosition: leftPosition,
		};

		return data;
	}

	function moveBlob(target, instant = false) {
		const { width, leftPosition } = getLinkInfo(target);
		const duration = !instant ? 0.3 : 0;

		gsap.to(navBlob, {
			width: width,
			left: leftPosition,
			duration: duration,
			ease: "power2.out",
		});
	}

	function showBlob() {
		blobHidden = false;
		gsap.to(navBlob, {
			opacity: 1,
			duration: 0.2,
		});
	}
	function hideBlob() {
		blobHidden = true;
		gsap.to(navBlob, {
			opacity: 0,
			duration: 0.3,
		});
	}

	navLinks.forEach((link) => {
		// Toggle blob if page = link
		if (isActiveNav(link)) {
			currentLink = link;
			moveBlob(link, true);
			showBlob();
		}

		link.addEventListener("mouseenter", () => {
			if (blobHidden) {
				moveBlob(link, true);
				showBlob();
			} else {
				moveBlob(link);
			}
		});

		link.addEventListener("mouseleave", () => {
			if (currentLink && currentLink !== link) {
				moveBlob(currentLink);
			} else if (currentLink === link) {
				return;
			}
		});
	});

	navWrap.addEventListener("mouseleave", () => {
		if (!currentLink) {
			hideBlob();
		}
	});
}

function megaMenuAnimation() {
	const menuTrigger = document.querySelector('[data-mega-menu="trigger"]');
	if (!menuTrigger) return;

	const menuWrap = document.querySelector('[data-mega-menu="wrap"]');
	const contentWrap = document.querySelector('[data-mega-menu="content"]');

	const menuHeight = contentWrap.scrollHeight;

	let menuTl = gsap.timeline({ paused: true });

	menuTl.set(menuWrap, {
		display: "flex",
	});
	menuTl.to(menuWrap, {
		height: "auto",
		duration: 0.8,
		ease: "power3.inOut",
	});

	menuTrigger.addEventListener("mouseenter", () => {
		menuTl.play();
	});
	menuTrigger.addEventListener("mouseleave", () => {
		menuTl.reverse();
	});
}

function formUTMparameters() {
	// Step 1: Check for UTM parameters in the URL and store them in localStorage
	function storeURLparameters() {
		const params = new URLSearchParams(window.location.search);
		const utmParameters = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

		utmParameters.forEach((param) => {
			if (params.has(param) && !localStorage.getItem(param)) {
				localStorage.setItem(param, params.get(param));
			}
		});
	}

	storeURLparameters();

	// Step 2: Populate form fields from localStorage
	function populateFormsFields() {
		const forms = document.querySelectorAll("form");
		if (!forms.length) return;

		forms.forEach((form) => {
			const utmFields = form.querySelectorAll('input[name^="utm_"]');

			utmFields.forEach((field) => {
				const fieldName = field.name;
				const localStorageValue = localStorage.getItem(fieldName);
				if (localStorageValue) {
					field.value = localStorageValue;
				}
			});
		});
	}

	populateFormsFields();
}

function formPageField() {
	const forms = document.querySelectorAll("form");
	if (!forms.length) return;
	const pageURL = window.location.href;

	forms.forEach((form) => {
		const urlField = form.querySelector('input[name="Page-URL"]');
		if (!urlField) return;
		urlField.value = pageURL;
	});
}

function footerParallax() {
	const footer = document.querySelector("footer");
	if (!footer) return;

	const sections = document.querySelectorAll("section");
	const lastSection = sections[sections.length - 1];

	const footerWrap = document.querySelector(".footer_fixed-wrap");
	const footerHeight = footerWrap.scrollHeight;
	footer.style.height = footerHeight + "px";

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: footer,
			start: "top bottom",
			end: "bottom bottom",
			scrub: 0.01,
		},
	});

	tl.from(
		footerWrap,
		{
			y: "40%",
			ease: "linear",
		},

		"<"
	);
}

document.addEventListener("DOMContentLoaded", () => {
	overlayScrollbar();
	gsap.registerPlugin(ScrollTrigger);
	smoothScroll();
	$.validator.setDefaults({
		ignore: [], // Do not ignore any hidden elements
	});
	indexHeroScroll();
	homeHeroSlides();
	dottedBoothPin();
	boothScrollAnimation();
	sideModalAnimation();
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
	accordionAnimation();
	productMobilitySlider();
	productStickyNav();
	popupAnimation();
	mobileMenuAnimation();
	productFeaturesVideo();
	mobileUsageSwiper();
	mobileProductCustomizeSwiper();
	customFormValidation();
	indexMobilityPinAnimation();
	indexStoryImagesParallax();
	cookiesPopup();
	navBgAnimation();
	megaMenuAnimation();
	formUTMparameters();
	formPageField();
	footerParallax();
	setTimeout(() => {
		ScrollTrigger.sort();
		ScrollTrigger.refresh();
	}, 1000);
});
