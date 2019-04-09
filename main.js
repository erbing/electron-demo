const { app, BrowserWindow } = require('electron')

let win

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile('app/index.html')
    
    // 开发者调试工具
    win.webContents.openDevTools()

    // 快捷图标上的进度条
    win.setProgressBar(0.5)

    win.on('close', ()=>{
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
})

app.addRecentDocument('/Users/ubt/Desktop/work.type')