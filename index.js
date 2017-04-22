const electron = require('electron');
const loadDevtool = require('electron-load-devtool');

electron.app.on('ready', () => {
  const win = new electron.BrowserWindow({width: 400, height: 400});
  win.loadURL(`file://${__dirname}/index.html`);

  loadDevtool(loadDevtool.VUEJS_DEVTOOLS);

  win.openDevTools();
});
