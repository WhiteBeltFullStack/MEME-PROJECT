'use strict'
let gElCanvas
let gCtx

let GAP_SPACE = 25

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
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

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

  if (isFirstInput) {
    elInput.value = ''
    isFirstInput = false
  }

  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

  coverCanvasWithImg(gLastDrawnImage)

  const fontSize = 45
  const fontFamily = 'Arial'

  const txtAlign = 'center'
  gCtx.textBaseline = 'middle'

  addText(text, gMeme.selectedLineIdx)
  addPos(gElCanvas.width / 2, 100, gMeme.selectedLineIdx)
  addSize(fontSize, gMeme.selectedLineIdx)
  addStrokeColor(
    gMeme.lines[gMeme.selectedLineIdx].strokeColor,
    gMeme.selectedLineIdx
  )
  addColor(gMeme.lines[gMeme.selectedLineIdx].color, gMeme.selectedLineIdx) // Retrieve fill color from gMeme
  addFont(fontFamily, gMeme.selectedLineIdx)

  renderMeme()
}

function onAddLine(x = gElCanvas.width / 2, y = 100) {
  var text = document.querySelector('.text-meme-input').value

  if (isFirstInput) {
    elInput.value = ''
    isFirstInput = false
  }

  const lastLine = gMeme.lines[gMeme.lines.length - 1]
  const newY = lastLine.y + lastLine.size

  const newLine = {
    txt: text,
    x: x,
    y: newY,
    size: gMeme.lines[gMeme.selectedLineIdx].size,

    color: gCtx.strokeStyle,
    font: gMeme.lines[gMeme.selectedLineIdx].font,
  }
  gMeme.lines.push(newLine)
  gMeme.selectedLineIdx++

  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  coverCanvasWithImg(gLastDrawnImage)

  renderMeme()
}

function onSwitchLine() {
  const currIdx = gMeme.selectedLineIdx

  if (currIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0
  } else {
    gMeme.selectedLineIdx += 1
  }

  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

  coverCanvasWithImg(gLastDrawnImage)
  renderMeme()
}

function onDeleteLine() {
  console.log(gMeme.lines.length)
  if (gMeme.lines.length - 1 < 1) return
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  coverCanvasWithImg(gLastDrawnImage)
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
  if (gMeme.selectedLineIdx === 0) {
    gMeme.selectedLineIdx = 0
  } else {
    gMeme.selectedLineIdx -= 1
  }

  renderMeme()
}

function onUpdateLineSize(sizeValue) {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  coverCanvasWithImg(gLastDrawnImage)

  gMeme.lines[gMeme.selectedLineIdx].size += sizeValue
  renderMeme()
}

function onSetAlignment(txtDir) {
  console.log('txtDir:', txtDir)

  setAlignment(txtDir, gMeme.selectedLineIdx)

  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  coverCanvasWithImg(gLastDrawnImage)

  renderMeme()
}

function onSetStrokeStyle(elStroke) {
  var stroke = elStroke.value

  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  coverCanvasWithImg(gLastDrawnImage)

  setStrokeStyle(stroke)
  renderMeme()
}

function onSetFillStyle(elFiller) {
  var filler = elFiller.value
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  coverCanvasWithImg(gLastDrawnImage)

  setFillStyle(filler)
  renderMeme()
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mouseup', onUp)
}

function onMouseDown(ev) {
  const { offsetX, offsetY } = ev
  console.log('Mouse Click Coordinates:', offsetX, offsetY)
  const foundLine = gMeme.lines.find((line, idx) => {
    const { x, y, txt, size } = line
    console.log('LINEx:', x)
    console.log('LINEy:', y)

    const textMetrics = gCtx.measureText(txt)
    const textWidth = textMetrics.width
    const textHeight = size
    // console.log('text-Width',textWidth/2);
    // console.log('size:',size)
    // const leftX

    if (
      offsetX >= x - 165 &&
      offsetX <= x + textWidth - 165 &&
      offsetY >= y - 64 &&
      offsetY <= y + textHeight + GAP_SPACE - 64
    ) {
      gMeme.selectedLineIdx = idx
      gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
      coverCanvasWithImg(gLastDrawnImage)
      renderMeme()
      // return true
    }

    return false // Line not found
  })

  // console.log(foundLine)
  // if (foundLine) {
  //   console.log('Found line:', foundLine)
  // } else {
  //   console.log('No line found at the clicked position.')
  // }
}

// function onDown(ev) {
//   gStartPos = getEvPos(ev)

//   if (!isTextClicked(gStartPos)) return

//   setTextDrag(true)
//   document.body.style.cursor = 'grabbing'
// }

// function onMove(ev) {
//   const { isDrag } = getMeme().lines[gMeme.selectedLineIdx]

//   if (!isDrag) return

//   const pos = getEvPos(ev)

//   const dx = pos.x - gStartPos.x
//   const dy = pos.y - gStartPos.y

//   moveBy(dx, dy)

//   gStartPos = pos

//   renderCanvas()
// }

// function onUp() {
//   setTextDrag(false)
//   document.body.style.cursor = 'grab'
// }

// function getEvPos(ev) {
//   if (TOUCH_EVENTS.includes(ev.type)) {
//     ev.preventDefault() // Prevent triggering the mouse events
//     ev = ev.changedTouches[0] // Gets the first touch point

//     // Calculate the touch position inside the canvas

//     // ev.pageX = distance of touch position from the documents left edge
//     // target.offsetLeft = offset of the elemnt's left side from the it's parent
//     // target.clientLeft = width of the elemnt's left border

//     return {
//       x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//       y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
//     }
//   } else {
//     return {
//       x: ev.offsetX,
//       y: ev.offsetY,
//     }
//   }
// }
