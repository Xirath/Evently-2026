const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const media = window.matchMedia("(width < 1000px)");
const topNavMenu = document.querySelector(".navbar__menu");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function setupTopNav(e) {
  if (e.matches) {
    console.log("is mobile");
    topNavMenu.setAttribute("inert", "");
    topNavMenu.style.transition = "none";
  } else {
    console.log("is desktop");
    topNavMenu.removeAttribute("inert");
    main.removeAttribute("inert");
    footer.removeAttribute("inert");
    btnOpen.setAttribute("aria-expanded", "false");
    btnOpen.setAttribute("tabindex", "0");
  }
}

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  btnOpen.setAttribute("tabindex", "-1");
  topNavMenu.removeAttribute("inert");
  topNavMenu.removeAttribute("style");
  main.setAttribute("inert", "");
  footer.setAttribute("inert", "");
  setTimeout(() => {
    document.getElementById("home").focus();
  }, 500);
}

function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
  btnOpen.setAttribute("tabindex", "0");
  topNavMenu.setAttribute("inert", "");
  main.removeAttribute("inert");
  footer.removeAttribute("inert");

  setTimeout(() => {
    topNavMenu.style.transition = "none";
  }, 500);
}

setupTopNav(media);

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function (e) {
  setupTopNav(e);
});
