export function videoSlides() {
	const videoSlides = document.querySelectorAll("[data-gallery-video-url]");

	if (!videoSlides.length) return;

	function toggleBtnState(videoButton, buttonIcons, action) {
		if (action === "play") {
			videoButton.dataset.galleryVideoButton = "pause";
		} else {
			videoButton.dataset.galleryVideoButton = "play";
		}

		buttonIcons.forEach((icon) => {
			icon.classList.toggle("display-none");
		});
	}

	function toggleVideo(videoEl, action) {
		if (action === "play") {
			videoEl.play();
		} else {
			videoEl.pause();
		}
	}

	videoSlides.forEach((videoSlide) => {
		// Set video SRC from data attribute
		const videoURL = videoSlide.dataset.galleryVideoUrl;
		const sourceEl = videoSlide.querySelector("source");
		sourceEl.src = videoURL;

		// Get video element for play/pause
		const videoEl = videoSlide.querySelector("video");

		// Play and Pause functionality
		const videoButton = videoSlide.querySelector("[data-gallery-video-button]");
		const buttonIcons = videoButton.querySelectorAll(".gallery-slider_video-icon");

		videoButton.addEventListener("click", (e) => {
			e.preventDefault();

			const action = videoButton.dataset.galleryVideoButton;

			toggleVideo(videoEl, action);
			toggleBtnState(videoButton, buttonIcons, action);
		});

		videoEl.addEventListener("ended", () => {
			toggleBtnState(videoButton, buttonIcons, "pause");
		});
	});
}
