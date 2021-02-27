const newLists = document.querySelector(".new_lists");
let position = 0;


function nextNew() {
    if (position <= 2) {
        newLists.style.transform = `translateX(calc(-100% /7 * ${position + 1} ))`;
        position += 1
    } else {
        position = 0;
        newLists.style.transform = `translateX(calc(-100% /7 * ${position} `;
    }
}

function prevNew() {
    if (position >= 2) {
        newLists.style.transform = `translateX(calc(-100% /7 * ${position - 1} ))`;
        position -= 1
    } else {
        position = 3;
        newLists.style.transform = `translateX(calc(-100% /7 * ${position} `;
    }
}

/******************************************************************* */

const coverIcons = document.querySelectorAll('.cover_icon');
const newSizeInfos = document.querySelectorAll('.new_size_color');

for (const coverIcon of coverIcons) {
    coverIcon.addEventListener('click', function (e) {
        console.log(e.type.anchor)
    })
}

for (let n = 0; n < coverIcons.length; n++) {
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

for (let n = 0; n < heartIcons.length; n++)l