
const lookBookLists = document.querySelector('.look_book_lists');
let LBposition = 0;

function moveLBSlide(num) {
    lookBookLists.style.transition = '700ms';
    lookBookLists.style.transform = `translateX(calc( -10% - (11.1% * ${num})))`
}

function switchLBposition(num) {
    lookBookLists.style.transition = '0s';
    lookBookLists.style.transform = `translateX(calc(-10% - (11.1%* ${num})))`
}

function moveSlide(num) {
    LBposition = LBposition + num;
    if (LBposition === 6) {
        LBposition = 0;
        switchLBposition(LBposition);
        setTimeout(() => {
            LBposition = 1;
            moveLBSlide(LBposition);
        }, 30);
    } else if (LBposition === -1) {
        LBposition = 5;
        switchLBposition(LBposition);
        setTimeout(() => {
            LBposition = 4;
            moveLBSlide(LBposition);
        }, 30);
    } else {
        moveLBSlide(LBposition);
    }
}


