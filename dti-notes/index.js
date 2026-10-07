const { app, BrowserWindow } = require('electron');
function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL('https://oyyathevan.github.io/di/index.html');
}
app.whenReady().then(createWindow);
