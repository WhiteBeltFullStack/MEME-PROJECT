'use strict'
let gElCanvas
let gCtx

let gLastDrawnImage = null
let isFirstInput = true

let gCurrImageObject = null

let gIsDragging = false
let gStartPos = { x: 0, y: 0 }

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  renderMemeGallary()
}

function renderCanvas() {
  gCtx.fillStyle = '#ede5ff' //Set the backgournd color to grey
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height) //Clear the canvas

  renderMeme()
}

function onSelectImg(elImg, idx) {
  gCurrImageObject = getImgById(idx)
  gLastDrawnImage = elImg
  //ENTER UPDATE gMEME
  gMeme.selectedImgId = idx

  const defaultText = 'Enter text here'

  const elTextInput = document.querySelector('.text-meme-input')
  elTextInput.value = defaultText

  const elHideGallary = document.querySelector('.gallary')
  const elShowEditor = document.querySelector('.canvas-container')

  elHideGallary.classList.toggle('hidden')
  elShowEditor.classList.toggle('hidden')
  coverCanvasWithImg(gLastDrawnImage)
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

function onAddtext(elInput) {
  var text = elInput.value
  console.log('text:', text)

  if (isFirstInput) {
    elInput.value = ''
    isFirstInput = false
  }

  if (gLastDrawnImage) {
    coverCanvasWithImg(gLastDrawnImage)
  }
  const fontSize = 45
  const fontFamily = 'Arial'

  const txtAlign = 'center'
  gCtx.textBaseline = 'middle'

  addText(text, gMeme.selectedLineIdx)
  addPos(gElCanvas.width / 2, 100, gMeme.selectedLineIdx)
  addSize(fontSize, gMeme.selectedLineIdx)
  addStrokeColor(gCtx.strokeStyle, gMeme.selectedLineIdx)
  addColor(gCtx.fillStyle, gMeme.selectedLineIdx)
  addFont(fontFamily, gMeme.selectedLineIdx)

  renderMeme()
}

function onAddLine(x = gElCanvas.width / 2, y = 100) {
  var text = document.querySelector('.text-meme-input').value

  const lastLine = gMeme.lines[gMeme.lines.length - 1]
  const newY = lastLine.y + lastLine.size + 20

  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'

  gCtx.fillStyle = 'pink'
  var fontSize = 45 // will add function
  var fontFamily = 'Arial' // will add function

  gCtx.font = `${fontSize}px ${fontFamily}`
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)

  const newLine = {
    txt: text,
    x: x,
    y: newY,
    size: fontSize,
    color: gCtx.strokeStyle,
    font: fontFamily,
  }
  gMeme.lines.push(newLine)

  renderMeme()
}

function onSwitchLine() {
  const currIdx = gMeme.selectedLineIdx

  if (currIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0
  } else {
    gMeme.selectedLineIdx += 1
  }
  renderMeme()
}

function onDeleteLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx)
  if (gMeme.selectedLineIdx === 0) {
    gMeme.selectedLineIdx = 0
  } else {
    gMeme.selectedLineIdx -= 1
  }

  renderMeme()
}

function onUpdateLineSize(sizeValue) {
  gMeme.lines[gMeme.selectedLineIdx].size += sizeValue
  renderMeme()
}

function onSetAlignment(txtDir) {
  SetAlignment(txtDir, gMeme.selectedLineIdx)
  // console.log(txtDir);
  renderMeme()
}

function onSetStrokeStyle(elStroke) {
  setStrokeStyle(elStroke)
  renderMeme()
}

function onSetFillStyle(elFiller) {
  setFillStyle(elFiller)
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mouseup', onUp)
}

function onDown(ev) {
  gStartPos = getEvPos(ev)

  if (!isTextClicked(gStartPos)) return

  setTextDrag(true)
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  const { isDrag } = getMeme().lines[gMeme.selectedLineIdx]

  if (!isDrag) return

  const pos = getEvPos(ev)

  const dx = pos.x - gStartPos.x
  const dy = pos.y - gStartPos.y

  moveBy(dx, dy)

  gStartPos = pos

  renderCanvas()
}

function onUp() {
  setTextDrag(false)
  document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
  if (TOUCH_EVENTS.includes(ev.type)) {
    ev.preventDefault() // Prevent triggering the mouse events
    ev = ev.changedTouches[0] // Gets the first touch point

    // Calculate the touch position inside the canvas

    // ev.pageX = distance of touch position from the documents left edge
    // target.offsetLeft = offset of the elemnt's left side from the it's parent
    // target.clientLeft = width of the elemnt's left border

    return {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  } else {
    return {
      x: ev.offsetX,
      y: ev.offsetY,
    }
  }
}
