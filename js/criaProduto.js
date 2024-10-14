import { conectApi } from './conectApi.js'

const formulario = document.querySelector('[data-form]')
//console.log(formulario)

async function criaProduto(evento) {
  evento.preventDefault()
  const nome = document.querySelector('[data-nome]').value
  let valor = parseFloat(document.querySelector('[data-valor]').value)
  if (!isNaN(valor)) {
    valor = valor.toFixed(2)
  }
  const imagem = document.querySelector('[data-imagem]').value

  try {
    const retorno = await conectApi.criarProduto(nome, valor, imagem)
    alert(`Produto ${nome} criado com sucesso`)
    //window.location.href = './index.html'
  } catch (e) {
    alert(e)
  }
}

formulario.addEventListener('submit', (evento) => criaProduto(evento))
