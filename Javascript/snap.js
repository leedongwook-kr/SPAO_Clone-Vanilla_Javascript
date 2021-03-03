const snapLists = document.querySelector('.snap_lists');
let snapPosition = 1


function moveSnapSlide(num) {
    snapLists.style.transition = '700ms';
    snapLists.style.transform = `translateX(calc( -100% /14 * ${num}))`
}

function switchSnapposition(num) {
    snapLists.style.transition = '0s';
    snapLists.style.transform = `translateX(calc( -100% /14 * ${num}))`
}

function moveSnap(num) {
    snapPosition = snapPosition + num;
    if (snapPosition === 10) {
        snapPosition = 0;
        switchSnapposition(snapPosition);
        setTimeout(() => {
            snapPosition += num;
            moveSnapSlide(snapPosition);
        }, 30);
    } else if (snapPosition === -1) {
        snapPosition = 9;
        switchSnapposition(snapPosition);
        setTimeout(() => {
            snapPosition += num;
            moveSnapSlide(snapPosition);
        }, 30);
    } else {
        moveSnapSlide(snapPosition);
    }
}