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