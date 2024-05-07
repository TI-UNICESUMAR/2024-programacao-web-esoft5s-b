function carregarFavoritos() {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
  const favoritosList = document.querySelector('.favoritos-list')
  favoritosList.innerHTML = ''

  favoritos.forEach((municipio) => {
    const favoritoItem = document.createElement('li')
    favoritoItem.textContent = municipio.nome
    favoritosList.appendChild(favoritoItem)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  carregarFavoritos()
})
