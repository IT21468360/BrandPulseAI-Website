document.addEventListener("DOMContentLoaded", () => {
  // ✅ Immediately bind nav toggle
  const hamburg = document.getElementById("hamburg");
  const navLinks = document.getElementById("navLinks");

  if (hamburg && navLinks) {
    hamburg.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && e.target !== hamburg) {
        navLinks.classList.remove("active");
      }
    });
  }

  // Sticky nav
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // ✅ Load sections dynamically
  const sections = [
    ["hero-section", "sections/hero.html"],
    ["project-domain-section", "sections/project_domain.html"],
    ["milestones-section", "sections/milestones.html"],
    ["documents-section", "sections/documents.html"],
    ["presentations-section", "sections/presentations.html"],
    ["hero-intro", "sections/subSection.html"],
    ["about-section", "sections/about.html"],
    ["contact-section", "sections/contact.html"],
    ["footer-section", "sections/footer.html"]
  ];

  sections.forEach(([id, file]) => {
    fetch(file)
      .then(res => res.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
      })
      .catch(err => console.error(`Error loading ${file}:`, err));
  });
});
