const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
    }
  });
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const trackButtons = document.querySelectorAll(".track-btn[data-track]");
const trackContents = document.querySelectorAll("[data-track-content]");

if (trackButtons.length) {
  let activeTrack = trackButtons[0].dataset.track ?? "ai";

  const setTrack = (track) => {
    activeTrack = track;
    trackButtons.forEach((btn) => {
      const isActive = btn.dataset.track === track;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
      btn.setAttribute("aria-pressed", String(isActive));
    });

    trackContents.forEach((panel) => {
      const dataset = panel.dataset.trackContent ?? "";
      const targets = dataset.split(",").map((item) => item.trim());
      const shouldShow = targets.includes(track) || targets.includes("common");
      panel.classList.toggle("is-hidden", !shouldShow);
    });
  };

  trackButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.track) {
        setTrack(btn.dataset.track);
      }
    });

    btn.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (btn.dataset.track) {
          setTrack(btn.dataset.track);
        }
      }
    });
  });

  setTrack(activeTrack);
}
