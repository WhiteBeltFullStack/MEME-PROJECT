'use strict'


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
