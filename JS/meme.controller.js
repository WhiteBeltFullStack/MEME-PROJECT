'use strict'

function renderMemeGallary() {
  const imgs = getImgs()

  const strHtml = imgs.map(
    (img) => `<img src="${img.url}" onclick="onSelectImg(this)">`
  )

  document.querySelector('.gallary-container').innerHTML = strHtml.join('')
}

function onHideGallary() {
  const elHideGallary = document.querySelector('.gallary')
  const elShowEditor = document.querySelector('.canvas-container')

  elHideGallary.classList.toggle('hidden')
  elShowEditor.classList.toggle('hidden')
}

function showGallary() {
  const elGallary = document.querySelector('.gallary')
  elGallary.classList.remove('hidden')
}

function showEditor() {
  const elGallary = document.querySelector('.canvas-container')
  
  elGallary.classList.remove('hidden')
}
