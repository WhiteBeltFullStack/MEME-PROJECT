'use strict'


function renderMeme() {
  const objMeme = getMeme()

  const lines = objMeme.lines

  lines.forEach((line, idx) => {
    const { txt, x, y, size, strokeColor, color, font, align,isDrag } = line

    gCtx.lineWidth = 2
    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = color

    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = align
    gCtx.textBaseLine = 'middle'

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)

    if (gMeme.selectedLineIdx === idx) {
      const textMetrics = gCtx.measureText(txt)
      const textWidth = textMetrics.width
      const textHeight = size

      // Set border properties
      gCtx.lineWidth = 2
      // gCtx.strokeStyle = 'black'

     
      const textX = gElCanvas.width / 2
      const textY = y

      // Calculate bounding box for text
      const boxWidth = textWidth + 20 
      const boxHeight = textHeight + 10 
      const boxX = textX - boxWidth / 2
      const boxY = textY - boxHeight / 2

      // Draw border rectangle
      gCtx.fillStyle = 'rgba(255, 255, 255, 0)'
      // gCtx.fillStyle = 'white'
      gCtx.fillRect(boxX, boxY, boxWidth, boxHeight)
      gCtx.strokeRect(boxX, boxY, boxWidth, boxHeight)

      // Draw text
      gCtx.fillStyle = 'white'
      gCtx.fillText(txt, textX, textY)
      gCtx.strokeText(txt, textX, textY)
    }
  })
}

function renderMemeGallary() {
  const imgs = getImgs()

  const strHtml = imgs.map(
    (img) => `<img src="${img.url}" onclick="onSelectImg(this,${img.id})">`
  )

  document.querySelector('.gallary-container').innerHTML = strHtml.join('')
}

function showGallary(event) {
  event.preventDefault()
  const elGallary = document.querySelector('.gallary')
  const elEditor = document.querySelector('.canvas-container')

  elGallary.classList.remove('hidden')
  elEditor.classList.add('hidden')
}

function showEditor(event) {
  event.preventDefault()
  const elGallary = document.querySelector('.gallary')
  const elEditor = document.querySelector('.canvas-container')

  elEditor.classList.remove('hidden')
  elGallary.classList.add('hidden')
}
