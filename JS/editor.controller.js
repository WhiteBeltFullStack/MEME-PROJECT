'use strict'


let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  renderMemeGallary()
}

function onSelectImg(elImg) {
  coverCanvasWithImg(elImg)
}

function coverCanvasWithImg(elImg) {
  gElCanvas.height =
    (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function downloadCanvas(elLink) {
  elLink.download = 'my-img'

  const dataUrl = gElCanvas.toDataURL()
  elLink.href = dataUrl
}
