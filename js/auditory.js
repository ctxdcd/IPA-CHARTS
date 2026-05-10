const sounds = [
  {
    symbol: "/ɪ/",
    name: "KIT",
    audio: "../../audio/kit.mp3",
    examples: ["sit", "fish"]
  },

  {
    symbol: "/ʊ/",
    name: "FOOT",
    audio: "../../audio/foot.mp3",
    examples: ["book", "good"]
  },

  {
    symbol: "/ʌ/",
    name: "STRUT",
    audio: "../../audio/strut.mp3",
    examples: ["cut", "sun"]
  },

   {
    symbol: "/ɒ/",
    name: "LOT",
    audio: "../../audio/lot.mp3",
    examples: ["dog", "hot"]
  },

  {
    symbol: "/ə/",
    name: "Schwa",
    audio: "../../audio/schwa.mp3",
    examples: ["about", "sofa"]
  },

  {
    symbol: "/e/",
    name: "bed",
    audio: "../../audio/bed.mp3",
    examples: ["dress", "ten"]
  },

  {
    symbol: "/æ/",
    name: "TRAP",
    audio: "../../audio/trap.mp3",
    examples: ["cat", "bag"]
  },


];

let index = 0;
let loop = null;

const soundBox = document.getElementById("sounds");
const status = document.getElementById("status");

const player = new Audio();

function playSound(src) {
  player.pause();

  player.src = src;

  player.currentTime = 0;

  player.play();
}

function render() {
  soundBox.innerHTML = "";

  sounds.forEach((s, i) => {

    const div = document.createElement("div");

    div.className = "sound";

    div.innerHTML = `
      <div>
        <strong>${s.symbol}</strong>

        <div style="color:#94a3b8;font-size:0.8rem">
          ${s.name}
        </div>
      </div>

      <button>▶</button>
    `;

    div.onclick = () => {

      index = i;

      playSound(s.audio);

      status.textContent = `Now playing: ${s.symbol}`;
    };

    soundBox.appendChild(div);
  });
}

document.getElementById("start").onclick = () => {

  stopLoop();

  status.textContent =
    "Loop started. No thinking, just hearing.";

  loop = setInterval(() => {

    const s = sounds[index % sounds.length];

    playSound(s.audio);

    status.textContent = `Looping: ${s.symbol}`;

    index++;

  }, 2500);
};

document.getElementById("stop").onclick = stopLoop;

function stopLoop() {

  clearInterval(loop);

  loop = null;

  player.pause();

  player.currentTime = 0;

  status.textContent = "Stopped.";
}

document.getElementById("speak").onclick = () => {

  const s = sounds[index % sounds.length];

  playSound(s.audio);
};

render();