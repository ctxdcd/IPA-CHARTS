const sounds = [
  {
    symbol: "/ɪ/",
    name: "KIT sound",
    desc: "Front, near-close, relaxed vowel.",
    tongue: "Forward and high-ish, but relaxed.",
    x: 28,
    y: 28,
    examples: ["sit", "fish", "build"],
    anchor: "sit"
  },
  {
    symbol: "/e/",
    name: "DRESS sound",
    desc: "Front, mid, open-mid vowel.",
    tongue: "Front and a little open.",
    x: 34,
    y: 42,
    examples: ["bed", "ten", "help"],
    anchor: "bed"
  },
  {
    symbol: "/æ/",
    name: "TRAP sound",
    desc: "Open front vowel, easy to anchor to a word.",
    tongue: "Open mouth, front tongue.",
    x: 31,
    y: 64,
    examples: ["cat", "bag", "hat"],
    anchor: "cat"
  },
  {
    symbol: "/ʌ/",
    name: "STRUT sound",
    desc: "Central-ish, relaxed and short.",
    tongue: "Mid-central, very neutral.",
    x: 51,
    y: 53,
    examples: ["cut", "luck", "sun"],
    anchor: "cut"
  },
  {
    symbol: "/ɒ/",
    name: "LOT sound",
    desc: "Back, open-ish, short vowel.",
    tongue: "Low and back.",
    x: 70,
    y: 48,
    examples: ["dog", "clock", "hot"],
    anchor: "dog"
  },
  {
    symbol: "/ʊ/",
    name: "FOOT sound",
    desc: "Back, near-close, rounded vowel.",
    tongue: "Back and short, with rounded lips.",
    x: 75,
    y: 28,
    examples: ["book", "good", "put"],
    anchor: "book"
  },
  {
    symbol: "/ə/",
    name: "Schwa",
    desc: "Neutral central vowel. The relaxed one.",
    tongue: "Relaxed. No drama.",
    x: 48,
    y: 40,
    examples: ["about", "sofa", "paper"],
    anchor: "about"
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

    dot.addEventListener("click", () => setActive(index));
    dotLayer.appendChild(dot);
  });
}

function renderList() {
  symbolList.innerHTML = "";

  sounds.forEach((sound, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "symbol-item";
    if (index === currentIndex) item.classList.add("active");

    item.innerHTML = `
      <div class="symbol-left">
        <strong>${sound.symbol}</strong>
        <span>${sound.name}</span>
      </div>
      <span>→</span>
    `;

    item.addEventListener("click", () => setActive(index));
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

shuffleBtn.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * sounds.length);
  setActive(currentIndex);
});

setActive(0);