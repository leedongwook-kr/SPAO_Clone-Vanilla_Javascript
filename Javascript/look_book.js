
const lookBookLists = document.querySelector('.look_book_lists');
let curLookBookPosition = 0;

function moveLookBookSlide(num) {
    lookBookLists.style.transition = '300ms';
    lookBookLists.style.transform = `translateX(calc( -10% - (11.1% * ${num})))`
}

function switchLookBookPosition(num) {
    lookBookLists.style.transition = '0s';
    lookBookLists.style.transform = `translateX(calc(-10% - (11.1%* ${num})))`
}

function moveSlide(num) {
    curLookBookPosition = curLookBookPosition + num;
    if (curLookBookPosition === 6) {
        curLookBookPosition = 0;
        switchLookBookPosition(curLookBookPosition);
        setTimeout(() => {
            curLookBookPosition = 1;
            moveLookBookSlide(curLookBookPosition);
        }, 30);
    } else if (curLookBookPosition === -1) {
        curLookBookPosition = 5;
        switchLookBookPosition(curLookBookPosition);
        setTimeout(() => {
            curLookBookPosition = 4;
            moveLookBookSlide(curLookBookPosition);
        }, 30);
    } else {
        moveLookBookSlide(curLookBookPosition);
    }
}

