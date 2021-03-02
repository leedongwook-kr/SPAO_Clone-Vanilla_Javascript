
const stlyePickLists = document.querySelector(".style_pick_lists");
const stylePickSwitchBtns = document.querySelectorAll(".style_pick_switch_btn");
let positionStyle = 0;

for (let i = 0; i < stylePickSwitchBtns.length; i++) {
    stylePickSwitchBtns[i].addEventListener('click', () => {
        lightStylePickSwitchBtn(i);
    })
}

function nextStylePick() {
    positionStyle += 1;
    lightStylePickSwitchBtn(positionStyle);
}

function prevStylePick() {
    positionStyle -= 1;
    lightStylePickSwitchBtn(positionStyle);
}
// 하단 뱃지버튼
function lightStylePickSwitchBtn(num) {
    positionStyle = num;
    for (let i = 0; i < stylePickSwitchBtns.length; i++) {
        stylePickSwitchBtns[i].classList.remove('checked');
    }
    if (num >= 7) {
        num -= 7;
        stylePickSwitchBtns[num].classList.add('checked');
    } else if (num < 0) {
        num += 7
        stylePickSwitchBtns[num].classList.add('checked');
    } else {
        stylePickSwitchBtns[num].classList.add('checked');
    }
    showCurrentStylePick(positionStyle);
}


function moveStyleSlide() {
    stlyePickLists.style.transition = '700ms';
    stlyePickLists.style.transform = `translateX(calc(-100% /10 *${positionStyle}))`;
}
function switchStylePosition() {
    stlyePickLists.style.transition = '0s';
    stlyePickLists.style.transform = `translateX(calc(-100% /10 *${positionStyle}))`;
}

// 슬라이드 포지션 설정
function showCurrentStylePick(num) {
    positionStyle = num;
    if (positionStyle === 8) {
        // 끝부분에서 뒤로
        positionStyle = 0;
        switchStylePosition();

        setTimeout(() => {
            positionStyle += 1
            moveStyleSlide();
        }, 30);

    } else if (positionStyle === -1) {
        // 첫부분에서 앞으로
        positionStyle = 7;
        switchStylePosition();

        setTimeout(() => {
            positionStyle -= 1
            moveStyleSlide();
        }, 30);
    }
    else {
        moveStyleSlide();
    }
}

