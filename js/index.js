// change color of navbar && Up Icon
let { top: aboutTop } = $("#about").offset();

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop > aboutTop - 100) {
    $("#navbar").css({ backgroundColor: "black" });
    $(".upIcon").fadeIn(1000);
  } else {
    $("#navbar").css({ backgroundColor: "transparent" });
    $(".upIcon").fadeOut(1000);
  }
});

$(".upIcon").click(function () {
  // $(window).scrollTop(0); supported by bootstrap only

  $("html, body").animate({ scrollTop: 0 }, 1000);
});

$(".colorBoxIcon").click(function () {
  let colorBoxLeft = $(".colorBox-content").innerWidth(); //always the same width 214.1239

  let colorBoxOffset = $(".colorBox").offset().left; // display the distance from left 0 , 214.1239, -214.1239

  if (colorBoxOffset == 0) {
    $(".colorBox").animate({ left: -colorBoxLeft }, 1000);
  } else {
    $(".colorBox").animate({ left: 0 }, 1000);
  }
});

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}

let boxs = $(".colorBox-content span");

for (let i = 0; i < boxs.length; i++) {
  boxs.eq(i).css("backgroundColor", randomColor);
}

boxs.click(function (e) {
  let currentColor = $(e.target).css("backgroundColor");

  $("h1,h2").css("color", currentColor);
  $(":root").css("--main-color", currentColor);
});

$(document).ready(function () {
  $(".loader").fadeOut(600, function () {
    $(".loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
    });
  });
});
