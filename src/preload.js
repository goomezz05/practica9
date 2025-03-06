const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    buscarPokemon: async (nombre) => await ipcRenderer.invoke('buscar-pokemon', nombre),
    abrirVentanaDetalles: (datos) => ipcRenderer.send('abrir-ventana-detalles', datos)
});
