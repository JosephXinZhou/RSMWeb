var contactContent;
if (document.getElementsByClassName) {
	contactContent = document.getElementsByClassName("contact-content");
}
else {
	contactContent = document.querySelectorAll(".contact-content");
}

go();

if (window.addEventListener) {
	window.addEventListener('resize', go);
}
else {
	window.attachEvent('onresize', go);
}
function go() {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (w > 520.0) {
		var paddingPercentage = 100.0 * ((w - 520.0) / 2.4) / w;
		contactContent[0].style.paddingLeft = paddingPercentage + '%';
		contactContent[0].style.paddingRight = paddingPercentage + '%';
	}
}

var homeButton, formSubmitButton, messageMeDiv;
if (document.getElementsByClassName) {
	homeButton = document.getElementsByClassName("home-button");
	formSubmitButton = document.getElementsByClassName("form-submit");
	messageMeDiv = document.getElementsByClassName("message-me");
}
else {
	homeButton = document.querySelectorAll(".home-button");
	formSubmitButton = document.querySelectorAll(".form-submit");
	messageMeDiv = document.querySelectorAll(".message-me");
}

if (homeButton[0].addEventListener) {
	homeButton[0].addEventListener('click', homeButtonClicked);
}
else {
	homeButton[0].attachEvent('onclick', homeButtonClicked);
}
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

var pageLoaded = function () {
	formSubmitButton[0].disabled = true;
	applySubmitStyle();
};

window.onload = pageLoaded;

applySubmitStyle();

var messageBody = document.getElementById("message-body");
var messageBodyLength;
if (document.getElementsByClassName) {
	messageBodyLength = document.getElementsByClassName("message-body-length");
}
else {
	messageBodyLength = document.querySelectorAll(".message-body-length");
}
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
