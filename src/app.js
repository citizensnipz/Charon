import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';
import path from 'path';
import url from 'url';

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 1200 });

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, './index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Open the DevTools.
  // win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null;
  });
}

enableLiveReload();
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
