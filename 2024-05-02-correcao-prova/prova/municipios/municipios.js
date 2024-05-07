// Função para adicionar município aos favoritos (usando LocalStorage)
function adicionarFavorito(municipio) {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
  favoritos.push(municipio)
  localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

// Função para carregar municípios de um estado
async function carregarMunicipios() {
  const uf = new URLSearchParams(window.location.search).get('uf')

  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    )
    const municipios = await response.json()
    const municipiosList = document.querySelector('.municipios-list')
    municipiosList.innerHTML = '' // Limpar a lista antes de preencher

    const estadoNome = document.getElementById('estado-nome')
    estadoNome.textContent = uf

    municipios.forEach((municipio) => {
      const municipioItem = document.createElement('li')
      municipioItem.textContent = municipio.nome

      // Adicionar botão de favoritar
      const favoritoButton = document.createElement('button')
      favoritoButton.classList.add('favorito-button')
      favoritoButton.textContent = 'Favoritar'
      favoritoButton.addEventListener('click', () => {
        adicionarFavorito(municipio)
      })
      municipioItem.appendChild(favoritoButton)

      municipiosList.appendChild(municipioItem)
    })
  } catch (error) {
    console.error('Erro ao carregar municípios:', error)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  carregarMunicipios()
})
