import { gsap } from "gsap";

export function customCursorAnimation() {
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
