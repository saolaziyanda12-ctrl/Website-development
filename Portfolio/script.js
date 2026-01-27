// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => {
  navLinks.classList.toggle("active");
};

// TYPING EFFECT
const text = ["Frontend Developer", "UI Designer", "Web Creator"];
let index = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function type() {
  if (charIndex < text[index].length) {
    typing.innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.innerHTML = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 500);
  }
}

type();

// SCROLL REVEAL
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
