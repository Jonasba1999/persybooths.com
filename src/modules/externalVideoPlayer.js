export function externalVideoPlayer() {
	const externalVideos = document.querySelectorAll("[data-external-video-wrap]");

	if (!externalVideos.length) return;

	function toggleBtnState(videoButton, action) {
		if (action === "play") {
			videoButton.dataset.externalVideoBtn = "pause";
		} else {
			videoButton.dataset.externalVideoBtn = "play";
		}
	}

	function toggleVideo(videoEl, action) {
		if (action === "play") {
			videoEl.play();
		} else {
			videoEl.pause();
		}
	}

	function setVideoSrc(videoURL, videoEl) {
		const sourceEl = videoEl.querySelector("source");
		sourceEl.src = videoURL;
	}

	externalVideos.forEach((externalVideo) => {
		// Set video SRC from data attribute if there is one (for components like slider)
		const videoURL = externalVideo.dataset.externalVideoWrap;

		if (videoURL) {
			setVideoSrc(videoURL, externalVideo);
		}

		// Get video element for play/pause
		const videoEl = externalVideo.querySelector("video");

		// Play and Pause functionality
		const videoButton = externalVideo.querySelector("[data-external-video-btn]");

		videoButton.addEventListener("click", (e) => {
			e.preventDefault();

			const action = videoButton.dataset.externalVideoBtn;

			toggleVideo(videoEl, action);
			toggleBtnState(videoButton, action);
		});

		videoEl.addEventListener("ended", () => {
			toggleBtnState(videoButton, "pause");
		});
	});
}
