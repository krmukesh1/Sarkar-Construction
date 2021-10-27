var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.class = "fa fa-moon-o";
  } else {
    icon.class = "fa fa-sun-o";
  }
};
var icons = document.getElementById("icons");

icons.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icons.class = "fa fa-moon-o";
  } else {
    icons.class = "fa fa-sun-o";
  }
};
