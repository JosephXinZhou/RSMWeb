var lwButtons, dropdownButtons, modalWrapper, modals, spans, mainPageWrapper, navDropDown, navDropDownContent, navMenuButton, navHorizontalBar, contactButton, stylesButtons;
if (document.getElementsByClassName) {
	lwButtons = document.getElementsByClassName('lw-button');
	dropdownButtons = document.getElementsByClassName('dropdown-button');
	modalWrapper = document.getElementsByClassName("modal-wrapper");
	modals = document.getElementsByClassName("modal");
	spans = document.getElementsByClassName("close");
	mainPageWrapper = document.getElementsByClassName("page-wrapper");
	navDropDown = document.getElementsByClassName("nav-dropdown");
	navDropDownContent = document.getElementsByClassName("nav-dropdown-content");
	navMenuButton = document.getElementsByClassName("menu-button");
	navHorizontalBar = document.getElementsByClassName("nav-horizontal-bar");
	contactButton = document.getElementsByClassName("contact-button");
	stylesButtons = document.getElementsByClassName("styles-button");
}
else {
	lwButtons = document.querySelectorAll('.lw-button');
	dropdownButtons = document.querySelectorAll('.dropdown-button');
	modalWrapper = document.querySelectorAll(".modal-wrapper");
	modals = document.querySelectorAll(".modal");
	spans = document.querySelectorAll(".close");
	mainPageWrapper = document.querySelectorAll(".page-wrapper");
	navDropDown = document.querySelectorAll(".nav-dropdown");
	navDropDownContent = document.querySelectorAll(".nav-dropdown-content");
	navMenuButton = document.querySelectorAll(".menu-button");
	navHorizontalBar = document.querySelectorAll(".nav-horizontal-bar");
	contactButton = document.querySelectorAll(".contact-button");
	stylesButtons = document.querySelectorAll(".styles-button");
}

var headElements = document.getElementsByTagName("head");
var addEventListenerValid = true;

if (lwButtons[0].addEventListener) {
}
else {
	addEventListenerValid = false;
}

window.onload = pageLoaded;
function pageLoaded() {
	if (!sessionStorage.getItem("cssIndex")) {
		sessionStorage.setItem("cssIndex", 0);
	}
	else {
		var cssIndexNumber = Number(sessionStorage.getItem("cssIndex"));
		if (cssIndexNumber != 0 && cssIndexNumber != 1 && cssIndexNumber != 2) {
			sessionStorage.setItem("cssIndex", 0);
		}

		loadCSSAccordingToCssIndex();
	}
}

for (var i = 0; i < 4; i++) {
	if (addEventListenerValid) {
		lwButtons[i].addEventListener('click', showModalButtonClicked);
		dropdownButtons[i].addEventListener('click', showModalButtonClicked);
		spans[i].addEventListener('click', closeModalElementClicked);
	}
	else {
		lwButtons[i].attachEvent('onclick', showModalButtonClicked);
		dropdownButtons[i].attachEvent('onclick', showModalButtonClicked);
		spans[i].attachEvent('onclick', closeModalElementClicked);
	}
}

function showModalButtonClicked() {
	this.blur();

	modalWrapper[0].style.display = "block";
	modals[Number(this.value)].style.display = "block";
	mainPageWrapper[0].style.overflow = "hidden";
	/*mainPageWrapper[0].style.height = "100%";*/
	mainPageWrapper[0].style.position = "fixed";
}

function closeModalElementClicked() {
	this.blur();

	modalWrapper[0].style.display = "none";
	modals[Number(this.id.slice(-1))].style.display = "none";  
	mainPageWrapper[0].style.overflow = "visible";
	/*mainPageWrapper[0].style.height = "auto";*/
	mainPageWrapper[0].style.position = "static";
}

if (addEventListenerValid) {
	navDropDown[0].addEventListener('mouseover', navDropdownMouseover);
}
else {
	navDropDown[0].attachEvent('onmouseover', navDropdownMouseover);
}
function navDropdownMouseover() {
	navDropDownContent[0].style.display = "block";
	var cssStyleIndex = sessionStorage.getItem("cssIndex");
	if (cssStyleIndex == 1) {
		navMenuButton[0].style.backgroundColor = "rgb(255, 255, 255)";
		navMenuButton[0].style.color = "rgb(32, 112, 167)";
		navMenuButton[0].style.textShadow = "3px 0 rgb(32, 112, 167), -3px 0 rgb(32, 112, 167)";
	}
	else if (cssStyleIndex == 2) {
		navMenuButton[0].style.backgroundColor = "rgba(7, 7, 7, 0.92)";
		navMenuButton[0].style.color = "white";
		navMenuButton[0].style.textShadow = "3px 0 white, -3px 0 white";
	}
	else {
		navMenuButton[0].style.backgroundColor = "rgb(7, 7, 7)";
		navMenuButton[0].style.color = "rgb(255, 255, 255)";
		navMenuButton[0].style.textShadow = "3px 0 white, -3px 0 white";
	}
}

if (addEventListenerValid) {
	navDropDown[0].addEventListener('mouseout', navDropdownMouseout);
}
else {
	navDropDown[0].attachEvent('onmouseout', navDropdownMouseout);
}
function navDropdownMouseout() {
	navDropDownContent[0].style.display = "none";
	var cssStyleIndex = sessionStorage.getItem("cssIndex");
	if (cssStyleIndex == 1) {
		navMenuButton[0].style.backgroundColor = "rgb(255, 255, 255)";
		navMenuButton[0].style.color = "rgb(37, 37, 37)";
		navMenuButton[0].style.textShadow = "3px 0 black, -3px 0 black";
	}
	else if (cssStyleIndex == 2) {
		navMenuButton[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
		navMenuButton[0].style.color = "white";
		navMenuButton[0].style.textShadow = "3px 0 white, -3px 0 white";
	}
	else {
		navMenuButton[0].style.backgroundColor = "rgb(67, 67, 67)";
		navMenuButton[0].style.color = "rgb(255, 255, 255)";
		navMenuButton[0].style.textShadow = "3px 0 white, -3px 0 white";
	}
}

if (addEventListenerValid) {
	navMenuButton[0].addEventListener('click', navMenuButtonClicked);
}
else {
	navMenuButton[0].attachEvent('onclick', navMenuButtonClicked);
}
function navMenuButtonClicked() {
	this.blur();

	if (navDropDownContent[0].style.display == "none") {
		navDropdownMouseover();
	}
	else {
		navDropdownMouseout();
	}
}

for (var i = 0; i < 3; i++) {
	if (addEventListenerValid) {
		stylesButtons[i].addEventListener('click', swapCSSButtonClicked);
	}
	else {
		stylesButtons[i].attachEvent('onclick', swapCSSButtonClicked);
	}
}

function loadCSSAccordingToCssIndex() {
	var currentCssLinks = document.getElementsByTagName("link");

	var cssFileNumber = Number(sessionStorage.getItem("cssIndex")) + 1;
	var newlink1FileName = "xzoverallstyle" + cssFileNumber + ".css";
	var newLink1 = document.createElement("link");
	newLink1.setAttribute("rel", "stylesheet");
	newLink1.setAttribute("type", "text/css");
	newLink1.setAttribute("href", newlink1FileName);
	var newlink2FileName = "xzstyle" + cssFileNumber + ".css";
	var newLink2 = document.createElement("link");
	newLink2.setAttribute("rel", "stylesheet");
	newLink2.setAttribute("type", "text/css");
	newLink2.setAttribute("href", newlink2FileName);

	headElements[0].replaceChild(newLink1, currentCssLinks[0]);
	headElements[0].replaceChild(newLink2, currentCssLinks[1]);

	var cssStyleIndex = sessionStorage.getItem("cssIndex");
	var modalMcpImage, modalHtml5Icon, modalCss3Icon;
	if (document.getElementsByClassName) {
		modalMcpImage = document.getElementsByClassName("modal-mcp-img");
		modalHtml5Icon = document.getElementsByClassName("modal-html5-icon");
		modalCss3Icon = document.getElementsByClassName("modal-css3-icon");
	}
	else {
		modalMcpImage = document.querySelectorAll(".modal-mcp-img");
		modalHtml5Icon = document.querySelectorAll(".modal-html5-icon");
		modalCss3Icon = document.querySelectorAll(".modal-css3-icon");
	}
	if (cssStyleIndex == "1") {
		navHorizontalBar[0].style.boxShadow = "0 4px 10px 0 rgba(0, 0, 0, 0.18), 0 4px 20px 0 rgba(0, 0, 0, 0.15)";

		modalMcpImage[0].src = "MCP-Logo.png";
		modalHtml5Icon[0].src = "HTML5.png";
		modalCss3Icon[0].src = "CSS3.png";
	}
	else if (cssStyleIndex == "2") {
		navHorizontalBar[0].style.boxShadow = "none";

		modalMcpImage[0].src = "MCP-Logo.png";
		modalHtml5Icon[0].src = "HTML5.png";
		modalCss3Icon[0].src = "CSS3.png";
	}
	else {
		if (window.pageYOffset > 120) {
			navHorizontalBar[0].style.boxShadow = "0 3px 6px 0px rgba(0, 0, 0, 0.3)";
		}
		else {
			navHorizontalBar[0].style.boxShadow = "none";
		}

		modalMcpImage[0].src = "MCP-Logo-Wht.png";
		modalHtml5Icon[0].src = "HTML5_black_bg.png";
		modalCss3Icon[0].src = "CSS3_black_bg.png";
	}

	navDropdownMouseout();
}

function swapCSSButtonClicked() {
	this.blur();

	sessionStorage.setItem("cssIndex", Number(this.value));

	loadCSSAccordingToCssIndex();
}

var floatingContactButton, stylesDiv;
if (document.getElementsByClassName) {
	floatingContactButton = document.getElementsByClassName("floating-contact-button");
	stylesDiv = document.getElementsByClassName("styles");
}
else {
	floatingContactButton = document.querySelectorAll(".floating-contact-button");
	stylesDiv = document.querySelectorAll(".styles");
}
go();
if (addEventListenerValid) {
	window.addEventListener('resize', go);
}
else {
	window.attachEvent('onresize', go);
}
function go() {
	var stylesDivRect = stylesDiv[0].getBoundingClientRect();
	var floatingContactButtonRect = floatingContactButton[0].getBoundingClientRect();
	var stylesDivRectBottom;
	stylesDivRectBottom = stylesDivRect.bottom;
	/*
	if (stylesDivRect.height > 0) {
		stylesDivRectBottom = stylesDivRect.y + stylesDivRect.height;
	}
	else {
		stylesDivRectBottom = stylesDivRect.y;
	}
	*/
	var floatingContactButtonRectTop;
	floatingContactButtonRectTop = floatingContactButtonRect.top;
	var floatingContactButtonAbsHeight = Math.abs(floatingContactButtonRect.height);
	/*
	if (floatingContactButtonRect.height > 0) {
		floatingContactButtonRectTop = floatingContactButtonRect.y;
	}
	else {
		floatingContactButtonRectTop = floatingContactButtonRect.y + floatingContactButtonRect.height;
	}
	*/
	if (stylesDivRectBottom + 16 > floatingContactButtonRectTop) {
		var bottomValue = -floatingContactButtonAbsHeight;
		floatingContactButton[0].style.bottom = bottomValue + "px";
	}

	if (stylesDivRectBottom + 20 + floatingContactButtonAbsHeight < floatingContactButtonRectTop) {
		floatingContactButton[0].style.bottom = "16px";
	}
}

/*var currentCssLinks = document.getElementsByTagName("link");*/
window.onscroll = function() { windowOnScroll(); };

function windowOnScroll() {
	navDropdownMouseout();

	/*var cssFile1Url = currentCssLinks[0].href;
	var currentStyleArr = cssFile1Url.match(/xzoverallstyle[0-9]\.css/g);
	if (currentStyleArr) {
		var currentStyleStr = currentStyleArr[currentStyleArr.length - 1];
		var currentStyleNumberStr = currentStyleStr.replace(/[^0-9]/g, '');
		if (currentStyleNumberStr == "1") {
			if (window.pageYOffset > 120) {
				navHorizontalBar[0].style.boxShadow = "0 3px 6px 0px rgba(0, 0, 0, 0.3)";
			}
			else {
				navHorizontalBar[0].style.boxShadow = "none";
			}
		}
		else if (currentStyleNumberStr == "2") {
			navHorizontalBar[0].style.boxShadow = "0 4px 10px 0 rgba(0, 0, 0, 0.18), 0 4px 20px 0 rgba(0, 0, 0, 0.15)";
		}
	}*/
	var cssStyleIndex = sessionStorage.getItem("cssIndex");
	if (cssStyleIndex != 1 && cssStyleIndex!= 2) {
		if (window.pageYOffset > 120) {
			navHorizontalBar[0].style.boxShadow = "0 3px 6px 0px rgba(0, 0, 0, 0.3)";
		}
		else {
			navHorizontalBar[0].style.boxShadow = "none";
		}
	}

	go();
}

if (addEventListenerValid) {
	contactButton[0].addEventListener('click', contactButtonClicked);
}
else {
	contactButton[0].attachEvent('onclick', contactButtonClicked);
}
function contactButtonClicked() {
	this.blur();

	location.href = "xzformhandler.php";
}

if (addEventListenerValid) {
	floatingContactButton[0].addEventListener('click', contactButtonClicked);
}
else {
	floatingContactButton[0].attachEvent('onclick', contactButtonClicked);
}
