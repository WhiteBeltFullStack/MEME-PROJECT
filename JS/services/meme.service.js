'use strict'
//FUNNY CUTE DOG SARCASTIC CRAZY SAD
var gImgs = [
  {
    id: 1,
    url: 'meme-imgs/meme-imgs (square)/1.jpg',
    keywords: ['funny', 'sarcastic'],
  },
  {
    id: 2,
    url: 'meme-imgs/meme-imgs (square)/2.jpg',
    keywords: ['cute', 'dog'],
  },
  {
    id: 3,
    url: 'meme-imgs/meme-imgs (square)/3.jpg',
    keywords: ['cute', 'dog'],
  },
  {
    id: 4,
    url: 'meme-imgs/meme-imgs (square)/4.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 5,
    url: 'meme-imgs/meme-imgs (square)/5.jpg',
    keywords: ['funny', 'sad'],
  },
  {
    id: 6,
    url: 'meme-imgs/meme-imgs (square)/6.jpg',
    keywords: ['sarcastic', 'funny'],
  },
  {
    id: 7,
    url: 'meme-imgs/meme-imgs (square)/7.jpg',
    keywords: ['funny', 'crazy'],
  },
  {
    id: 8,
    url: 'meme-imgs/meme-imgs (square)/8.jpg',
    keywords: ['funny', 'sarcastic'],
  },
  {
    id: 9,
    url: 'meme-imgs/meme-imgs (square)/9.jpg',
    keywords: ['funny', 'crazy'],
  },
  {
    id: 10,
    url: 'meme-imgs/meme-imgs (square)/10.jpg',
    keywords: ['funny', 'sarcastic'],
  },
  {
    id: 11,
    url: 'meme-imgs/meme-imgs (square)/11.jpg',
    keywords: ['sad', 'crazy'],
  },
  {
    id: 12,
    url: 'meme-imgs/meme-imgs (square)/12.jpg',
    keywords: ['funny', 'Crazy'],
  },
  {
    id: 13,
    url: 'meme-imgs/meme-imgs (square)/13.jpg',
    keywords: ['funny', 'Sarcastic'],
  },
  {
    id: 14,
    url: 'meme-imgs/meme-imgs (square)/14.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 15,
    url: 'meme-imgs/meme-imgs (square)/15.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 16,
    url: 'meme-imgs/meme-imgs (square)/16.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 17,
    url: 'meme-imgs/meme-imgs (square)/17.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 18,
    url: 'meme-imgs/meme-imgs (square)/18.jpg',
    keywords: ['funny', 'cat'],
  },
]

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      x: 50,
      y: 50,
      size: 20,
      strokeColor: 'black',
      color: 'red',
      font: 'Arial',
      align: 'center',
      isDrag: false,
    },
  ],
}

var gKeyWordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function getImgs() {
  return gImgs
}

function getImgById(idx) {
  const currImg = gImgs.find((img) => img.id === +idx)
  return currImg
}

function getMeme() {
  return gMeme
}

function addText(text, idx) {
  gMeme.lines[idx].txt = '' + text
}

function addPos(x, y, idx) {
  gMeme.lines[idx].x = x
  gMeme.lines[idx].y = y + 50 * idx
}

function addSize(size, idx) {
  gMeme.lines[idx].size = size
}

function addStrokeColor(strokeColor, idx) {
  gMeme.lines[idx].strokeColor = strokeColor
}

function addColor(color, idx) {
  gMeme.lines[idx].color = color
}

function addFont(fontFamily, idx) {
  gMeme.lines[idx].fontFamily = fontFamily
}

function SetAlignment(txtDir, idx) {
  if (txtDir === 'left') {
    gMeme.lines[idx].align = txtDir
  }
  if (txtDir === 'right') {
    gMeme.lines[idx].align = txtDir
  }
  if (txtDir === 'center') {
    gMeme.lines[idx].align = txtDir
  }
}

function setStrokeStyle(stroke) {
  gMeme.lines[gMeme.selectedLineIdx].strokeColor = stroke
}

function setFillStyle(fill) {
  gMeme.lines[gMeme.selectedLineIdx].color = fill
}

function isTextClicked(clickedPos) {
  const { x, y } = gMeme.lines[gMeme.selectedLineIdx]

  const distance = Math.sqrt((x - clickedPos.x) ** 2 + (y - clickedPos.y))

  const textArea = 20

  return distance <= textArea
}

function setTextDrag(isDrag) {
  gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveText(dx, dy) {
  const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
  selectedLine.x += dx
  selectedLine.y += dy
}
