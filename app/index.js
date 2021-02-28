const { app, BrowserWindow } = require('electron');

if(process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electron: require(`${__dirname}/../node_modules/electron`)
    });
}

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        show: false,
        minWidth: 1280,
        minHeight: 720,
        maxWidth: 1920,
        maxHeight: 1080
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.setMenu(null);
    mainWindow.maximize();
    mainWindow.show();

    mainWindow.on('closed', () => {
        app.quit();
    })
});