export function displayCurrentYear() {
	const targetTexts = document.querySelectorAll('[data-display-year="text"]');
	if (!targetTexts.length) return;

	const currentYear = new Date().getFullYear();

	targetTexts.forEach((text) => {
		text.textContent = currentYear;
	});
}

export function getCartCount() {
	function updateCartCount() {
		// Function to get cookie value
		function getCookie(name) {
			const value = `; ${document.cookie}`;
			const parts = value.split(`; ${name}=`);
			if (parts.length === 2) return parts.pop().split(";").shift();
			return "0";
		}

		// Get the cart count from cookie
		const count = parseInt(getCookie("persy_cart_count")) || 0;

		// Update the display
		const cartCountElement = document.querySelectorAll('[data-cart-count="counter"]');

		if (cartCountElement.length) {
			cartCountElement.forEach((counterEl) => {
				counterEl.textContent = count;
			});
		}
	}

	// Initial update
	updateCartCount();

	// Check periodically (every 3 seconds)
	setInterval(updateCartCount, 3000);
}
