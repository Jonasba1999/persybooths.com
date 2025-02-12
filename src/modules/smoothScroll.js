import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function smoothScroll() {
	window.lenis = new Lenis({
		lerp: 0.1,
	});

	window.lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add((time) => {
		window.lenis.raf(time * 1000);
	});

	gsap.ticker.lagSmoothing(0);
}

export function nestedLenisScroll() {
	const nestedTargets = document.querySelectorAll('[data-nested-lenis="wrapper"]');
	if (!nestedTargets.length) return;

	nestedTargets.forEach((wrapper) => {
		const content = wrapper.querySelector('[data-nested-lenis="content"]');
		const isMobile = window.matchMedia("(max-width: 768px)").matches;

		// Skip Lenis initialization on showroom mobile
		if (isMobile && wrapper.getAttribute("data-disable-lenis") === "mobile") {
			return;
		}

		const nestedLenis = new Lenis({
			wrapper: wrapper,
			content: content,
			lerp: 0.1,
			overscroll: false,
		});

		gsap.ticker.add((time) => {
			if (nestedLenis) {
				nestedLenis.raf(time * 1000);
			}
		});
	});
}

export function toggleScroll(disable = false) {
	if (disable) {
		window.lenis.stop();
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
		window.lenis.start();
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
