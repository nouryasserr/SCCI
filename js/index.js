const bookElements = document.getElementsByClassName('book');

for (let i = 0; i < bookElements.length; i++) {
    const bookElement = bookElements[i];
    bookElement.addEventListener('mouseenter', handleMouseEnter);
    bookElement.addEventListener('mouseleave', handleMouseLeave);
}

let hoverStart;
let hoverTimeout;

function handleMouseEnter() {
    hoverStart = performance.now();

    hoverTimeout = setTimeout(() => {
        // this.classList.remove('book2');
        this.classList.add('book1');
    }, 4500);
}

function handleMouseLeave() {
    clearTimeout(hoverTimeout);
    const hoverDuration = performance.now() - hoverStart;

    if (hoverDuration < 4500) {
        this.classList.remove('book1');
        // this.classList.add('book2');
    }
}
