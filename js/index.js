var prevScrollpos = window.pageYOffset;
window.onscroll = function(e) {
	var currentscrollpos = window.pageYOffset;

	if (prevScrollpos > currentscrollpos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-100px";
	}

	prevScrollpos = currentscrollpos;
};

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
window.onload = animateCSS(".header__content", "fadeInDownBig");
