var icon = document.getElementById("icon");
const darkMode = () => {
  document.body.classList.toggle("dark-theme");
};

icon.addEventListener("click", () => {
  setDarkMode = localStorage.getItem("dark-themee");
  if (setDarkMode !== "on") {
    darkMode();
    setDarkMode = localStorage.setItem("dark-themee", "on");
  } else {
    darkMode();
    setDarkMode = localStorage.setItem("dark-themee", null);
  }
});

// localStorage
let setDarkMode = localStorage.getItem("dark-themee");
if (setDarkMode === "on") {
  darkMode();
}

// for mobile screen
var icons = document.getElementById("icons");
const darkModes = () => {
  document.body.classList.toggle("dark-theme");
};

icons.addEventListener("click", () => {
  darkModes();
  setDarkModes = localStorage.getItem("dark-themes");
  if (setDarkModes !== "on") {
    darkModes();
    setDarkModes = localStorage.setItem("dark-themes", "on");
  } else {
    darkModes();
    setDarkModes = localStorage.setItem("dark-themes", null);
  }
});

// localStorage;
let setDarkModes = localStorage.getItem("dark-themes");
if (setDarkModes === "on") {
  darkModes();
}
