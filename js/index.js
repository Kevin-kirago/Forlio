const tmLine = gsap.timeline();

if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
	// animations (animate.css)
	function animateCSS(element, animationName, callback) {
		const node = document.querySelector(element);
		node.classList.add("animated", animationName);

		function handleAnimationEnd() {
			node.classList.remove("animated", animationName);
			node.removeEventListener("animationend", handleAnimationEnd);

			if (typeof callback === "function") callback();
		}

		node.addEventListener("animationend", handleAnimationEnd);
	}

	animateCSS(".scroll-indicator", "bounce");

	document.addEventListener("DOMContentLoaded", () => {
		window.onload = () => {
			tmLine
				.from(".h1", {
					autoAlpha: 0,
					y: 20,
					duration: 1,
					delay: 0.9,
					ease: "ease",
				})
				.from(".h2", {
					autoAlpha: 0,
					y: 20,
					duration: 0.8,
					delay: 0.2,
					ease: "ease",
				})
				.from(".h3", {
					autoAlpha: 0,
					y: 20,
					duration: 0.7,
					delay: 0.1,
					ease: "ease",
				})
				.from(".h4", {
					autoAlpha: 0,
					y: 20,
					duration: 0.6,
					ease: "ease",
				})
				.from([".navigation__logo", ".navigation__list", ".navigation__btn"], {
					autoAlpha: 0,
					y: 20,
					duration: 1,
					delay: 0.3,
					ease: "ease",
				});
		};
	});
} else {
	tmLine.from([".navigation__logo", ".navigation__list", ".navigation__btn"], {
		autoAlpha: 0,
		y: 20,
		duration: 1,
		delay: 0.3,
		ease: "ease",
	});
}
