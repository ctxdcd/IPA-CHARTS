const bank = {
  monophthongs: {
    long: [
      {
        symbol: "iː",
        clue: "Long vowel — close front, unrounded",
        label: "Long vowel",
        detail: "Close front, unrounded"
      },
      {
        symbol: "uː",
        clue: "Long vowel — close back, rounded",
        label: "Long vowel",
        detail: "Close back, rounded"
      },
      {
        symbol: "ɜː",
        clue: "Long vowel — mid central, unrounded",
        label: "Long vowel",
        detail: "Mid central, unrounded"
      },
      {
        symbol: "ɔː",
        clue: "Long vowel — open-mid back, rounded",
        label: "Long vowel",
        detail: "Open-mid back, rounded"
      },
      {
        symbol: "ɑː",
        clue: "Long vowel — open back, unrounded",
        label: "Long vowel",
        detail: "Open back, unrounded"
      }
    ],
    short: [
      {
        symbol: "ɪ",
        clue: "Short vowel — near-close front, unrounded",
        label: "Short vowel",
        detail: "Near-close front, unrounded"
      },
      {
        symbol: "ʊ",
        clue: "Short vowel — near-close back, rounded",
        label: "Short vowel",
        detail: "Near-close back, rounded"
      },
      {
        symbol: "e",
        clue: "Short vowel — close-mid front, unrounded",
        label: "Short vowel",
        detail: "Close-mid front, unrounded"
      },
      {
        symbol: "æ",
        clue: "Short vowel — near-open front, unrounded",
        label: "Short vowel",
        detail: "Near-open front, unrounded"
      },
      {
        symbol: "ʌ",
        clue: "Short vowel — open-mid central, unrounded",
        label: "Short vowel",
        detail: "Open-mid central, unrounded"
      },
      {
        symbol: "ɒ",
        clue: "Short vowel — open back, rounded",
        label: "Short vowel",
        detail: "Open back, rounded"
      },
      {
        symbol: "ə",
        clue: "Short vowel — mid central, unstressed",
        label: "Short vowel",
        detail: "Mid central, unstressed"
      }
    ]
  },

  diphthongs: {
    all: [
      { symbol: "eɪ", clue: "Diphthong — Face", label: "Diphthong", detail: "Glide from mid to close front" },
      { symbol: "aɪ", clue: "Diphthong — Price", label: "Diphthong", detail: "Glide from open to close front" },
      { symbol: "ɔɪ", clue: "Diphthong — Choice", label: "Diphthong", detail: "Glide from back to front" },
      { symbol: "əʊ", clue: "Diphthong — Goat", label: "Diphthong", detail: "Glide from central to back" },
      { symbol: "aʊ", clue: "Diphthong — Mouth", label: "Diphthong", detail: "Glide from open to back" },
      { symbol: "ɪə", clue: "Diphthong — Near", label: "Diphthong", detail: "Glide from front to central" },
      { symbol: "eə", clue: "Diphthong — Square", label: "Diphthong", detail: "Glide from mid to central" },
      { symbol: "ʊə", clue: "Diphthong — Cure", label: "Diphthong", detail: "Glide from back to central" }
    ]
  },

  consonants: {
    plosives: [
      { symbol: "p", clue: "Plosive — voiceless bilabial stop", label: "Plosive", detail: "Voiceless bilabial stop" },
      { symbol: "b", clue: "Plosive — voiced bilabial stop", label: "Plosive", detail: "Voiced bilabial stop" },
      { symbol: "t", clue: "Plosive — voiceless alveolar stop", label: "Plosive", detail: "Voiceless alveolar stop" },
      { symbol: "d", clue: "Plosive — voiced alveolar stop", label: "Plosive", detail: "Voiced alveolar stop" },
      { symbol: "k", clue: "Plosive — voiceless velar stop", label: "Plosive", detail: "Voiceless velar stop" },
      { symbol: "g", clue: "Plosive — voiced velar stop", label: "Plosive", detail: "Voiced velar stop" }
    ],
    fricatives: [
      { symbol: "f", clue: "Fricative — voiceless labiodental", label: "Fricative", detail: "Voiceless labiodental" },
      { symbol: "v", clue: "Fricative — voiced labiodental", label: "Fricative", detail: "Voiced labiodental" },
      { symbol: "θ", clue: "Fricative — voiceless dental", label: "Fricative", detail: "Voiceless dental" },
      { symbol: "ð", clue: "Fricative — voiced dental", label: "Fricative", detail: "Voiced dental" },
      { symbol: "s", clue: "Fricative — voiceless alveolar", label: "Fricative", detail: "Voiceless alveolar" },
      { symbol: "z", clue: "Fricative — voiced alveolar", label: "Fricative", detail: "Voiced alveolar" },
      { symbol: "ʃ", clue: "Fricative — voiceless post-alveolar", label: "Fricative", detail: "Voiceless post-alveolar" },
      { symbol: "ʒ", clue: "Fricative — voiced post-alveolar", label: "Fricative", detail: "Voiced post-alveolar" },
      { symbol: "h", clue: "Fricative — glottal", label: "Fricative", detail: "Glottal" }
    ],
    affricates: [
      { symbol: "tʃ", clue: "Affricate — voiceless post-alveolar", label: "Affricate", detail: "Stop + friction" },
      { symbol: "dʒ", clue: "Affricate — voiced post-alveolar", label: "Affricate", detail: "Stop + friction" }
    ],
    nasals: [
      { symbol: "m", clue: "Nasal — bilabial", label: "Nasal", detail: "Bilabial nasal" },
      { symbol: "n", clue: "Nasal — alveolar", label: "Nasal", detail: "Alveolar nasal" },
      { symbol: "ŋ", clue: "Nasal — velar", label: "Nasal", detail: "Velar nasal" }
    ],
    approximants: [
      { symbol: "l", clue: "Approximant — lateral", label: "Approximant", detail: "Lateral approximant" },
      { symbol: "r", clue: "Approximant — alveolar", label: "Approximant", detail: "Alveolar approximant" },
      { symbol: "w", clue: "Approximant — bilabial glide", label: "Approximant", detail: "Bilabial glide" },
      { symbol: "j", clue: "Approximant — palatal glide", label: "Approximant", detail: "Like the sound 'y'" }
    ]
  }
};

const definitions = {
  monophthongs: {
    title: "Long Monophthongs",
    text: "Monophthongs are pure vowels with one steady sound. Long monophthongs are held longer than short vowels.",
    meta: "5 long symbols",
    subtitles: {
      long: "Long vowels are pure vowels held for a longer time.",
      short: "Short vowels are pure vowels with a shorter duration."
    }
  },
  diphthongs: {
    title: "Diphthongs",
    text: "Diphthongs are gliding vowels. The tongue or mouth moves from one vowel quality to another in one sound.",
    meta: "8 symbols",
    subtitles: {
      all: "All eight diphthongs glide from one sound shape into another."
    }
  },
  consonants: {
    title: "Consonants",
    text: "Consonants are organized by how the airflow is blocked, narrowed, or shaped by the mouth.",
    meta: "24 symbols",
    subtitles: {
      plosives: "Plosives stop the airflow completely and then release it.",
      fricatives: "Fricatives create friction as air passes through a narrow channel.",
      affricates: "Affricates begin as a stop and release into friction.",
      nasals: "Nasals send air through the nose.",
      approximants: "Approximants are smooth, open consonant sounds."
    }
  }
};

const state = {
  main: "monophthongs",
  sub: "long",
  pool: [],
  current: null,
  questionIndex: 0,
  score: 0,
  streak: 0,
  attempts: 0,
  correct: 0,
  locked: false
};

const ui = {
  score: document.getElementById("score"),
  streak: document.getElementById("streak"),
  accuracy: document.getElementById("accuracy"),
  sectionTitle: document.getElementById("section-title"),
  sectionNote: document.getElementById("section-note"),
  questionText: document.getElementById("question-text"),
  questionChip: document.getElementById("question-chip"),
  questionCount: document.getElementById("question-count"),
  optionsGrid: document.getElementById("options-grid"),
  resultBox: document.getElementById("result-box"),
  resultText: document.getElementById("result-text"),
  progressFill: document.getElementById("progress-fill"),
  progressText: document.getElementById("progress-text"),
  referenceGrid: document.getElementById("reference-grid"),
  definitionTitle: document.getElementById("definition-title"),
  definitionText: document.getElementById("definition-text"),
  definitionMeta: document.getElementById("definition-meta"),
  mainTabs: document.querySelectorAll(".main-tab"),
  subTabs: document.querySelectorAll(".sub-tab"),
  subGroups: document.querySelectorAll(".sub-tabs"),
  restartBtn: document.getElementById("restart-btn"),
  shuffleBtn: document.getElementById("shuffle-btn"),
  nextBtn: document.getElementById("next-btn")
};

function currentList() {
  return bank[state.main][state.sub];
}

function sectionTitle(main, sub) {
  const map = {
    monophthongs: { long: "Long Monophthongs", short: "Short Monophthongs" },
    diphthongs: { all: "Diphthongs" },
    consonants: {
      plosives: "Plosives",
      fricatives: "Fricatives",
      affricates: "Affricates",
      nasals: "Nasals",
      approximants: "Approximants"
    }
  };
  return map[main][sub];
}

function sectionNote(main, sub) {
  const map = {
    monophthongs: { long: "Long vowels only.", short: "Short vowels only." },
    diphthongs: { all: "All gliding vowels." },
    consonants: {
      plosives: "Stop sounds.",
      fricatives: "Friction sounds.",
      affricates: "Stop + friction sounds.",
      nasals: "Air through the nose.",
      approximants: "Smooth glide sounds."
    }
  };
  return map[main][sub];
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function allItemsForCurrentMain() {
  return Object.values(bank[state.main]).flat();
}

function buildPool() {
  state.pool = shuffle(currentList());
  state.questionIndex = 0;
}

function buildReferenceGrid() {
  const list = currentList();
  ui.referenceGrid.innerHTML = "";

  list.forEach((item, idx) => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "ref-item";
    el.innerHTML = `
      <span class="ref-symbol">${item.symbol}</span>
      <span class="ref-label">${idx + 1}</span>
    `;
    el.addEventListener("click", () => {
      const found = state.pool.findIndex(q => q.symbol === item.symbol);
      if (found >= 0) {
        state.questionIndex = found;
        loadQuestion();
      }
    });
    ui.referenceGrid.appendChild(el);
  });
}

function updateTabs() {
  ui.mainTabs.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.main === state.main);
  });

  ui.subGroups.forEach(group => {
    group.classList.toggle("active", group.dataset.wrap === state.main);
  });

  ui.subTabs.forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.main === state.main && btn.dataset.sub === state.sub
    );
  });
}

function updateDefinitionCard() {
  const def = definitions[state.main];
  const subText = def.subtitles[state.sub] || def.text;

  ui.definitionTitle.textContent = sectionTitle(state.main, state.sub);
  ui.definitionText.textContent = subText;
  ui.definitionMeta.textContent = `${currentList().length} symbols`;
}

function updateStats() {
  ui.score.textContent = state.score;
  ui.streak.textContent = state.streak;

  const accuracy = state.attempts === 0 ? 100 : Math.round((state.correct / state.attempts) * 100);
  ui.accuracy.textContent = `${accuracy}%`;

  const total = state.pool.length || 1;
  ui.progressText.textContent = `${Math.round((state.questionIndex / total) * 100)}%`;
  ui.progressFill.style.width = `${(state.questionIndex / total) * 100}%`;

  ui.questionCount.textContent = `${Math.min(state.questionIndex + 1, total)} / ${total}`;
}

function generateOptions(correctItem) {
  const correctSymbol = correctItem.symbol;
  const wrongPool = allItemsForCurrentMain()
    .filter(item => item.symbol !== correctSymbol)
    .map(item => item.symbol);

  const uniqueWrong = shuffle([...new Set(wrongPool)]).slice(0, 3);
  return shuffle([correctSymbol, ...uniqueWrong]);
}

function loadQuestion() {
  if (!state.pool.length) buildPool();

  if (state.questionIndex >= state.pool.length) {
    state.questionIndex = 0;
    state.pool = shuffle(currentList());
  }

  state.current = state.pool[state.questionIndex];
  state.locked = false;

  ui.optionsGrid.innerHTML = "";
  ui.resultBox.style.opacity = "0";
  ui.resultText.textContent = "";
  ui.questionText.textContent = state.current.clue;
  ui.questionChip.textContent = `Question ${state.questionIndex + 1}`;
  ui.sectionTitle.textContent = sectionTitle(state.main, state.sub);
  ui.sectionNote.textContent = sectionNote(state.main, state.sub);

  buildReferenceGrid();
  updateTabs();
  updateDefinitionCard();
  updateStats();

  const options = generateOptions(state.current);

  options.forEach((symbol) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.textContent = symbol;
    btn.addEventListener("click", () => chooseAnswer(btn, symbol));
    ui.optionsGrid.appendChild(btn);
  });
}

function chooseAnswer(button, symbol) {
  if (state.locked) return;
  state.locked = true;

  const buttons = [...document.querySelectorAll(".option-btn")];
  const correctSymbol = state.current.symbol;

  state.attempts += 1;
  buttons.forEach(btn => (btn.disabled = true));

  if (symbol === correctSymbol) {
    button.classList.add("correct");
    state.score += 10;
    state.streak += 1;
    state.correct += 1;

    ui.resultText.textContent = `Correct. ${correctSymbol} is right.`;
    ui.resultText.style.color = "var(--green)";
  } else {
    button.classList.add("wrong");
    state.streak = 0;

    const correctButton = buttons.find(btn => btn.textContent === correctSymbol);
    if (correctButton) correctButton.classList.add("correct");

    ui.resultText.textContent = `Wrong. The answer is ${correctSymbol}.`;
    ui.resultText.style.color = "var(--red)";
  }

  ui.resultBox.style.opacity = "1";
  updateStats();
}

function nextQuestion() {
  if (state.questionIndex < state.pool.length - 1) {
    state.questionIndex += 1;
  } else {
    state.pool = shuffle(currentList());
    state.questionIndex = 0;
  }
  loadQuestion();
}

function restartQuiz() {
  state.score = 0;
  state.streak = 0;
  state.attempts = 0;
  state.correct = 0;
  state.pool = shuffle(currentList());
  state.questionIndex = 0;
  loadQuestion();
}

function shuffleQuiz() {
  state.pool = shuffle(currentList());
  state.questionIndex = 0;
  loadQuestion();
}

function switchSection(main, sub) {
  state.main = main;
  state.sub = sub;
  state.pool = [];
  buildPool();
  loadQuestion();
}

document.querySelectorAll(".main-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    const main = btn.dataset.main;
    const firstSub = Object.keys(bank[main])[0];
    switchSection(main, firstSub);
  });
});

document.querySelectorAll(".sub-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    switchSection(btn.dataset.main, btn.dataset.sub);
  });
});

ui.restartBtn.addEventListener("click", restartQuiz);
ui.shuffleBtn.addEventListener("click", shuffleQuiz);
ui.nextBtn.addEventListener("click", nextQuestion);

document.addEventListener("keydown", (e) => {
  if (["1", "2", "3", "4"].includes(e.key)) {
    const buttons = [...document.querySelectorAll(".option-btn")];
    const index = Number(e.key) - 1;
    if (buttons[index]) buttons[index].click();
  }

  if (e.key === "Enter") nextQuestion();
  if (e.key === "r" || e.key === "R") restartQuiz();
});

buildPool();
loadQuestion();


// CTA BUTTON (memorize mode navigation)
document.getElementById("memorize-btn").addEventListener("click", () => {
  window.location.href = "../memorization/memorization.html";
});