const newLists = document.querySelector(".new_lists");
let position = 0;


function moveNewSlide() {
    newLists.style.transition = "700ms";
    newLists.style.transform = `translateX(calc(-100% /11 * ${position} ))`;
}
function switchNewPosition() {
    newLists.style.transition = "0s";
    newLists.style.transform = `translateX(calc(-100% /11 * ${position} )) `;
}

function nextNew(num) {
    position += num;
    if (position === 8) {
        position = 0;
        switchNewPosition()
        setTimeout(() => {
            position += num
            moveNewSlide()
        }, 30);


    } else if (position === -1) {
        position = 7;
        switchNewPosition()

        setTimeout(() => {
            position += num;
            moveNewSlide()
        }, 30);
    } else {
        moveNewSlide()
    }

    /*클릭 방지하는 방법 찾기  */
}


setInterval(nextNew(+1), 7000);



/******************************************************************* */

const coverIcons = document.querySelectorAll('.cover_icon');
const newSizeInfos = document.querySelectorAll('.new_size_color');

for (const coverIcon of coverIcons) {
    coverIcon.addEventListener('click', function (e) {
        console.log(e.type.anchor)
    })
}

for (let n = 0; n < coverIcons.length; n++) {
    console.log(coverIcons.length);
    coverIcons[n].addEventListener("click", () => {
        if (newSizeInfos[n].classList.contains("open_list") === false) {
            newSizeInfos[n].classList.add("open_list");
        } else {
            newSizeInfos[n].classList.remove("open_list");
        }
    })
};



/******************************************************************** */
const heartIcons = document.querySelectorAll('.icon');
const heartRedIcons = document.querySelectorAll('.icon_red');

for (let n = 0; n < heartIcons.length; n++) {
    heartIcons[n].addEventListener("click", () => {

    })
}


/**************************************************************** */
