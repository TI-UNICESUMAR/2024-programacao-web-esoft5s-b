// Função para carregar estados da API do IBGE
async function carregarEstados() {
  try {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    )
    const estados = await response.json()
    const estadoList = document.querySelector('.estado-list')

    estados.forEach((estado) => {
      const estadoItem = document.createElement('li') // Cria list item
      const estadoAnchor = document.createElement('a') // Cria ancora
      estadoAnchor.href = `./municipios/index.html?uf=${estado.sigla}` // Adiciona link da ancora
      estadoAnchor.textContent = estado.nome // Adiciona texto da ancora

      estadoItem.appendChild(estadoAnchor) // Adiciona ancora ao list item
      estadoList.appendChild(estadoItem) // Adiciona list item à lista
    })
  } catch (error) {
    console.error('Erro ao carregar estados:', error)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  carregarEstados()
})
