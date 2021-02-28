
const stlyePickLists = document.querySelector(".style_pick_lists");
const stylePickSwitchBtns = document.querySelectorAll(".style_pick_switch_btn");
let positionStyle = 0;

for (let i = 0; i < stylePickSwitchBtns.length; i++) {
    stylePickSwitchBtns[i].addEventListener('click', () => {
        lightStylePickSwitchBtn(i);
    })
}

function nextStylePick() {
    if (positionStyle === 4) {
        positionStyle = 0
    } else {
        positionStyle += 1;
    }
    lightStylePickSwitchBtn(positionStyle);
}

function prevStylePick() {
    if (positionStyle === 0) {
        positionStyle = 4
    } else {
        positionStyle -= 1;
    }
    lightStylePickSwitchBtn(positionStyle);
}

function lightStylePickSwitchBtn(num) {
    positionStyle = num;
    for (let i = 0; i < stylePickSwitchBtns.length; i++) {
        stylePickSwitchBtns[i].classList.remove('checked');
    }
    stylePickSwitchBtns[num].classList.add('checked');
    showCurrentStylePick(num)
}


function showCurrentStylePick(num) {
    positionStyle = num;
    stlyePickLists.style.transform = `translateX(calc(-100% /7 *${positionStyle}))`;
}

