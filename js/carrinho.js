//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSesao')) || []
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSesao')) || []

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSesao', JSON.stringify(itensCarrinho))
}
//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhosSesao')) || []
    
    return listaItens
}
//EXPORTAÇÃO
export { addItem, listItens }