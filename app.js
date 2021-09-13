const play = document.querySelector(".play-btn");
const home = document.querySelector(".home");
const app = document.querySelector(".app");

const chooseBtn = document.querySelector(".choose-btn");
const rainBtn = document.querySelector(".rain-btn");
const waveBtn = document.querySelector(".wave-btn");
const meditateBtn = document.querySelectorAll(".choose-btn button");

const rainVideo = document.querySelector(".rainVid");
const waveVideo = document.querySelector(".waveVid");

const appHeader = document.querySelector(".app-header");

let rainSound = document.querySelector(".rain");
let waveSound = document.querySelector(".wave");

const videos = document.querySelector(".videos");
const videoContent = document.querySelector(".video-content");
const backBtn = document.querySelector(".back-btn");

rainVideo.style.transition = "width .5s ease-in-out";
waveVideo.style.transition = "width .5s ease-in-out";

const showApp = () => {
  app.style.transition = ".5s ease-in-out";
  app.classList.remove("d-none");
  app.style.opacity = 1;
};

const playAudio = (type) => {
  if (type === "rain") {
    rainSound.play();
  }
  if (type === "wave") {
    waveSound.play();
  }
};

const stopRain = () => {
  rainSound.pause();
};

const stopWave = () => {
  waveSound.pause();
};

const resizer = () => {
  appHeader.style.opacity = 1;
  rainVideo.style.width = "100vw";
  waveVideo.style.width = "100vw";
};

play.addEventListener("click", () => {
  home.style.opacity = 0;
  app.style.opacity = 0;
  home.style.transition = ".5s ease-in-out";
  setTimeout(() => {
    home.classList.add("d-none");
    showApp();
  }, 1000);
});

rainBtn.addEventListener("click", () => {
  playAudio("rain");
  rainVideo.style.width = "100vw";
  waveVideo.style.width = "0";
});

waveBtn.addEventListener("click", () => {
  playAudio("wave");
  waveVideo.style.width = "100vw";
  rainVideo.style.width = "0";
});

backBtn.addEventListener("click", () => {
  resizer();
  stopRain();
  stopWave();
  videoContent.classList.add("d-none");
  chooseBtn.classList.remove("d-none");
});

videoContent.classList.add("d-none");

meditateBtn.forEach((item) => {
  item.addEventListener("click", () => {
    appHeader.style.opacity = 0;

    setTimeout(() => {
      videoContent.classList.remove("d-none");
    }, 350);

    chooseBtn.classList.add("d-none");

    item.removeEventListener("mouseout", resizer);
  });
  item.addEventListener("mouseout", resizer);
});

resizer();
