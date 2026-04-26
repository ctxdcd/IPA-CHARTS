const ipaData = {
  monophthongs: [
    { word: "sheep", ipa: "iː" },
    { word: "ship", ipa: "ɪ" },
    { word: "bed", ipa: "e" },
    { word: "cat", ipa: "æ" },
    { word: "cup", ipa: "ʌ" },
    { word: "car", ipa: "ɑː" },
    { word: "hot", ipa: "ɒ" },
    { word: "thought", ipa: "ɔː" },
    { word: "book", ipa: "ʊ" },
    { word: "blue", ipa: "uː" },
    { word: "bird", ipa: "ɜː" },
    { word: "about", ipa: "ə" }
  ],
  diphthongs: [
    { word: "day", ipa: "eɪ" },
    { word: "boy", ipa: "ɔɪ" },
    { word: "go", ipa: "əʊ" },
    { word: "my", ipa: "aɪ" },
    { word: "now", ipa: "aʊ" },
    { word: "ear", ipa: "ɪə" },
    { word: "air", ipa: "eə" },
    { word: "poor", ipa: "ʊə" }
  ],
  consonants: [
    { word: "she", ipa: "ʃ" },
    { word: "think", ipa: "θ" },
    { word: "this", ipa: "ð" },
    { word: "sing", ipa: "ŋ" },
    { word: "chair", ipa: "tʃ" },
    { word: "jam", ipa: "dʒ" },
    { word: "zoo", ipa: "z" },
    { word: "vision", ipa: "ʒ" }
  ]
};

const referenceSymbols = {
  short: ["ɪ", "e", "æ", "ʌ", "ɒ", "ʊ", "ə"],
  long: ["iː", "ɑː", "ɔː", "uː", "ɜː"],
  diphthongs: ["eɪ", "aɪ", "ɔɪ", "aʊ", "əʊ", "ɪə", "eə", "ʊə"],
  consonants: ["p", "b", "t", "d", "k", "g", "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", "m", "n", "ŋ", "l", "r", "j", "w"],
  affricates: ["tʃ", "dʒ"]
};

const ui = {
  score: document.getElementById("score"),
  round: document.getElementById("round"),
  accuracy: document.getElementById("accuracy"),
  targetWord: document.getElementById("target-word"),
  hintText: document.getElementById("hint-text"),
  input: document.getElementById("ipa-input"),
  feedback: document.getElementById("feedback-msg"),
  categoryTitle: document.getElementById("category-title"),
  progressText: document.getElementById("progress-text"),
  progressFill: document.getElementById("progress-fill"),
  checkBtn: document.getElementById("check-btn"),
  revealBtn: document.getElementById("reveal-btn"),
  nextBtn: document.getElementById("next-btn")
};

let currentMode = "monophthongs";
let currentIndex = 0;
let score = 0;
let attempts = 0;
let correct = 0;

function getCurrentList() {
  return ipaData[currentMode];
}

function getCurrentItem() {
  return getCurrentList()[currentIndex];
}

function updateStats() {
  ui.score.textContent = score;
  ui.round.textContent = currentIndex + 1;

  const accuracy = attempts === 0 ? 100 : Math.round((correct / attempts) * 100);
  ui.accuracy.textContent = `${accuracy}%`;

  const total = getCurrentList().length;
  ui.progressText.textContent = `${currentIndex + 1} / ${total}`;
  ui.progressFill.style.width = `${((currentIndex + 1) / total) * 100}%`;
}

function updatePracticeCard() {
  const item = getCurrentItem();
  ui.targetWord.textContent = item.word;
  ui.input.value = "";
  ui.feedback.textContent = "";
  ui.feedback.style.color = "";
  ui.hintText.textContent = `Category: ${currentMode.replace(/^\w/, c => c.toUpperCase())}`;
  ui.categoryTitle.textContent = currentMode.replace(/^\w/, c => c.toUpperCase());
  updateStats();
}

function changeMode(mode) {
  currentMode = mode;
  currentIndex = 0;

  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  updatePracticeCard();
}

function insertSymbol(symbol) {
  ui.input.value += symbol;
  ui.input.focus();
}

function normalizeAnswer(value) {
  return value
    .trim()
    .replace(/\s+/g, "")
    .replace(/[ː]/g, "ː");
}

function checkAnswer() {
  const userAnswer = normalizeAnswer(ui.input.value);
  const correctAnswer = getCurrentItem().ipa;

  attempts += 1;

  if (userAnswer === correctAnswer) {
    correct += 1;
    score += 10;
    ui.feedback.textContent = "Correct. Good work.";
    ui.feedback.style.color = "var(--green)";
    updateStats();

    setTimeout(() => {
      nextItem();
    }, 900);
  } else {
    ui.feedback.textContent = `Try again.`;
    ui.feedback.style.color = "var(--red)";
    updateStats();
  }
}

function revealAnswer() {
  ui.feedback.textContent = `Answer: ${getCurrentItem().ipa}`;
  ui.feedback.style.color = "var(--blue-dark)";
  ui.input.focus();
}

function nextItem() {
  const list = getCurrentList();
  currentIndex = (currentIndex + 1) % list.length;
  updatePracticeCard();
}

function buildSymbolGrid(id, symbols) {
  const grid = document.getElementById(id);
  grid.innerHTML = "";

  symbols.forEach(symbol => {
    const el = document.createElement("div");
    el.className = "symbol";
    el.textContent = symbol;
    el.addEventListener("click", () => insertSymbol(symbol));
    grid.appendChild(el);
  });
}

function buildReference() {
  buildSymbolGrid("short-vowel-grid", referenceSymbols.short);
  buildSymbolGrid("long-vowel-grid", referenceSymbols.long);
  buildSymbolGrid("diphthong-grid", referenceSymbols.diphthongs);
  buildSymbolGrid("consonant-grid", referenceSymbols.consonants);
  buildSymbolGrid("affricate-grid", referenceSymbols.affricates);
}

function initTabs() {
  document.querySelectorAll(".ref-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.ref;

      document.querySelectorAll(".ref-tab").forEach(btn => btn.classList.remove("active"));
      tab.classList.add("active");

      document.querySelectorAll(".reference-block").forEach(block => block.classList.remove("active"));
      document.getElementById(`ref-${target}`).classList.add("active");
    });
  });

  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => changeMode(btn.dataset.mode));
  });
}

ui.checkBtn.addEventListener("click", checkAnswer);
ui.revealBtn.addEventListener("click", revealAnswer);
ui.nextBtn.addEventListener("click", nextItem);

ui.input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkAnswer();
});

buildReference();
initTabs();
updatePracticeCard();