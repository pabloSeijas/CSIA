const electron = require ('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url = require('url')

let win

function createWindow() {
    win = new BrowserWindow({
        // width:1280,
        // height :768,
        frame:false,
        resizable : true,
        // minHeight: 1280,
        // minWidth: 768,
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.maximize()
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    
    }))
    
}

exports.openWindow = () => {
    let newWin = new BrowserWindow ({width:800, height:600})
    win.loadURL(url.format({
        pathname:path.join(__dirname,'main.html'),
        protocol:'file',
        slashes:true

    }))
}


app.on('ready', createWindow)
