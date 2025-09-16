import { gsap } from "gsap";

export function accordionAnimation() {
	const accordionInstances = document.querySelectorAll('[data-accordion="instance"]');
	if (!accordionInstances.length) return;

	accordionInstances.forEach((instance) => {
		const accordionItems = instance.querySelectorAll('[data-accordion="accordion-item"]');
		if (!accordionItems.length) return;

		// Instance config
		const animationDuration = parseInt(instance.getAttribute("data-accordion-duration")) || 400;
		const isAutoplay = instance.getAttribute("data-accordion-autoplay") || false;
		const autoplayDelay = 5000;

		// Instance state
		let activeIndex = null;
		const accordionsData = [];
		let autoplayInterval = null; // Used for storing and reseting interval for autoplay

		function openAccordion(index) {
			// Close previously opened accordion item (if there is one)
			if (activeIndex != null && index != activeIndex) {
				closeAccordion(activeIndex);
			}

			const { accordion, accordionTl, progressTl } = accordionsData[index];

			accordion.classList.add("is-open");
			accordionTl.play();

			if (isAutoplay && progressTl) {
				progressTl.play();
			}

			// Set active index to newly opened accordion
			activeIndex = index;

			// Dispatch custom event for image slide change
			const accordionChangeEvent = new CustomEvent("accordionChange", {
				detail: {
					activeIndex: index,
					animationDuration: animationDuration,
				},
			});

			instance.dispatchEvent(accordionChangeEvent);
		}

		function closeAccordion(index) {
			const { accordion, accordionTl, progressTl } = accordionsData[index];
			accordion.classList.remove("is-open");
			accordionTl.reverse();

			if (isAutoplay && progressTl) {
				progressTl.progress(0).pause();
			}

			// There are no longer open accordions
			activeIndex = null;
		}

		function startAutoplay() {
			if (!isAutoplay || autoplayInterval) return;

			autoplayInterval = setInterval(() => {
				const nextItemIndex = getAutoplayNextIndex();
				openAccordion(nextItemIndex);
			}, autoplayDelay);
		}

		function getAutoplayNextIndex() {
			if (activeIndex === null) {
				return 0;
			}

			if (activeIndex < accordionsData.length - 1) {
				return activeIndex + 1;
			} else if (activeIndex >= accordionsData.length - 1) {
				return 0;
			}
		}

		function resetAutoplay() {
			if (autoplayInterval) {
				clearInterval(autoplayInterval);
				autoplayInterval = null;
			}

			// Restart autoplay after a brief delay
			if (isAutoplay) {
				startAutoplay();
			}
		}

		accordionItems.forEach((accordion, index) => {
			const accordionTrigger = accordion.querySelector('[data-accordion="trigger"]');
			const accordionExpandWrap = accordion.querySelector('[data-accordion="expand-wrap"]');
			const accordionProgressBar = accordion.querySelector('[data-accordion="autoplay-progress"]');

			// Open/Close timeline
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

			// Progress bar timeline
			let progressTl = null;
			if (isAutoplay && accordionProgressBar) {
				progressTl = gsap.timeline({
					paused: true,
					onComplete: () => {
						progressTl.progress(0).pause();
					},
				});

				progressTl.fromTo(
					accordionProgressBar,
					{
						width: 0,
					},
					{
						width: "100%",
						duration: autoplayDelay / 1000,
						ease: "none",
					}
				);
			}

			accordionsData.push({
				accordion,
				accordionTl,
				progressTl,
			});

			accordionTrigger.addEventListener("click", (e) => {
				e.preventDefault();

				// Reset autoplay when manualy opening accordion item
				if (isAutoplay) {
					resetAutoplay();
				}

				if (accordion.classList.contains("is-open")) {
					closeAccordion(index);
				} else {
					openAccordion(index);
				}
			});

			// Open accordion on load if needed
			if (accordion.getAttribute("data-accordion-open")) {
				openAccordion(index);
			}
		});

		// Start autoplay if enabled
		if (isAutoplay) {
			startAutoplay();
		}
	});
}
