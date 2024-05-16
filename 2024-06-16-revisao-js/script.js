import { queryString } from './utils.js'

const apiUrl = "https://servicodados.ibge.gov.br/api/v3/noticias?qtd=5"
const wrongApiUrl = "https://servicodados.ibge.gov.br/api/v3/noticiassdadsa"

document.addEventListener('DOMContentLoaded', () => {
    // console.log(queryString())
    asyncFoo()
})

function callbackFoo() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

async function asyncFoo() {
    const main = document.querySelector("main")
    // const h2 = document.querySelector("h2")
    try {
        const fetchedData = await fetch(wrongApiUrl)
        const jsonData = await fetchedData.json()

        // const div = document.createElement("div")
        // const h2 = document.createElement('h2')
        // const h3 = document.createElement('h3')

        // h2.textContent = jsonData.items[0].titulo
        // h3.textContent = jsonData.items[0].introducao

        // div.appendChild(h2)
        // div.appendChild(h3)
        main.innerHTML = `
            <div class="div">
                <h2>${jsonData.items[0].titulo}</h2>
                <h3>${jsonData.items[0].introducao}</h3>
            </div>
        `
    } catch (e) {
        main.innerHTML = `
            <div class="div">
                <h2>${JSON.stringify(e)}</h2>
            </div>
        `
        console.log(e.message)
    }
}