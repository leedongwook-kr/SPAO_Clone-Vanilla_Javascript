

const bestSlides = document.querySelectorAll('.slide_display.best');
const bestCategoryBtns = document.querySelectorAll('.best_category_btn');

function showBest(num) {
    const bestSlideVisible = document.querySelector('.show.visible');
    const clickedBtn = document.querySelector('.on');

    bestSlideVisible.classList.remove('show');
    bestSlideVisible.classList.remove('visible');

    bestSlides[num].classList.add('show');
    setTimeout(() => {
        bestSlides[num].classList.add('visible');


    }, 1);

    clickedBtn.classList.remove('on');
    bestCategoryBtns[num].classList.add('on');
}

