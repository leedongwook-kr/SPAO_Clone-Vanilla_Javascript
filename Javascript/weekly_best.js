const bestSlides = document.querySelectorAll('.slide_display.best');

function showBest(num) {
    for (let n = 0; n < bestSlides.length; n++) {
        bestSlides[n].classList.add('anim');
        bestSlides[n].classList.remove('visible');
        bestSlides[n].classList.remove('anim');
    }
    bestSlides[num].classList.add('visible');

}