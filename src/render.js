const videoElement = document.querySelector("video");
const stopBtn = document.getElementById("stopBtn");
const startBtn = document.getElementById("startBtn");

const { ipcRenderer, Menu } = require("electron");

const videoSelectBtn = document.getElementById("videoSelectBtn");

videoSelectBtn.addEventListener("click", () => {
  ipcRenderer.send("getSources");
});

ipcRenderer.on("sources", (event, options) => {
  options.popup();
});

ipcRenderer.on("error", (event, error) => {
  console.error("Error getting sources:", error);
});
