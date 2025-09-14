export function productCompare() {
	const productCompareWraps = document.querySelectorAll('[data-product-compare="wrap"]');

	if (!productCompareWraps.length) return;

	productCompareWraps.forEach((wrap) => {
		const productItems = wrap.querySelectorAll('[data-product-compare="product"]');
		const currentProductName = wrap.dataset.currentProduct;

		productItems.forEach((product) => {
			const productName = product.querySelector('[data-product-compare="name"]').textContent;

			if (currentProductName === productName) {
				product.classList.add("is-current");
			}
		});
	});
}
