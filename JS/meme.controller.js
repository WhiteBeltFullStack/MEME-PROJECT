'use strict'

function renderMemeGallary() {
  const imgs = getImgs()

  const strHtml = imgs.map(
    (img) => `<img src="${img.url}" onclick="onSelectImg(this)">`
  )

  document.querySelector('.gallary-container').innerHTML = strHtml.join('')
}

function onRemove() {
  const elGallary = document.querySelector('.gallary')
  const elEditor = document.querySelector('.canvas-container')

  elGallary.classList.toggle('hidden')
  elEditor.classList.toggle('hidden')
}
