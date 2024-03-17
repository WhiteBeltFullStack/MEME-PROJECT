'use strict'
//FUNNY CUTE DOG SARCASTIC CRAZY SAD
var gImgs = [
  {
    id: 1,
    url: '/meme-imgs/meme-imgs (square)/1.jpg',
    keywords: ['funny', 'sarcastic'],
  },
  {
    id: 2,
    url: '/meme-imgs/meme-imgs (square)/2.jpg',
    keywords: ['cute', 'dog'],
  },
  {
    id: 3,
    url: '/meme-imgs/meme-imgs (square)/3.jpg',
    keywords: ['cute', 'dog'],
  },
  {
    id: 4,
    url: '/meme-imgs/meme-imgs (square)/4.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 5,
    url: '/meme-imgs/meme-imgs (square)/5.jpg',
    keywords: ['funny', 'sad'],
  },
  {
    id: 6,
    url: '/meme-imgs/meme-imgs (square)/6.jpg',
    keywords: ['sarcastic', 'funny'],
  },
  {
    id: 7,
    url: '/meme-imgs/meme-imgs (square)/7.jpg',
    keywords: ['funny', 'crazy'],
  },
  {
    id: 8,
    url: '/meme-imgs/meme-imgs (square)/8.jpg',
    keywords: ['funny', 'sarcastic'],
  },
  {
    id: 9,
    url: '/meme-imgs/meme-imgs (square)/9.jpg',
    keywords: ['funny', 'crazy'],
  },
  {
    id: 10,
    url: '/meme-imgs/meme-imgs (square)/10.jpg',
    keywords: ['funny', 'sarcastic'],
  },
  {
    id: 11,
    url: '/meme-imgs/meme-imgs (square)/11.jpg',
    keywords: ['sad', 'crazy'],
  },
  {
    id: 12,
    url: '/meme-imgs/meme-imgs (square)/12.jpg',
    keywords: ['funny', 'Crazy'],
  },
  {
    id: 13,
    url: '/meme-imgs/meme-imgs (square)/13.jpg',
    keywords: ['funny', 'Sarcastic'],
  },
  {
    id: 14,
    url: '/meme-imgs/meme-imgs (square)/14.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 15,
    url: '/meme-imgs/meme-imgs (square)/15.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 16,
    url: '/meme-imgs/meme-imgs (square)/16.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 17,
    url: '/meme-imgs/meme-imgs (square)/17.jpg',
    keywords: ['funny', 'cat'],
  },
  {
    id: 18,
    url: '/meme-imgs/meme-imgs (square)/18.jpg',
    keywords: ['funny', 'cat'],
  },
]

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

function getImgs() {
  return gImgs
}
