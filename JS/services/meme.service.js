'use strict'

var gImgs = [{ id: 1, url: '/meme-imgs/meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] },]

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      color: 'red',
    },
  ],
}

var gKeyWordSearchCountMap = { funny: 12, cat: 16, baby: 2 }


function getImgs(){
    return gImgs
}