"use strict";

var login = document.querySelector(".user-list__login");
var overlay = document.querySelector(".overlay");
var modalLogin = document.querySelector(".modal__login");
var modalLoginClose = modalLogin.querySelector(".modal__close");

login.addEventListener("click", function (event) {
	event.preventDefault();

	overlay.classList.remove("overlay--show");
	overlay.classList.add("overlay--show");

	modalLogin.classList.remove("modal__login--show");
	modalLogin.classList.add("modal__login--show");
});

overlay.addEventListener("click", function (event) {
	if (event.target === overlay) {
		modalLogin.classList.remove("modal__login--show");
		overlay.classList.remove("overlay--show");
	}
});

modalLoginClose.addEventListener("click", function (event) {
	event.preventDefault();

	modalLogin.classList.remove("modal__login--show");
	overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function (event) {
	if (event.key === "Escape" || event.key === "Esc") {
		event.preventDefault();

		if (modalLogin.classList.contains("modal__login--show")) {
			modalLogin.classList.remove("modal__login--show");
			overlay.classList.remove("overlay--show");
		}
	}
});
