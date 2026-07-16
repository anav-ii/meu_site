//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSesao')) || []

//FUNCÃO ITEM
const item = (objProduto)=>{

    const item = {
        idProduto: objProduto.idProduto,
        descricao: objProduto.descricao,
        valorUnitario: objProduto.valorUnitario,
        unidade: objProduto.unidade,
        caminho: objProduto.caminho,
        quantidade : 1
    }
    return item
}



const addItem = (objItem) => {

    const produtoExistente = itensCarrinho.find(
        produto => produto.idProduto === objItem.idProduto
    )
    if (produtoExistente) {
        produtoExistente.quantidade++
    } else {
        itensCarrinho.push(item(objItem))
    }
    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
}

//FUNÇÃO ALTERAR QUANTIDADE
const alterarQuantidade = (pos, quantidade) => {

    if (quantidade <= 0) {
        removeItem(pos)
        return
    }

    itensCarrinho[pos].quantidade = quantidade

    sessionStorage.setItem(
        'carrinhoSessao',
        JSON.stringify(itensCarrinho)
    )
}


//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
    
    return listaItens
}

//FUNÇÃO REMOVER ITEM DO ARRAY
const removeItem = (pos)=>{
    itensCarrinho.splice(pos, 1)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
}

//EXPORTAÇÃO
export { addItem, listItens, removeItem, alterarQuantidade }