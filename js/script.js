// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Typing animation
const text = "Welcome to MarkRoms - Android FRP Bypass with Termux!";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;
