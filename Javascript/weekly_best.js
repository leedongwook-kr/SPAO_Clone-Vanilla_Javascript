






const bestSlides = document.querySelectorAll('.slide_display.best');
// const bestCategoryBtns = documet.querySelectorAll('.best_category_btn');

function showBest(num) {
    for (let n = 0; n < bestSlides.length; n++) {
        bestSlides[n].classList.remove('show');
        bestSlides[n].classList.remove('visible');
        // bestCategoryBtns[n].classList.remove('on');
    }

    bestSlides[num].classList.add('show');
    setTimeout(() => {
        bestSlides[num].classList.add('visible');
    }, 300);

    // bestCategoryBtns[num].classList.add('on');
}

