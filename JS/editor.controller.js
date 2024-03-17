'use strict'

'use strict'

let gElCanvas
let gCtx

function onInit() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

  drawImg()
}

function drawImg() {
  const elImg = document.querySelector('img')
  var picNum = getRandomInt(1, 19)
  elImg.src = `/meme-imgs/meme-imgs (square)/${picNum}.jpg`
  console.log(picNum)
  // img.src = 'img/wide.jpg'
  // img.src = 'img/tall.jpg'

  // Let's use the image natural width and height

  elImg.onload = () =>
    gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
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
