const videoElement = document.querySelector('video');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');

const videoSelectBtn = document.getElementById('videoSelectBtn')
videoSelectBtn.onclick = getVideoSources()

const {desktopCapturer, remote} = require('electron')
const { Menu } = remote;

async function getVideoSources() {
  const inputSources = await desktopCapturer.getSources({
    types: ['window', 'screen']
  })
  const videoOptionsMenu = Menu.buildFromTemplate(
    inputSources.map(source => {
      return {
        label: source.name,
        click: () => selectSource()
      }
    })
  )
  videoOptionsMenu.popup()
}
