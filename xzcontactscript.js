/*
var viewportSize = document.createElement("p");
viewportSize.id = "viewport-size";
//viewportSize.setAttribute("id", "viewport-size");
var vsNode = document.createTextNode("test");
viewportSize.appendChild(vsNode);
var banner = document.getElementsByClassName("banner");
var mainHeader = document.getElementById("main-header");
banner[0].insertBefore(viewportSize, mainHeader);
*/
var messagepage = document.getElementsByClassName("message-page");

go();
window.addEventListener('resize', go);
function go() {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	/*
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	vsSize = document.getElementById('viewport-size');
	vsSize.innerHTML = w + 'x' + h;
	vsSize.style.padding = "0";
	vsSize.style.margin = "0";
	*/
	if (w > 620.0) {
		var paddingPercentage = 100.0 * ((w * 0.84 - 520.0) / 2.4) / w;
		messagepage[0].style.paddingLeft = paddingPercentage + '%';
		messagepage[0].style.paddingRight = paddingPercentage + '%';
	}
}

var homeButton = document.getElementsByClassName("home-button");
var formSubmitButton = document.getElementsByClassName("form-submit");
var messageMeDiv = document.getElementsByClassName("message-me");

homeButton[0].addEventListener('click', homeButtonClicked);
function homeButtonClicked() {
	location.href = "xzresume.html";
}

var disableSubmit = function () {
	formSubmitButton[0].disabled = true;
	formSubmitButton[0].style.opacity = 0.5;
	formSubmitButton[0].style.filter = "alpha(opacity=50)";
	formSubmitButton[0].style.cursor = "not-allowed";
	messageMeDiv[0].style.borderColor = "rgb(205, 229, 206)";
};

var enableSubmit = function () {
	formSubmitButton[0].disabled = false;
	formSubmitButton[0].style.opacity = 1;
	formSubmitButton[0].style.filter = "alpha(opacity=100)";
	formSubmitButton[0].style.cursor = "pointer";
	messageMeDiv[0].style.borderColor = "#4CAF50";
};

var applySubmitStyle = function () {
	if (formSubmitButton[0].disabled) {
		formSubmitButton[0].style.opacity = 0.5;
		formSubmitButton[0].style.filter = "alpha(opacity=50)";
		formSubmitButton[0].style.cursor = "not-allowed";
		messageMeDiv[0].style.borderColor = "rgb(205, 229, 206)";
	}
	else {
		formSubmitButton[0].style.opacity = 1;
		formSubmitButton[0].style.filter = "alpha(opacity=100)";
		formSubmitButton[0].style.cursor = "pointer";
		messageMeDiv[0].style.borderColor = "#4CAF50";
	}
};

//document.addEventListener("DOMContentLoaded", pageLoaded);
var pageLoaded = function () {
	formSubmitButton[0].disabled = true;
	applySubmitStyle();
};

window.onload = pageLoaded;

applySubmitStyle();

var messageBody = document.getElementById("message-body");
var messageBodyLength = document.getElementsByClassName("message-body-length");

if (messageBody.addEventListener) {
	messageBody.addEventListener('input', handleMessageBodyLengthIndication, false);
}
else if (messageBody.attachEvent){
	messageBody.attachEvent('onpropertychange', handleMessageBodyLengthIndication);
}

function handleMessageBodyLengthIndication() {
	if (messageBody.value.length === 0) {
		messageBodyLength[0].style.display = "none";
		messageBodyLength[0].style.color = "green";
	}
	else if (messageBody.value.length < 1200) {
		messageBodyLength[0].style.display = "block";
		messageBodyLength[0].innerHTML = messageBody.value.length + '/1200';
		messageBodyLength[0].style.color = "green";
	}
	else {
		messageBodyLength[0].style.display = "block";
		messageBodyLength[0].innerHTML = messageBody.value.length + '/1200';
		messageBodyLength[0].style.color = "red";
	}
}
/*
$(document).ready(function() {
    disableSubmit();
});
*/
