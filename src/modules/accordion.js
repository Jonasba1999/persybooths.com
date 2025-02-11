import { gsap } from "gsap";

export function accordionAnimation() {
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
