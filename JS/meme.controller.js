'use strict'

function renderMemeGallary() {
  const imgs = getImgs()

  const strHtml = imgs.map(
    (img) => `<img src="${img.url}" onclick="onSelectImg(this)">`
  )

  document.querySelector('.gallary-container').innerHTML = strHtml.join('')
}

function showGallary() {
  const elGallary = document.querySelector('.gallary')
  elGallary.classList.remove('hidden')
}

function showEditor() {
  const elGallary = document.querySelector('.gallary')
  const elEditor = document.querySelector('.canvas-container')

  elEditor.classList.remove('hidden')
  elGallary.classList.add('hidden')
}
