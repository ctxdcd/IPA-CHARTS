const cards = document.querySelectorAll(".path-card");
const folderContents = document.querySelectorAll(".folder-content");
const folderTitle = document.getElementById("folderTitle");
const folderSubtitle = document.getElementById("folderSubtitle");
const folderPanel = document.getElementById("folderPanel");

const meta = {
  monophthongs: {
    title: "Monophthongs",
    subtitle: "Clean vowel control. Start here and build the base."
  },
  diphthongs: {
    title: "Diphthongs",
    subtitle: "Smooth glide sounds. Keep it fluid, not forced."
  },
  consonants: {
    title: "Consonants",
    subtitle: "Air, friction, release. Lock in the mechanics."
  },
  mixedmaster: {
    title: "Mixed Master",
    subtitle: "Final mode. Full sentence transcription challenge."
  }
};

function setActive(target, clickedCard) {
  cards.forEach((card) => card.classList.remove("active"));
  clickedCard.classList.add("active");

  folderContents.forEach((content) => {
    content.classList.toggle("active", content.id === target);
  });

  folderTitle.textContent = meta[target].title;
  folderSubtitle.textContent = meta[target].subtitle;

  folderPanel.style.transform = "scale(0.985)";
  setTimeout(() => {
    folderPanel.style.transform = "scale(1)";
  }, 120);

  folderPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    setActive(card.dataset.target, card);
  });

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(card.dataset.target, card);
    }
  });
});

setActive("monophthongs", document.querySelector('.path-card[data-target="monophthongs"]'));