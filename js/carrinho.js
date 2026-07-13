//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSesao')) || []
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSesao')) || []

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem =(objItem)=>{
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSesao', JSON.stringify(itensCarrinho))

    listItens()
}
//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = ()=>{
    const listItens = JSON.parse(sessionStorage.getItem('carrinhosSesao')) 
}

//MONTAR TELA CARRINHO
const montaTelaCarrinho = (objListaItens)=>{
    const sectionItem = document.querySelector('#itens-carrinho')

    objListaItens.forEach((elem, i) =>{
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'img-item')

        const divImgItem = document.createElement('div')
        imgItem.setAttribute('src', elem.caminho)
        imgItem.setAttribute('alt', elem.descricao)
        imgItem.appendChild(imgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricoes-itens')

        const divDescricao = document.createElement('div')
        divDescricao.setAttribute('class', 'valores')

        const pItem = document.createElement('p')
        divValores.setAttribute('class', 'valores')

        
    })
}
//EXPORTAÇÃO
export{addItem}