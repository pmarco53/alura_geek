import { conectApi } from './conectApi.js'

const lista = document.querySelector('[data-lista]')
//console.log(lista)

export default function constroiCard(nome, valor, imagem) {
  const produto = document.createElement('li')
  console.log(valor)
  produto.className = 'produto__item'
  produto.innerHTML = `<img class="imagem__produto" src="${imagem}" alt="Imagen del producto">
                        <div class="card-container--info">
                            <p>${nome}</p>
                            <div class="card-container--value">
                                <p>Valor: $${valor}</p>
                                <img class="icone" src="./imagens/icone.png" alt="Ícono de eliminación">
                            </div>
                        </div>`
  //console.log(produto)
  return produto
}

async function listaItens() {
  const listaApi = await conectApi.listaProdutos()
  console.log(listaApi)
  listaApi.forEach((elemento) =>
    lista.appendChild(
      constroiCard(elemento.nome, elemento.valor, elemento.imagem)
    )
  )
}

listaItens()
