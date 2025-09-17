import { gsap } from "gsap";

export function accordionAnimation() {
	const accordionInstances = document.querySelectorAll('[data-accordion="instance"]');
	if (!accordionInstances.length) return;

	accordionInstances.forEach((instance) => {
		const accordionItems = instance.querySelectorAll('[data-accordion="accordion-item"]');
		if (!accordionItems.length) return;

		// Instance config
		const animationDuration = parseInt(instance.getAttribute("data-accordion-duration")) || 400;
		const isAutoplay = instance.getAttribute("data-accordion-autoplay") && window.matchMedia("(min-width: 769px)").matches;
		const autoplayDelay = 5000;

		// Instance state
		let activeIndex = null;
		const accordionsData = [];
		let autoplayInterval = null;
		let isHovered = false; // Track hover state
		let autoplayStartTime = null; // Track when current autoplay cycle started
		let pausedElapsedTime = 0; // Track how much time elapsed when paused

		function openAccordion(index) {
			// Close previously opened accordion item (if there is one)
			if (activeIndex != null && index != activeIndex) {
				closeAccordion(activeIndex);
			}

			const { accordion, accordionTl, progressTl } = accordionsData[index];

			accordion.classList.add("is-open");
			accordionTl.play();

			if (isAutoplay && progressTl && !isHovered) {
				progressTl.play();
			}

			// Set active index to newly opened accordion
			activeIndex = index;

			// Reset timing when manually opening or auto-opening new accordion
			pausedElapsedTime = 0;
			autoplayStartTime = Date.now();

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
			if (!isAutoplay || autoplayInterval || isHovered) return;

			// Calculate remaining time from pause or start fresh
			const remainingTime = pausedElapsedTime > 0 ? autoplayDelay - pausedElapsedTime : autoplayDelay;

			// Set start time for current cycle
			autoplayStartTime = Date.now();

			autoplayInterval = setTimeout(() => {
				if (!isHovered) {
					const nextItemIndex = getAutoplayNextIndex();
					pausedElapsedTime = 0; // Reset elapsed time after completing a cycle
					openAccordion(nextItemIndex);
				}
			}, remainingTime);
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
				clearTimeout(autoplayInterval);
				autoplayInterval = null;
			}

			// Reset timing variables
			pausedElapsedTime = 0;
			autoplayStartTime = null;

			// Restart autoplay after a brief delay (only if not hovered)
			if (isAutoplay && !isHovered) {
				startAutoplay();
			}
		}

		function pauseAutoplay() {
			// Calculate elapsed time since autoplay started
			if (autoplayStartTime) {
				pausedElapsedTime = Date.now() - autoplayStartTime;
			}

			// Clear the autoplay timeout
			if (autoplayInterval) {
				clearTimeout(autoplayInterval);
				autoplayInterval = null;
			}

			// Pause the progress animation for currently active accordion
			if (activeIndex !== null && accordionsData[activeIndex].progressTl) {
				accordionsData[activeIndex].progressTl.pause();
			}
		}

		function resumeAutoplay() {
			// Resume progress animation for currently active accordion
			if (activeIndex !== null && accordionsData[activeIndex].progressTl) {
				accordionsData[activeIndex].progressTl.play();
			}

			// Restart autoplay
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

				// Reset autoplay when manually opening accordion item
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

		// Add hover event listeners to the instance
		instance.addEventListener("mouseenter", () => {
			if (isAutoplay) {
				isHovered = true;
				pauseAutoplay();
			}
		});

		instance.addEventListener("mouseleave", () => {
			if (isAutoplay) {
				isHovered = false;
				resumeAutoplay();
			}
		});

		// Start autoplay if enabled
		if (isAutoplay) {
			startAutoplay();
		}
	});
}
