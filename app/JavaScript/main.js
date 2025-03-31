// Sticky Header Functionality
const header = document.querySelector("header");
function checkStickyHeader() {
    header.classList.toggle("sticky", window.scrollY > 2);
}
window.addEventListener("scroll", checkStickyHeader);
window.addEventListener("load", checkStickyHeader);

// Toggle Sidebar Menu
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-bar .bar-icon");
    const menuBtnClose = document.querySelector(".menu-bar .close-bar-icon");
    const sidebar = document.querySelector(".sidebar");

    menuBtn.addEventListener("click", function (event) {
        sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
        event.stopPropagation();
        menuBtn.classList.add("active");
        menuBtnClose.classList.add("active");
    });

    menuBtnClose.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        menuBtnClose.classList.remove("active");
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && event.target !== menuBtn) {
            sidebar.style.display = "none";
            menuBtn.classList.remove("active");
            menuBtnClose.classList.remove("active");
        }
    });
});

// Auto Change Steps for Parent and Child
const parentImages = ["app/images/svg-circle-app-1.svg", "app/images/svg-circle-app-2.svg", "app/images/svg-circle-app-3.svg", "app/images/svg-circle-app-4.svg"];
const childImages = ["app/images/svg-circle-app-1.svg", "app/images/svg-circle-app-two-2.svg", "app/images/svg-circle-app-two-3.svg", "app/images/svg-circle-app-two-4.svg"];

let parentIndex = 0;
let childIndex = 0;

function changeStep(index, type) {
    const steps = document.querySelectorAll(`#${type}Steps .step`);
    document.getElementById(`${type}Image`).src = type === 'parent' ? parentImages[index] : childImages[index];
    
    steps.forEach(step => step.classList.remove("active"));
    steps[index].classList.add("active");
}

function autoChangeSteps() {
    setInterval(() => {
        parentIndex = (parentIndex + 1) % parentImages.length;
        childIndex = (childIndex + 1) % childImages.length;
        
        changeStep(parentIndex, 'parent');
        changeStep(childIndex, 'child');
    }, 1700);
}
autoChangeSteps();
