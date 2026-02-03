// Animate section titles when visible
const titles = document.querySelectorAll(".section-title");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.5 }
);

titles.forEach(title => observer.observe(title));
