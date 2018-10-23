var lwButtons = document.getElementsByClassName('lw-button');
var dropdownButtons = document.getElementsByClassName('dropdown-button');
var modals = document.getElementsByClassName("modal");
var spans = document.getElementsByClassName("close");
var mainPageWrapper = document.getElementsByClassName("page-wrapper");
var navDropDown = document.getElementsByClassName("nav-dropdown");
var navDropDownContent = document.getElementsByClassName("nav-dropdown-content");
var navMenuButton = document.getElementsByClassName("menu-button");
var navHorizontalBar = document.getElementsByClassName("nav-horizontal-bar");
var contactButton = document.getElementsByClassName("contact-button");
var stylesButtons = document.getElementsByClassName("styles-button");
var headElements = document.getElementsByTagName("head");

for (var i = 0; i < 4; i++) {
	lwButtons[i].addEventListener('click', showModalButtonClicked);
	dropdownButtons[i].addEventListener('click', showModalButtonClicked);
	spans[i].addEventListener('click', closeModalElementClicked);
}

function showModalButtonClicked() {
	modals[Number(this.value)].style.display = "block";
	mainPageWrapper[0].style.overflow = "hidden";
	mainPageWrapper[0].style.height = "100%";
	mainPageWrapper[0].style.position = "fixed";
}

function closeModalElementClicked() {
	modals[Number(this.id.slice(-1))].style.display = "none";  
	mainPageWrapper[0].style.overflow = "visible";
	mainPageWrapper[0].style.height = "auto";
	mainPageWrapper[0].style.position = "static";
}

navDropDown[0].addEventListener('mouseover', navDropdownMouseover);

function navDropdownMouseover() {
	navDropDownContent[0].style.display = "block";
	navMenuButton[0].style.backgroundColor = "rgb(7, 7, 7)";
}

navDropDown[0].addEventListener('mouseout', navDropdownMouseout);

function navDropdownMouseout() {
	navDropDownContent[0].style.display = "none";
	navMenuButton[0].style.backgroundColor = "rgb(67, 67, 67)";
}

navMenuButton[0].addEventListener('click', navMenuButtonClicked);

function navMenuButtonClicked() {
	if (navDropDownContent[0].style.display == "none") {
		navDropDownContent[0].style.display = "block";
		navMenuButton[0].style.backgroundColor = "rgb(7, 7, 7)";
	}
	else {
		navDropDownContent[0].style.display = "none";
		navMenuButton[0].style.backgroundColor = "rgb(67, 67, 67)";
	}
}

for (var i = 0; i < 3; i++) {
	stylesButtons[i].addEventListener('click', swapCSSButtonClicked);
}

function swapCSSButtonClicked() {
	var currentCssLinks = document.getElementsByTagName("link");

	var cssFileNumber = Number(this.value) + 1;
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
}

var floatingContactButton = document.getElementsByClassName("floating-contact-button");
var stylesDiv = document.getElementsByClassName("styles");
go();
window.addEventListener('resize', go);
function go() {
	var stylesDivRect = stylesDiv[0].getBoundingClientRect();
	var floatingContactButtonRect = floatingContactButton[0].getBoundingClientRect();
	var stylesDivRectBottom;
	if (stylesDivRect.height > 0) {
		stylesDivRectBottom = stylesDivRect.y + stylesDivRect.height;
	}
	else {
		stylesDivRectBottom = stylesDivRect.y;
	}
	var floatingContactButtonRectTop;
	var floatingContactButtonAbsHeight = Math.abs(floatingContactButtonRect.height);
	if (floatingContactButtonRect.height > 0) {
		floatingContactButtonRectTop = floatingContactButtonRect.y;
	}
	else {
		floatingContactButtonRectTop = floatingContactButtonRect.y + floatingContactButtonRect.height;
	}

	if (stylesDivRectBottom + 16 > floatingContactButtonRectTop) {
		var bottomValue = -floatingContactButtonAbsHeight;
		floatingContactButton[0].style.bottom = bottomValue + "px";
	}

	if (stylesDivRectBottom + 20 + floatingContactButtonAbsHeight < floatingContactButtonRectTop) {
		floatingContactButton[0].style.bottom = "16px";
	}
}

var currentCssLinks = document.getElementsByTagName("link");
window.onscroll = function() { windowOnScroll()};

function windowOnScroll() {
	navDropDownContent[0].style.display = "none";
	navMenuButton[0].style.backgroundColor = "rgb(67, 67, 67)";
	var cssFile1Url = currentCssLinks[0].href;
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
	}

	go();
}
