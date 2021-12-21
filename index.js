// var icon = document.getElementById("icon");
// const darkMode = () => {
//   document.body.classList.toggle("dark-theme");
// };

// icon.addEventListener("click", () => {
//   // Get the value of the "dark" item from the local storage on every click
//   setDarkMode = localStorage.getItem("dark-themee");
//   if (setDarkMode !== "on") {
//     darkMode();
//     // set the value of the item to "on " when dark ode is on
//     setDarkMode = localStorage.setItem("dark-themee", "on");
//   } else {
//     darkMode();
//     // set the value of the item to "null " when dark ode is off
//     setDarkMode = localStorage.setItem("dark-themee", null);
//   }
// });

// // get the value of the "dark-themee" item from the local Storage
// let setDarkMode = localStorage.getItem("dark-themee");
// // check dark mode is on or off on Page realod
// if (setDarkMode === "on") {
//   darkMode();
// }

// // for mobile screen
// var icons = document.getElementById("icons");
// const darkModes = () => {
//   document.body.classList.toggle("dark-theme");
// };

// icons.addEventListener("click", () => {
//   darkModes();
//   setDarkModes = localStorage.getItem("dark-themes");
//   if (setDarkModes !== "on") {
//     darkModes();
//     setDarkModes = localStorage.setItem("dark-themes", "on");
//   } else {
//     darkModes();
//     setDarkModes = localStorage.setItem("dark-themes", null);
//   }
// });

// // localStorage;
// let setDarkModes = localStorage.getItem("dark-themes");
// if (setDarkModes === "on") {
//   darkModes();
// }
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});
