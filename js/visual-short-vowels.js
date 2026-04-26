const sounds = [
  {
    symbol: "/ɪ/",
    name: "KIT sound",
    desc: "Front, near-close, relaxed vowel.",
    tongue: "Forward and high-ish, but relaxed.",
    x: 28,
    y: 28,
    examples: ["sit", "fish", "build"],
    anchor: "sit",
    mnemonic: "The Pillar",
    word: "ship",
    logic: "The sound feels short, light, and tight — like a narrow pillar standing upright.",
    compare: "/ʃɪp/",
    asset: "Add your 3D asset later"
  },
  {
    symbol: "/e/",
    name: "DRESS sound",
    desc: "Front, mid, open-mid vowel.",
    tongue: "Front and a little open.",
    x: 34,
    y: 42,
    examples: ["bed", "ten", "help"],
    anchor: "bed",
    mnemonic: "The Mirror",
    word: "bed",
    logic: "The mouth shape is open and clear, like something easy to face in a mirror.",
    compare: "/bed/",
    asset: "Add your 3D asset later"
  },
  {
    symbol: "/æ/",
    name: "TRAP sound",
    desc: "Open front vowel, easy to anchor to a word.",
    tongue: "Open mouth, front tongue.",
    x: 31,
    y: 64,
    examples: ["cat", "bag", "hat"],
    anchor: "cat",
    mnemonic: "The Apple",
    word: "cat",
    logic: "Open, bright, and wide — a strong visual hook like an apple sitting clearly in front of you.",
    compare: "/kæt/",
    asset: "../../../../assets/thropy.glb"
  },
  {
    symbol: "/ʌ/",
    name: "STRUT sound",
    desc: "Central-ish, relaxed and short.",
    tongue: "Mid-central, very neutral.",
    x: 51,
    y: 53,
    examples: ["cut", "luck", "sun"],
    anchor: "cut",
    mnemonic: "The Hut",
    word: "sun",
    logic: "It sits in the middle of the mouth space, like a small hut placed in the center.",
    compare: "/sʌn/",
    asset: "Add your 3D asset later"
  },
  {
    symbol: "/ɒ/",
    name: "LOT sound",
    desc: "Back, open-ish, short vowel.",
    tongue: "Low and back.",
    x: 70,
    y: 48,
    examples: ["dog", "clock", "hot"],
    anchor: "dog",
    mnemonic: "The Bowl",
    word: "dog",
    logic: "Round and open like a bowl shape — low in the mouth and pulled back.",
    compare: "/dɒɡ/",
    asset: "Add your 3D asset later"
  },
  {
    symbol: "/ʊ/",
    name: "FOOT sound",
    desc: "Back, near-close, rounded vowel.",
    tongue: "Back and short, with rounded lips.",
    x: 75,
    y: 28,
    examples: ["book", "good", "put"],
    anchor: "book",
    mnemonic: "The Cup",
    word: "book",
    logic: "A short rounded sound feels like a small cup shape — compact and back.",
    compare: "/bʊk/",
    asset: "Add your 3D asset later"
  },
  {
    symbol: "/ə/",
    name: "Schwa",
    desc: "Neutral central vowel. The relaxed one.",
    tongue: "Relaxed. No drama.",
    x: 48,
    y: 40,
    examples: ["about", "sofa", "paper"],
    anchor: "about",
    mnemonic: "The Cloud",
    word: "about",
    logic: "Soft, reduced, and neutral — like a cloud that does not try to stand out.",
    compare: "[əˈbaʊt]",
    asset: "Add your 3D asset later"
  }
];

const titleSymbol = document.getElementById("titleSymbol");
const titleNote = document.getElementById("titleNote");
const symbolPill = document.getElementById("symbolPill");
const soundName = document.getElementById("soundName");
const soundDesc = document.getElementById("soundDesc");
const tongueText = document.getElementById("tongueText");
const anchorWord = document.getElementById("anchorWord");
const anchorNote = document.getElementById("anchorNote");
const symbolList = document.getElementById("symbolList");
const dotLayer = document.getElementById("dotLayer");
const shuffleBtn = document.getElementById("shuffleBtn");

const modal = document.getElementById("memoryModal");
const flipCard = document.getElementById("flipCard");
const modalOverlay = modal.querySelector(".modal-overlay");

const modalSymbol = document.getElementById("modalSymbol");
const modalMnemonic = document.getElementById("modalMnemonic");
const modalWord = document.getElementById("modalWord");
const modalLogic = document.getElementById("modalLogic");
const modalCompare = document.getElementById("modalCompare");
const modalAsset = document.getElementById("modalAsset");

let currentIndex = 0;

function renderDots() {
  dotLayer.innerHTML = "";

  sounds.forEach((sound, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.style.left = `${sound.x}%`;
    dot.style.top = `${sound.y}%`;
    dot.title = `${sound.symbol} • ${sound.name}`;

    if (index === currentIndex) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      setActive(index);
      openModal(index);
    });

    dotLayer.appendChild(dot);
  });
}

function renderList() {
  symbolList.innerHTML = "";

  sounds.forEach((sound, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "symbol-item";

    if (index === currentIndex) {
      item.classList.add("active");
    }

    item.innerHTML = `
      <div class="symbol-left">
        <strong>${sound.symbol}</strong>
        <span>${sound.name}</span>
      </div>
      <span>→</span>
    `;

    item.addEventListener("click", () => {
      setActive(index);
      openModal(index);
    });

    symbolList.appendChild(item);
  });
}

function setActive(index) {
  currentIndex = index;
  const sound = sounds[currentIndex];

  titleSymbol.textContent = sound.symbol;
  titleNote.textContent = sound.desc;
  symbolPill.textContent = sound.symbol;
  soundName.textContent = sound.name;
  soundDesc.textContent = sound.desc;
  tongueText.textContent = sound.tongue;
  anchorWord.textContent = sound.anchor;
  anchorNote.textContent = `Example anchors: ${sound.examples.join(" • ")}`;

  renderDots();
  renderList();
}

function openModal(index) {
  const sound = sounds[index];

  modalSymbol.textContent = sound.symbol;
  modalMnemonic.textContent = sound.mnemonic || "Mnemonic";
  modalWord.textContent = sound.word || "word";
  modalLogic.textContent = sound.logic || "";
  modalCompare.textContent = sound.compare || "";
  modalAsset.innerHTML = `
  <model-viewer
    src="${sound.asset}"
    auto-rotate
    camera-controls
    style="width: 100%; height: 130px; display: block;"
  ></model-viewer>
`;

  flipCard.classList.remove("flipped");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  flipCard.classList.remove("flipped");
}

flipCard.addEventListener("click", (e) => {
  // Ignore anything inside 3D area
  if (e.target.closest("model-viewer") || e.target.closest("#modalAsset")) return;

  flipCard.classList.toggle("flipped");
});

flipCard.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    flipCard.classList.toggle("flipped");
  }
});

modalOverlay.addEventListener("click", closeModal);

// 👇 ADD THIS RIGHT HERE
modal.addEventListener("click", (e) => {
  if (!e.target.closest(".flip-card")) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

shuffleBtn.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * sounds.length);
  setActive(currentIndex);
});

setActive(0);