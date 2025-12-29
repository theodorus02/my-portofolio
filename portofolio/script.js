// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Demo modal
function openDemo(url) {
  document.getElementById("demoModal").style.display = "flex";
  document.getElementById("demoFrame").src = url;
}

function closeDemo() {
  document.getElementById("demoModal").style.display = "none";
  document.getElementById("demoFrame").src = "";
}
