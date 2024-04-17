// about us
function goToLoction() {
  window.location.href = "#about";
}

function goToAbout() {
  window.location.href = "about.html";
}

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";
  setTimeout(displayImages, 2500);
}

// end aboutus

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revTop = reveals[i].getBoundingClientRect().top;
    var revPoints = 150;
    if (revTop < windowHeight - revPoints) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
