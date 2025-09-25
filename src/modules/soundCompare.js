import { gsap } from "gsap";

export function soundCompare() {
	const animationTarget = document.querySelector("[data-sound-animation-target]");
	if (!animationTarget) return;

	const outsideNoise = new Audio(
		"https://cdn.prod.website-files.com/6801d6dc5d6eee6b305b8333/68d4f3a55d5e088a819a848b_Persy%20Booths_AMB_45s_No%20Filter_V5.mp3"
	);
	const insideNoise = new Audio("https://cdn.prod.website-files.com/6801d6dc5d6eee6b305b8333/68d4f3a52d008733491a68fc_Persy%20Booths_AMB_45s_Filter_V5.mp3");

	if (!outsideNoise || !insideNoise) return;

	const audioElements = [outsideNoise, insideNoise];

	// Mute inside noise, because by default we play outside noise
	insideNoise.muted = true;

	let audioDuration = 0;
	let loadedMetadataCounter = 0;

	const playButton = animationTarget.querySelector('[data-sound-play="button"]');
	const playIcon = playButton.querySelector('[data-sound-play="icon-play"]');
	const pauseIcon = playButton.querySelector('[data-sound-play="icon-pause"]');

	const environmentButtons = animationTarget.querySelectorAll("[data-sound-environment]");
	const environmentActiveBg = animationTarget.querySelector("[data-sound-active-environment]");
	const envControlsWrap = animationTarget.querySelector(".product-sound_env-controls");

	const outsideNoiseWave = animationTarget.querySelector('[data-sound-wave="outside"]');
	const insideNoiseWave = animationTarget.querySelector('[data-sound-wave="inside"]');

	let isPlaying = false;
	let currentActiveEnvironment = "outside"; // Track the currently active environment

	let soundWaveTl;

	audioElements.forEach((audio) => {
		audio.addEventListener("loadedmetadata", () => {
			if (audio.duration > audioDuration) {
				audioDuration = audio.duration;
			}

			loadedMetadataCounter++;
			if (loadedMetadataCounter === 2) {
				createAnimation();
			}
		});
	});

	function createAnimation() {
		soundWaveTl = gsap.timeline({ paused: true });
		soundWaveTl.fromTo(
			".animated-sound-wave",
			{
				drawSVG: "100% 100%",
			},
			{
				drawSVG: "0% 100%",
				duration: audioDuration,
				ease: "none",
			}
		);
	}

	function toggleEnvironment(environment) {
		if (environment === "outside") {
			outsideNoise.muted = false;
			insideNoise.muted = true;
			outsideNoiseWave.style.opacity = 100;
			insideNoiseWave.style.opacity = 0;
		} else {
			outsideNoise.muted = true;
			insideNoise.muted = false;
			insideNoiseWave.style.opacity = 100;
			outsideNoiseWave.style.opacity = 0;
		}
	}

	function showPlayIcon() {
		playIcon.style.display = "flex";
		pauseIcon.style.display = "none";
	}

	function showPauseIcon() {
		playIcon.style.display = "none";
		pauseIcon.style.display = "flex";
	}

	function toggleAudio() {
		if (isPlaying) {
			isPlaying = false;
			showPlayIcon();
			soundWaveTl.pause();
			outsideNoise.pause();
			insideNoise.pause();
		} else {
			isPlaying = true;
			showPauseIcon();
			soundWaveTl.play();
			outsideNoise.play();
			insideNoise.play();
		}
	}

	function handleAudioEnd() {
		showPlayIcon();
		isPlaying = false;
		soundWaveTl.pause();
		soundWaveTl.progress(0);
	}

	function setEnvironmentActiveBtn(buttonWidth, activeButton) {
		const wrapRect = envControlsWrap.getBoundingClientRect();
		const btnRect = activeButton.getBoundingClientRect();

		const btnLeft = btnRect.left - wrapRect.left;

		gsap.to(environmentActiveBg, {
			width: buttonWidth,
			left: btnLeft,
			duration: 0.3,
			ease: "power2.out",
		});
	}

	// Handle window resize to adjust active background position
	function handleResize() {
		// Find the currently active button based on the environment state
		const activeButton = document.querySelector(`[data-sound-environment="${currentActiveEnvironment}"]`);
		if (activeButton) {
			const buttonWidth = activeButton.offsetWidth;
			setEnvironmentActiveBtn(buttonWidth, activeButton);
		}
	}

	// Add resize event listener with debouncing for better performance
	let resizeTimeout;
	window.addEventListener("resize", () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(handleResize, 100);
	});

	playButton.addEventListener("click", () => {
		toggleAudio();
	});

	environmentButtons.forEach((button) => {
		const environment = button.dataset.soundEnvironment;
		const buttonWidth = button.offsetWidth;

		if (environment === "outside") {
			setEnvironmentActiveBtn(buttonWidth, button);
		}

		button.addEventListener("click", () => {
			toggleEnvironment(environment);
			currentActiveEnvironment = environment; // Update the active environment state
			const currentButtonWidth = button.offsetWidth; // Get current width, not cached width
			setEnvironmentActiveBtn(currentButtonWidth, button);
		});
	});

	insideNoise.addEventListener("ended", () => {
		if (outsideNoise.ended) {
			handleAudioEnd();
		}
	});

	outsideNoise.addEventListener("ended", () => {
		if (insideNoise.ended) {
			handleAudioEnd();
		}
	});
}
