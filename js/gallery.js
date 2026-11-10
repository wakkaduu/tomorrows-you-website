/**
 * TOMORROW'S YOU — Gameplay Screenshot Gallery & Lightbox
 * Features click-to-enlarge, keyboard controls (Left/Right/Esc),
 * mobile swipe gestures, image counter, and accessible focus management.
 */

const GALLERY_ITEMS = [
  {
    id: "01",
    src: "assets/images/screenshots/01_main_menu.png",
    thumb: "assets/images/screenshots/01_main_menu.png",
    title: "Main Terminal & Temporal Aperture",
    tag: "Interface",
    caption: "The main portal establishing the atmospheric research facility environment with dynamic GLSL temporal aperture effects."
  },
  {
    id: "07",
    src: "assets/images/screenshots/07_gameplay_playing.png",
    thumb: "assets/images/screenshots/07_gameplay_playing.png",
    title: "Active Temporal Coordination",
    tag: "Core Gameplay",
    caption: "Direct control of the player alongside a holographic Echo replaying previous movements to activate pressure plate mechanisms."
  },
  {
    id: "09",
    src: "assets/images/screenshots/09_gameplay_hint_panel.png",
    thumb: "assets/images/screenshots/09_gameplay_hint_panel.png",
    title: "3-Stage Progressive Hint Assistance",
    tag: "System",
    caption: "Daily-limited 3-stage hint disclosure system: Observation, Strategy, and verified deterministic Solution."
  },
  {
    id: "03",
    src: "assets/images/screenshots/03_difficulty_select_easy.png",
    thumb: "assets/images/screenshots/03_difficulty_select_easy.png",
    title: "Difficulty Tier 1: Initiation",
    tag: "Progression",
    caption: "The first encounter with temporal Echoes, featuring calm cyan lighting and single-teammate fundamentals."
  },
  {
    id: "04",
    src: "assets/images/screenshots/04_difficulty_select_nightmare.png",
    thumb: "assets/images/screenshots/04_difficulty_select_nightmare.png",
    title: "Difficulty Tier 5: The Last Tomorrow",
    tag: "Nightmare Challenge",
    caption: "The ultimate 4-quadrant facility test with crimson volatile atmosphere and strict Sequence Lock synchronization."
  },
  {
    id: "05",
    src: "assets/images/screenshots/05_level_select.png",
    thumb: "assets/images/screenshots/05_level_select.png",
    title: "Sector & Chamber Progression",
    tag: "Level Select",
    caption: "10 handcrafted campaign chambers across 3 distinct sectors, with turn counters and star efficiency ratings."
  },
  {
    id: "10",
    src: "assets/images/screenshots/10_gameplay_level_complete.png",
    thumb: "assets/images/screenshots/10_gameplay_level_complete.png",
    title: "Chamber Cleared Modal",
    tag: "Victory",
    caption: "Level completion summary displaying recorded step count, star achievements, and next chamber unlocked status."
  },
  {
    id: "08",
    src: "assets/images/screenshots/08_gameplay_paused.png",
    thumb: "assets/images/screenshots/08_gameplay_paused.png",
    title: "Tactical Pause Interface",
    tag: "Controls",
    caption: "In-game tactical pause modal with immediate attempt restart, audio adjustments, and level select access."
  },
  {
    id: "06",
    src: "assets/images/screenshots/06_settings.png",
    thumb: "assets/images/screenshots/06_settings.png",
    title: "Audio & Accessibility Controls",
    tag: "Settings",
    caption: "Tactile haptic vibration toggle, independent BGM/SFX sliders, and reduced-animations accessibility setting."
  },
  {
    id: "02",
    src: "assets/images/screenshots/02_credits.png",
    thumb: "assets/images/screenshots/02_credits.png",
    title: "In-Engine Production Credits",
    tag: "Credits",
    caption: "Authentic in-engine credits highlighting Godot Engine 4.7.2 architecture and offline procedural audio/visual generation."
  }
];

class LightboxGallery {
  constructor() {
    this.items = GALLERY_ITEMS;
    this.currentIndex = 0;
    this.isOpen = false;
    this.previousActiveElement = null;

    // Swipe gesture tracking
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.initDOM();
    this.renderGalleryGrid();
    this.bindEvents();
  }

  initDOM() {
    this.gridContainer = document.getElementById("galleryGrid");
    this.lightbox = document.getElementById("lightbox");
    this.lightboxImage = document.getElementById("lightboxImage");
    this.lightboxTitle = document.getElementById("lightboxTitle");
    this.lightboxCaption = document.getElementById("lightboxCaption");
    this.lightboxCounter = document.getElementById("lightboxCounter");
    this.btnClose = document.getElementById("lightboxClose");
    this.btnPrev = document.getElementById("lightboxPrev");
    this.btnNext = document.getElementById("lightboxNext");
  }

  renderGalleryGrid() {
    if (!this.gridContainer) return;

    this.gridContainer.innerHTML = this.items
      .map(
        (item, index) => `
        <article class="gallery-card reveal" data-index="${index}" tabindex="0" role="button" aria-label="View screenshot: ${item.title}">
          <img src="${item.thumb}" alt="${item.title} — ${item.caption}" loading="lazy" width="720" height="699" />
          <div class="gallery-card__zoom" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
          <div class="gallery-card__overlay">
            <span class="gallery-card__tag">${item.tag}</span>
            <h3 class="gallery-card__title">${item.title}</h3>
          </div>
        </article>
      `
      )
      .join("");
  }

  bindEvents() {
    // Open on card click or Enter/Space key
    this.gridContainer?.addEventListener("click", (e) => {
      const card = e.target.closest(".gallery-card");
      if (card) {
        const index = parseInt(card.dataset.index, 10);
        this.open(index);
      }
    });

    this.gridContainer?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".gallery-card");
        if (card) {
          e.preventDefault();
          const index = parseInt(card.dataset.index, 10);
          this.open(index);
        }
      }
    });

    // Close on button or backdrop click
    this.btnClose?.addEventListener("click", () => this.close());
    this.lightbox?.addEventListener("click", (e) => {
      if (e.target === this.lightbox) {
        this.close();
      }
    });

    // Navigation buttons
    this.btnPrev?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.prev();
    });

    this.btnNext?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.next();
    });

    // Keyboard events
    document.addEventListener("keydown", (e) => {
      if (!this.isOpen) return;

      if (e.key === "Escape") {
        this.close();
      } else if (e.key === "ArrowLeft") {
        this.prev();
      } else if (e.key === "ArrowRight") {
        this.next();
      }
    });

    // Mobile Swipe Gestures
    this.lightbox?.addEventListener(
      "touchstart",
      (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    this.lightbox?.addEventListener(
      "touchend",
      (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      },
      { passive: true }
    );
  }

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const swipeThreshold = 50;

    if (deltaX < -swipeThreshold) {
      // Swiped Left -> Next
      this.next();
    } else if (deltaX > swipeThreshold) {
      // Swiped Right -> Prev
      this.prev();
    }
  }

  open(index) {
    this.previousActiveElement = document.activeElement;
    this.currentIndex = index;
    this.isOpen = true;
    this.updateContent();
    this.lightbox?.classList.add("active");
    this.lightbox?.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    this.btnClose?.focus();
  }

  close() {
    this.isOpen = false;
    this.lightbox?.classList.remove("active");
    this.lightbox?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateContent();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateContent();
  }

  updateContent() {
    const item = this.items[this.currentIndex];
    if (!item) return;

    if (this.lightboxImage) {
      this.lightboxImage.src = item.src;
      this.lightboxImage.alt = `${item.title}: ${item.caption}`;
    }
    if (this.lightboxTitle) {
      this.lightboxTitle.textContent = item.title;
    }
    if (this.lightboxCaption) {
      this.lightboxCaption.textContent = item.caption;
    }
    if (this.lightboxCounter) {
      this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.galleryApp = new LightboxGallery();
});

