require("../css/app.css");
require("../scss/style.scss");

/********** Paste your code here! ************/

$(".scene").each((index, element) => {
  new Parallax(element);
});
jQuery(function ($) {
  $(".pieProgress")
    .asPieProgress({
      namespace: "pieProgress",
    })
    .asPieProgress("start");
});
$(".js-tilt").tilt({
  glare: true,
  maxGlare: 0,
  maxTilt: 2,
  scale: 1.03,
});
$(".owl-carousel").owlCarousel({
  items: 1,
});
