async function listaProdutos() {
  const conexao = await fetch('http://localhost:3001/produtos')
  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

async function criarProduto(nome, valor, imagem) {
  const conexao = await fetch('http://localhost:3001/produtos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      nome: nome,
      valor: valor,
      imagem: imagem,
    }),
  })

  if (!conexao.ok) {
    throw new Error('Nao foi possivel enviar o produto')
  }

  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

async function buscaProduto(id) {
  const conexao = await fetch(`http://localhost:3001/produtos/${id}`)

  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

async function deletarProduto(id) {
  const produto = await buscaProduto(id)

  const conexao = await fetch(`http://localhost:3001/produtos/${id}`, {
    method: 'DELETE',
  })

  if (!conexao.ok) {
    throw new Error(`Erro ao deletar produto .Status: ${conexao.status}`)
  } else {
    alert(`Produto ${produto.nome} deletado com sucesso.`)
  }

  return conexao
}

export const conectApi = {
  listaProdutos,
  criarProduto,
  deletarProduto,
}
