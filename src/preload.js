const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    saludo: () => console.log('Hola desde Preload!')
});
