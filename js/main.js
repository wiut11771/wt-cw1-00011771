// SITE HEADER TOGGLER WHILE MENU IS ON BURGER
const elSitenavBtnToggler = document.querySelector(".js-header__toggler");
const elHeader = document.querySelector(".header");
// HEADER TOGGLER
elSitenavBtnToggler.addEventListener("click", function () {
  elHeader.classList.toggle("header--open");
})
