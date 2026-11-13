/**
 * TOMORROW'S YOU — Gameplay Screenshot Gallery & Lightbox
 * Features click-to-enlarge, keyboard controls (Left/Right/Esc),
 * mobile swipe gestures, image counter, and accessible focus management.
 */

const GALLERY_ITEMS = window.SITE_CONFIG?.gallery || [];

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
          <img src="${item.thumb}" alt="${item.alt}" loading="lazy" width="${item.width}" height="${item.height}" />
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

      if (e.key === "Tab") {
        const controls = [this.btnClose, this.btnPrev, this.btnNext].filter(Boolean);
        const first = controls[0], last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      } else if (e.key === "Escape") {
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
    if (this.lightbox) this.lightbox.inert = false;
    this.lightbox?.classList.add("active");
    this.lightbox?.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    this.btnClose?.focus();
  }

  close() {
    this.isOpen = false;
    if (this.lightbox) this.lightbox.inert = true;
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
      this.lightboxImage.alt = item.alt;
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

