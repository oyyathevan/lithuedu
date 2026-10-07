const { app, BrowserWindow } = require('electron');
const { Menu } = require('electron');

function createWindow() {
  const win = new BrowserWindow({ width: 1024, height: 768 });
  win.loadURL("https://oyyathevan.github.io/lithuedu/");

  const template = [
    {
      label: "Navigation",
      submenu: [
        { label: "Back", click: () => win.webContents.goBack() },
        { label: "Forward", click: () => win.webContents.goForward() },
        { label: "Reload", click: () => win.reload() }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);
