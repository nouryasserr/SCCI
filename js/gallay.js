
var nextbutn = document.getElementById("nextButton");
var prevbutn = document.getElementById("prevButton");
const slider = document.querySelector('.book-slider');
let slideIndex = 0;

function showSlide(index) {
    const transformValue = `translateX(${-index * 100}%)`;
    slider.style.transform = transformValue;
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slider.children.length / 4) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = Math.floor(slider.children.length / 4) - 1;
    }
    showSlide(slideIndex);
}

function nextSlides() {
    slideIndex++;
    if (slideIndex >= slider.children.length / 1) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlides() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slider.children.length / 1 - 1;
    }
    showSlide(slideIndex);
}

function updateSlider() {
    // Check window width
    if (window.innerWidth > 768) {
        // Larger screens, use logic for 4 children per book
        nextbutn.removeEventListener('click', nextSlides);
        prevbutn.removeEventListener('click', prevSlides);
        nextbutn.addEventListener('click', nextSlide);
        prevbutn.addEventListener('click', prevSlide);
    } else if (window.innerWidth <= 768) {
        // Smaller screens, use logic for 1 child per book
        nextbutn.removeEventListener('click', nextSlide);
        prevbutn.removeEventListener('click', prevSlide);
        nextbutn.addEventListener('click', nextSlides);
        prevbutn.addEventListener('click', prevSlides);
    }

    // Adjust slideIndex and show the correct slide
    if (window.innerWidth > 768) {
        slideIndex = slideIndex % (slider.children.length / 4);
    } else if (window.innerWidth <= 768) {
        slideIndex = slideIndex % slider.children.length / 1;
    }
    showSlide(slideIndex);
}

// Initial setup
updateSlider();

// Update the slider when the window is resized
window.addEventListener('resize', updateSlider);


//   =========== second section ============


// document.getElementsByClassName(".option").click(function(){
//     document.getElementsByClassName(".option").removeClass("active");
//     document.getElementsByClassName(this).addClass("active");
    
//  });

var options = document.getElementsByClassName("option");

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
        // Remove "active" class from all elements with class "option"
        for (var j = 0; j < options.length; j++) {
            options[j].classList.remove("active");
        }

        // Add "active" class to the clicked element
        this.classList.add("active");
       
    });
  
}
if(window.innerWidth <= 376 && options.classList.contains("active")) {
  document.getElementById("options").style.gridTemplateColumns = "10000fr 1fr"
  console.log("activve")
}


// ================= fourth section===============

// $(function() {
//     document.getElementsByClassName(".box").on("mousedown", function(e) {
//       const gate = $(this).children("div");
//       document.getElementsByClassName(this).children(".locker").hide();
//       for (var i = 0; i < gate.length; i++) {
//         if ($(gate[i]).hasClass("ovrl-left")) {
//           $(gate[i]).toggleClass("move-right");
//         }
//         if ($(gate[i]).hasClass("ovrl-right")) {
//           $(gate[i]).toggleClass("move-left");
//         }
//       }
//       // removes the click event after reveling the image
//       document.getElementsByClassName(this).off();
//     });
//   });

document.addEventListener("DOMContentLoaded", function() {
    // Add a click event listener to each element with the class "box"
    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener("mousedown", function(e) {
        var gates = this.querySelectorAll("div");
  
        // Hide elements with the class "locker"
        var locker = this.querySelector(".locker");
        if (locker) {
          locker.style.display = "none";
        }
  
        gates.forEach(function(gate) {
          // Inside the loop, you can directly use 'gate' to refer to each gate element
          if (gate.classList.contains("ovrl-left")) {
            gate.classList.toggle("move-right");
          }
          if (gate.classList.contains("ovrl-right")) {
            gate.classList.toggle("move-left");
          }
        });
  
        // Removes the click event after revealing the image
        this.removeEventListener("mousedown", arguments.callee);
      });
    }
  });
  