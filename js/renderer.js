const { remote, ipcRenderer } = require('electron')

    function minimizeWindow(){ 
    var window = remote.getCurrentWindow(); 
    window.minimize(); 
    } 

    function closeWindow(){ 
    var window = remote.getCurrentWindow(); 
    window.close(); 
    } 

    function minMaxWindow(){
        const window = remote.getCurrentWindow()
        if(window.isMaximized()) {
            window.unmaximize()
        } else {
            window.maximize()
        }
    
    }
    