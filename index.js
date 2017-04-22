const electron = require('electron');
const loadDevtool = require('electron-load-devtool');

electron.app.on('ready', () => {
  const win = new electron.BrowserWindow({width: 1000, height: 500});
  win.loadURL(`file://${__dirname}/index.html`);

  const CycleDevToolId = 'dfgplfmhhmdekalbpejekgfegkonjpfp'
  // loadDevtool(loadDevtool.VUEJS_DEVTOOLS);
  loadDevtool(CycleDevToolId)

  win.openDevTools();
});
