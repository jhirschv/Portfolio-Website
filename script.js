function onScroll() {
  const elements = document.querySelectorAll(".tech-logos, .about-section");

  for (const element of elements) {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      element.classList.add("visible");
    }
  }
}

window.addEventListener("scroll", onScroll);
