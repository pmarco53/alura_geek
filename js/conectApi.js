async function listaProdutos() {
  const conexao = await fetch('http://localhost:3001/produtos')
  const conexaoConvertida = await conexao.json()
  //console.log(conexaoConvertida)
  return conexaoConvertida
}

export const conectApi = {
  listaProdutos,
}
