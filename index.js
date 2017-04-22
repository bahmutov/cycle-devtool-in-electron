const electron = require('electron');
const loadDevtool = require('electron-load-devtool');
const {existsSync: exists} = require('fs')
const {resolve} = require('path')

const pageToOpen = process.argv[2]
if (!pageToOpen) {
  console.error('Missing filename or url to open')
  process.exit(-1)
}

electron.app.on('ready', () => {
  const win = new electron.BrowserWindow({width: 1000, height: 500});
  if (exists(pageToOpen)) {
    const fullFilename = resolve(pageToOpen)
    console.log('Opening local file', fullFilename)
    win.loadURL(`file://${fullFilename}`);
  } else {
    console.log('Opening Cycle app at', pageToOpen)
    win.loadURL(pageToOpen);
  }

  const CycleDevToolId = 'dfgplfmhhmdekalbpejekgfegkonjpfp'
  // loadDevtool(loadDevtool.VUEJS_DEVTOOLS);
  loadDevtool(CycleDevToolId)

  win.openDevTools();
});
