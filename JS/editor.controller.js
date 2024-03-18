'use strict'

let gElCanvas
let gCtx

let gLastDrawnImage = null
let isFirstInput = true

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  renderMemeGallary()
}

function onSelectImg(elImg) {
  gLastDrawnImage = elImg
  console.log(elImg);

  const defaultText = 'Enter text here'

  const elTextInput = document.querySelector('.text-meme-input')
  elTextInput.value = defaultText

  const elHideGallary = document.querySelector('.gallary')
  const elShowEditor = document.querySelector('.canvas-container')

  elHideGallary.classList.toggle('hidden')
  elShowEditor.classList.toggle('hidden')
  coverCanvasWithImg(elImg)
  onAddtext(elTextInput)
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

function onAddtext(elInput, x = gElCanvas.width / 2, y = 100) {
  var text = elInput.value

  if (isFirstInput) {
    elInput.value = ''
    isFirstInput = false
  }

  console.log('hello')
  if (gLastDrawnImage) {
    coverCanvasWithImg(gLastDrawnImage)
  }
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'

  gCtx.fillStyle = 'pink'

  gCtx.font = '45px Arial'
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}

function onAddLine(elInput='hello', x = gElCanvas.width / 2, y = 100) {


  onAddtext(elInput, x + 100, y + 100)

  var text = elInput

  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'

  gCtx.fillStyle = 'pink'

  gCtx.font = '45px Arial'
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}
function onSwitchLine() {}

function onDeleteLine() {}
