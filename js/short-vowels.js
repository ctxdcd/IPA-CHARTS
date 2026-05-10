document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".menu-card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const link = card.getAttribute("data-link");
      if (!link) return;
      window.location.href = link;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".menu-card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const link = card.getAttribute("data-link");
      if (!link) return;
      window.location.href = link;
    });
  });

  const modal = document.getElementById("shortVowelModal");
  const openBtn = document.getElementById("openShortVowelModal");
  const closeTargets = modal ? modal.querySelectorAll("[data-close-modal]") : [];
  const body = document.body;

  const openModal = () => {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
  };

  if (openBtn) {
    openBtn.addEventListener("click", openModal);
  }

  closeTargets.forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("is-open")) {
      closeModal();
    }
  });
});