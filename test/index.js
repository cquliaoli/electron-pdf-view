const { app, BrowserWindow } = require('electron')
const PDFWindow = require('../')

app.on('ready', () => {
  const win = new PDFWindow({
    width: 800,
    height: 600
  })

  const win2 = new BrowserWindow({
    width: 800,
    height: 600
  })

  const win3 = new BrowserWindow({
    width: 800,
    height: 600
  })
  //PDFWindow.addSupport(win3)
  //win3.loadURL(`file://${__dirname}/remote.html`)
  //win3.webContents.openDevTools()


  //win.loadURL('http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
  // win.loadURL(`file://${__dirname}/helloworld.pdf`)
   win.loadURL('https://arxiv.org/pdf/1606.05328.pdf?asdasd=a234')

  win2.loadURL('http://www.arxiv-sanity.com/')
  //win2.loadURL('https://arxiv.org/abs/1601.06759')
})
