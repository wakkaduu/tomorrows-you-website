/**
 * TOMORROW'S YOU — Navigation and Header Interactions
 * Handles responsive mobile navigation drawer, header scroll state,
 * active section highlighting, keyboard trap, and back-to-top button.
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navBackdrop = document.querySelector(".nav-backdrop");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTopBtn = document.querySelector(".back-to-top-btn");

  // --- Sticky Header on Scroll ---
  const handleScrollHeader = () => {
    if (window.scrollY > 40) {
      header?.classList.add("site-header--scrolled");
    } else {
      header?.classList.remove("site-header--scrolled");
    }

    if (backToTopBtn) {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  };

  window.addEventListener("scroll", handleScrollHeader, { passive: true });
  handleScrollHeader();

  // --- Back to Top Click ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- Mobile Drawer Toggle ---
  const openMenu = () => {
    navMenu?.classList.add("active");
    navBackdrop?.classList.add("active");
    navToggle?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    navMenu?.classList.remove("active");
    navBackdrop?.classList.remove("active");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMenu);
  }

  // Close mobile drawer when clicking a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close drawer on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu?.classList.contains("active")) {
      closeMenu();
      navToggle?.focus();
    }
  });

  // --- Scrollspy: Highlight Active Nav Link ---
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});
