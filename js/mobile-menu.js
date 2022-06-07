"use strict";

var navigationMain = document.querySelector(".main-navigation");
var navigationToggle = document.querySelector(".main-navigation__toggle");

navigationMain.classList.remove("main-navigation--nojs");
navigationToggle.addEventListener("click", function () {
	if (navigationMain.classList.contains("main-navigation--closed")) {
		navigationMain.classList.remove("main-navigation--closed");
		navigationMain.classList.add("main-navigation--opened");
	} else {
		navigationMain.classList.add("main-navigation--closed");
		navigationMain.classList.remove("main-navigation--opened"); 
	}
});
