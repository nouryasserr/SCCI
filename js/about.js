var i = 0, text;
text = "About SCCI";
function typing() {
    if (i < text.length) {
        document.querySelector(".element").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 190);
    }
}
typing();
function goToHome() {
    window.location.href = "home.html";
}

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revTop = reveals[i].getBoundingClientRect().top;
        var revPoints = 150;
        if (revTop < windowHeight - revPoints) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}