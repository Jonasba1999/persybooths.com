export function customFormValidation() {
	const svgIcon = `
    <svg class="error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" stroke="#A5565A" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 5.4502L8 8.4502" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
        <path d="M8 10.45L8 10.5" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>`;

	$.validator.addMethod(
		"inArray",
		function (value, element, array) {
			return array.includes(value); // Check if the value exists in the array
		},
		svgIcon + "Please select a valid option."
	); // Custom error message

	$.validator.addMethod(
		"phone",
		function (value, element) {
			return this.optional(element) || /^[\+]?[\d\s\-\(\)]+$/.test(value);
		},
		"Please enter a valid phone number"
	);

	$("form").each(function () {
		const validCountries = [];
		const deliveryOptions = this.querySelectorAll('[data-custom-select="link"]');
		if (deliveryOptions.length) {
			deliveryOptions.forEach((option) => {
				validCountries.push(option.textContent);
			});
		}

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
					phone: true, // Ensure it's only digits if filled
				},
				"Quote-Delivery": {
					required: true, // Required custom select dropdown field
					inArray: validCountries,
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
				// Handle custom dropdown select field with `inArray` validation
				if (element.attr("name") === "Quote-Delivery") {
					element.closest(".form_select").append(error); // Place the error in the dropdown wrapper
				} else if (element.attr("name") === "Privacy-Policy") {
					// Add error class to the visual checkbox wrapper div
					element.closest(".form_checkbox-wrap").find(".form_checkbox").addClass("checkbox-error");
				} else {
					// For other fields, insert the error message after the element
					error.insertAfter(element);
				}
			},
			errorElement: "span",

			// Handle the success event (when the field becomes valid)
			success: function (label, element) {
				if ($(element).attr("name") === "Quote-Delivery") {
					$(element).closest(".form_select").find(".form_select-toggle").removeClass("error");
					$(element).closest(".form_select").find("span.error").remove();
				} else if ($(element).attr("name") === "Privacy-Policy") {
					$(element).closest(".form_checkbox-wrap").find(".form_checkbox").removeClass("checkbox-error");
				} else {
					$(label).remove(); // Remove error <span> to prevent layout shifts
				}
			},

			// Overriding showErrors to consistently apply the icon whenever error is updated
			showErrors: function (errorMap, errorList) {
				// Call the default behavior to show errors
				this.defaultShowErrors();

				// Iterate through each error in the errorList and prepend the icon to each error message
				errorList.forEach((errorItem) => {
					const element = $(errorItem.element); // The input field with the error

					// Locate the error message using the aria-describedby attribute
					const describedById = element.attr("aria-describedby");
					const errorLabel = $("#" + describedById); // Select by ID

					// Only add the icon if it hasn't been added already, to avoid duplicates
					if (errorLabel.length && !errorLabel.html().includes("error-icon")) {
						errorLabel.html(svgIcon + " " + errorItem.message); // Add icon + error message
					}
				});
			},
		});
	});
}

export function quoteFormQtyInput() {
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

export function formUTMparameters() {
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

export function formPageField() {
	const forms = document.querySelectorAll("form");
	if (!forms.length) return;
	const pageURL = window.location.href;

	forms.forEach((form) => {
		const urlField = form.querySelector('input[name="Page-URL"]');
		if (!urlField) return;
		urlField.value = pageURL;
	});
}

export function customFormSelect() {
	const selectWraps = document.querySelectorAll('[data-custom-select="select-wrap"]');
	if (!selectWraps.length) return;

	selectWraps.forEach((wrap) => {
		const selectField = wrap.querySelector('[data-custom-select="select-field"]');
		const inputField = wrap.querySelector('[data-custom-select="text-input"]');
		const optionLinks = wrap.querySelectorAll('[data-custom-select="link"]');
		const dropdownWrap = wrap.querySelector('[data-custom-select="dropdown-wrap"]');

		optionLinks.forEach((link) => {
			link.addEventListener("click", linkClick);
		});

		function linkClick() {
			$(".w-dropdown").trigger("w-close");
			inputField.value = this.textContent;
			$(inputField).valid();
		}

		function filterOptions(e) {
			// 1. Get current input value
			const filterValue = e.target.value.toLowerCase();

			// 2. Loop through all links inside dropdownWrap
			const dropdownLinks = wrap.querySelectorAll("a");
			dropdownLinks.forEach((link) => {
				if (link.textContent.toLowerCase().startsWith(filterValue)) {
					link.style.display = "block";
				} else {
					link.style.display = "none";
				}
			});
		}

		function clearInput(e) {
			e.target.value = "";
			filterOptions(e);
		}

		inputField.addEventListener("keyup", filterOptions);
		inputField.addEventListener("focus", clearInput);
	});
}
