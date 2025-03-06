const { app, BrowserWindow } = require('electron');
const path = require('path');
//funcion donde se crean las ventanas
function createWindow() {
    //la primera ventana
    const win1 = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,  
            contextIsolation: false,
        }
        
    });

    win1.loadFile('renderer/ventana1.html');

    // la segunda ventana

    const win2 = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,  
            contextIsolation: false, 
        }
        
    });

    win2.loadFile('renderer/ventana2.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
 