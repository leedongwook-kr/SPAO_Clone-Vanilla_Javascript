const headerToggleBtn = document.querySelector(".header_toggle_btn");
const cancelBtn = document.querySelector(".cancel_btn");
const nav = document.querySelector("nav");


headerToggleBtn.addEventListener("click", () => {
    nav.classList.add("open");
});

cancelBtn.addEventListener("click", () => {
    console.log(cancelBtn);

    nav.classList.remove("open");
});

