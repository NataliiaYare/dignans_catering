// script for mobile menu

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Script for Special Offer Photo Gallery

const imgContent = document.querySelectorAll(".img-content-hover");

function showImgContent(e) {
  for (var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
}

document.addEventListener("mousemove", showImgContent);

// Script the Print Menu button

function printMenu() {
  const menuContent = document.getElementById("menu").innerHTML;
  const originalContent = document.body.innerHTML;

  // Replace the page content with menu content for printing
  document.body.innerHTML = menuContent;
  window.print();

  // Restore the original page content after printing
  document.body.innerHTML = originalContent;
}
