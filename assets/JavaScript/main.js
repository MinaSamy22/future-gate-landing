
/*========== slider-Work-Team ==============*/
let carousel = document.querySelector('.carousel');
let arrowBtns = document.querySelectorAll('.wrapper i');
let firstCardWidth = carousel.querySelector(".card").offsetWidth;
let isDragging = false;
let startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});
carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    carousel.classList.add("draggable");
    startX = e.pageX - carousel.offsetLeft;  
    startScrollLeft = carousel.scrollLeft;
});
carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.classList.remove("draggable");
});
carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("draggable");
});
carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; 
    carousel.scrollLeft = startScrollLeft - walk;
});
/* =============== Gsap JS =============== */
gsap.from(".contact-info", {
  opacity: 0,
  y: -10,
  delay: 0.4,
  duration: 0.5,
});
gsap.from(".social-icons-Top", {
  opacity: 0,
  y: -10,
  delay: 0.4,
  duration: 0.5,
});
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 0.5,
  duration: 0.5,
});
gsap.from(".navbar .nav-links", {
  opacity: 0,
  y: -10,
  delay: 0.8,
  duration: 0.5,
  stagger: 0.3,
});
gsap.from(".actions", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
  stagger: 0.3,
});
gsap.from(".title-text", {
  opacity: 0,
  y: 30,
  delay: 1.1,
  duration: 0.9,
  stagger: 0.3,
});
gsap.from(".decorative-line-container", {
  opacity: 0,
  y: 30,
  delay: 1.2,
  duration: 0.9,
  stagger: 0.3,
});
gsap.from(".description-home", {
  opacity: 0,
  y: 30,
  delay: 1.3,
  duration: 0.9,
  stagger: 0.3,
});
gsap.from(".buttons-container", {
  opacity: 0,
  y: 30,
  delay: 1.4,
  duration: 0.9,
  stagger: 0.3,
});
gsap.from(".left-section", {
  opacity: 0,
  y: 30,
  delay: 1.1,
  duration: 0.9,
  stagger: 0.3,
});
// Toggle Sidebar Menu
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".icon-mnue .bar-icon");
  const menuBtnClose = document.querySelector(".icon-mnue .close-bar-icon");
  const sidebar = document.querySelector(".sidebar");
  const menuItems = document.querySelectorAll(".sidebar ul li");

  menuBtn.addEventListener("click", function (event) {
    sidebar.style.display =
      sidebar.style.display === "block" ? "none" : "block";
    event.stopPropagation();
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
  });

  menuBtnClose.addEventListener("click", () => {
    sidebar.style.display = "none";
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== menuBtn) {
      sidebar.style.display = "none";
      menuBtn.style.display = "block";
      menuBtnClose.style.display = "none";
    }
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      sidebar.style.display = "none";
      menuBtn.style.display = "block";
      menuBtnClose.style.display = "none";
    });
  });
});


const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const videos = [
    "../assets/images/Believe-in-certain-pir.mp4",
    "../assets/images/Drill-specific-well.mp4"  
];

let currentVideoIndex = 0;
function openModal() {
    videoModal.style.display = "flex";
    videoSource.src = videos[currentVideoIndex];
    videoPlayer.load();
    videoPlayer.play();
}

function closeModal() {
    videoModal.style.display = "none";
    videoPlayer.pause();
}
function prevVideo() {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        videoSource.src = videos[currentVideoIndex];
        videoPlayer.load();
        videoPlayer.play();
    }
}
function nextVideo() {
    if (currentVideoIndex < videos.length - 1) {
        currentVideoIndex++;
        videoSource.src = videos[currentVideoIndex];
        videoPlayer.load();
        videoPlayer.play();
    }
}
