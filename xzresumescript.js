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

window.onscroll = function() { windowOnScroll()};

function windowOnScroll() {
	navDropDownContent[0].style.display = "none";
	navMenuButton[0].style.backgroundColor = "rgb(67, 67, 67)";
	if (window.pageYOffset > 120) {
		navHorizontalBar[0].style.boxShadow = "0 3px 6px 0px rgba(0, 0, 0, 0.3)";
	}
	else {
		navHorizontalBar[0].style.boxShadow = "none";

	}
}
