const { app, BrowserWindow } = require('electron');
const env = process.env.NODE_ENV || 'development';

if(env === 'development') {
    try {
        console.log(env);
        require('electron-reload')(__dirname, {
            electron: require(`${__dirname}/../node_modules/electron`)
        });
    } catch(_) {
        console.log('Error');
    }
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