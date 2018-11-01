var homeButton = document.getElementsByClassName("home-button");

if (homeButton[0].addEventListener) {
	homeButton[0].addEventListener('click', homeButtonClicked);
}
else {
	homeButton[0].attachEvent('onclick', homeButtonClicked);
}
function homeButtonClicked() {
	location.href = "xzresume.html";
}

var feedBackContentDiv = document.getElementsByClassName("feedback-content");

go();
if (window.addEventListener) {
	window.addEventListener('resize', go);
}
else {
	window.attachEvent('onresize', go);
}
function go() {
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	if (h > 300.0) {
		var feedBackContentPaddingTop = (h - 180.0) * 0.3;
		feedBackContentDiv[0].style.paddingTop = feedBackContentPaddingTop + "px";
	}
}
