export function cookiesPopup() {
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
