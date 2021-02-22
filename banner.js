let i;
let x = document.querySelectorAll(".image");
let dots = document.querySelectorAll(".badge_btn");

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" checked", "");
    }
    x[slideIndex - 1].style.opacity = "1";
    dots[slideIndex - 1].className += " checked";
}

setInterval(() => {
    slideIndex += 1;
    showDivs(slideIndex);
}, 5000);


/*   손수 짠 개똥코드 ^,^
next_btn.addEventListener('click', next);
function next() {
    for (let num = 0; num < 4; num++) {
        if (images[num].className === "image now") {
            images[num].classList.remove('now');
            if (num <= 2) {
                num = num + 1;
                images[num].classList.add('now');
            } else {
                num = 0;
                images[0].classList.add('now');
            }
        }
    }
}


prev_btn.addEventListener('click', function (e) {
    for (let num = 0; num < 4; num++) {
        if (images[num].className === "image now") {
            images[num].classList.remove('now');
            if (num > 0) {
                num = num - 1;
                images[num].classList.add('now');
            } else {
                num = 3;
                images[num].classList.add('now');
            }
        }
    }
})

setInterval(() => {
    for (let num = 0; num < 4; num++) {
        if (images[num].className === "image now") {
            images[num].classList.remove('now');
            if (num <= 2) {
                num = num + 1;
                images[num].classList.add('now');
            } else {
                num = 0;
                images[0].classList.add('now');
            }
        }
    }
}, 5000);  */
