const sounds = [
  { symbol: "/ɪ/", name: "KIT", speak: "ih", examples: ["sit", "fish"] },
  { symbol: "/ɛ/", name: "DRESS", speak: "eh", examples: ["bed", "ten"] },
  { symbol: "/æ/", name: "TRAP", speak: "aeh", examples: ["cat", "bag"] },
  { symbol: "/ʌ/", name: "STRUT", speak: "uh", examples: ["cut", "sun"] },
  { symbol: "/ɒ/", name: "LOT", speak: "oh", examples: ["dog", "hot"] },
  { symbol: "/ʊ/", name: "FOOT", speak: "oo", examples: ["book", "good"] },
  { symbol: "/ə/", name: "Schwa", speak: "uh", examples: ["about", "sofa"] }
];

let index = 0;
let loop = null;

const soundBox = document.getElementById("sounds");
const status = document.getElementById("status");

function speak(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.9;
  u.lang = "en-US";
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function render() {
  soundBox.innerHTML = "";

  sounds.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "sound";
    div.innerHTML = `
      <div>
        <strong>${s.symbol}</strong>
        <div style="color:#94a3b8;font-size:0.8rem">${s.name}</div>
      </div>
      <button>▶</button>
    `;

    div.onclick = () => {
      index = i;
      speak(s.speak);
      status.textContent = `Now: ${s.symbol}`;
    };

    soundBox.appendChild(div);
  });
}

document.getElementById("start").onclick = () => {
  stopLoop();

  status.textContent = "Loop started. No thinking, just hearing.";

  loop = setInterval(() => {
    const s = sounds[index % sounds.length];
    speak(s.speak);
    status.textContent = `Looping: ${s.symbol}`;
    index++;
  }, 2000);
};

document.getElementById("stop").onclick = stopLoop;

function stopLoop() {
  clearInterval(loop);
  loop = null;
  speechSynthesis.cancel();
  status.textContent = "Stopped.";
}

document.getElementById("speak").onclick = () => {
  const s = sounds[index % sounds.length];
  speak(s.speak);
};

render();