import { conectApi } from './conectApi.js'

const lista = document.querySelector('[data-lista]')
//console.log(lista)

export default function constroiCard(nome, valor, imagem, id) {
  const produto = document.createElement('li')

  produto.className = 'produto__item'
  produto.innerHTML = `<img class="imagem__produto" src="${imagem}" alt="Imagen del producto">
                            <div class="card-container--info">
                                <p>${nome}</p>
                                <div class="card-container--value">
                                    <p>Valor: $${valor}</p>
                                    <img class="icone" src="./imagens/lixeira.png" alt="Ícono de eliminación" id=${id}>
                                </div>
                            </div>`

  //console.log(produto)
  return produto
}

async function listaItens() {
  const listaApi = await conectApi.listaProdutos()
  //console.log(listaApi[1].id)
  listaApi.forEach((elemento) =>
    lista.appendChild(
      constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id)
    )
  )
}

listaItens()

async function deletaProduto() {
  lista.addEventListener('click', async (event) => {
    if (event.target.classList.contains('icone')) {
      //console.log('Clique na lixeira:', event.target)
      //alert(event.target.nome)
      try {
        const retorno = await conectApi.deletarProduto(event.target.id)

        window.location.href = './index.html'
      } catch (e) {
        alert(e)
      }
    }
  })
}

deletaProduto()
