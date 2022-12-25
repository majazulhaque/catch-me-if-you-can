import "./styles.css";
var catchMe = document.getElementById("catchMe");
var container = document.getElementById("container");

var containerWidth = parseInt(getComputedStyle(container).width);
var containerHeight = parseInt(getComputedStyle(container).height);
var catchMeWidth = parseInt(getComputedStyle(catchMe).width);
var catchMeHeight = parseInt(getComputedStyle(catchMe).height);

var maxWidth = containerWidth - catchMeWidth;
var maxHeight = containerHeight - catchMeHeight;

function initialize() {
  catchMe.style.top = Math.floor(Math.random() * maxHeight) + "px";
  catchMe.style.left = Math.floor(Math.random() * maxWidth) + "px";
}
initialize();

catchMe.addEventListener("mousemove", changePosition);

function changePosition() {
  catchMe.style.top = Math.floor(Math.random() * maxHeight) + "px";
  catchMe.style.left = Math.floor(Math.random() * maxWidth) + "px";
}
