// ................................. toggle highlight class on toggle of nav items ...........

$(document).ready(function () {
  // wait until everything has loaded
  $(window).scroll(function () {
    var Scroll = $(window).scrollTop() + 1, // finds the distance scrolled from the top
      SectionOneOffset = $("#home").offset().top, //finds the distance between #section-one and the top
      SectionTwoOffset = $("#academics").offset().top; // finds the distance between #section-two and the top
    SectionThreeOffset = $("#skills").offset().top;
    SectionFourOffset = $("#project").offset().top;
    SectionFiveOffset = $("#about").offset().top;
    SectionSixOffset = $("#contact").offset().top;

    if (Scroll >= SectionOneOffset) {
      $(".one").addClass("highlight"); // Adds class highlight to menu item having class one
    } else {
      $(".one").removeClass("highlight"); // Remove class highlight of menu item having class one
    }

    if (Scroll >= SectionTwoOffset) {
      $(".two").addClass("highlight");
      $(".one").removeClass("highlight");
    } else {
      $(".two").removeClass("highlight");
    }
    if (Scroll >= SectionThreeOffset) {
      $(".three").addClass("highlight");
      $(".two").removeClass("highlight");
    } else {
      $(".three").removeClass("highlight");
    }
    if (Scroll >= SectionFourOffset) {
      $(".four").addClass("highlight");
      $(".three").removeClass("highlight");
    } else {
      $(".four").removeClass("highlight");
    }
    if (Scroll >= SectionFiveOffset) {
      $(".five").addClass("highlight");
      $(".four").removeClass("highlight");
    } else {
      $(".five").removeClass("highlight");
    }
    if (Scroll >= SectionSixOffset) {
      $(".six").addClass("highlight");
      $(".five").removeClass("highlight");
    } else {
      $(".six").removeClass("highlight");
    }
  });
});

// ......................................menu bar toggle ....................................
// make menu bar toggle onclick and remove onscroll
let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};
// ........................................custom cursor......................................
// make cursor follow the mouse on mousemove
let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");
window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};
// for all links = add class active on mouse enter and remove on mouseleave to cursors
document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };
  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});
// .................................... project filters ...................................
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add clicked class to the current button (highlight it) for project category selection

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("clicked");
    current[0].className = current[0].className.replace(" clicked", "");
    this.className += " clicked";
  });
}

// ....................................back to top button ........................
//Get the button:
mybutton = document.getElementById("topbtn");

// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
