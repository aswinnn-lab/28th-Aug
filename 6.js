function toggleDarkMode() {
 const el = document.querySelector(
  "body");
 el.classList.toggle("darkMode");
}

function gridView() {
 const el = document.querySelector(
  "div");
 el.classList.add("grid");
}

function colView() {
 const el = document.querySelector(
  "div");
 el.classList.remove("grid");
}

function toggleMenu() {
 const el = document.querySelector(
  "header");
 el.classList.toggle("hidden");
}

function galleryOn() {
 const el = document.querySelector(
  "div");
 el.classList.add("border", "bg-white");
}

function galleryOff() {
 const el = document.querySelector(
  "div");
 el.classList.remove("border", "bg-white");
}
