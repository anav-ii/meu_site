import { listItens, removeItem } from "./carrinho.js"


const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#lista-produtos')

    sectionItensCarrinho.innerHTML = ''

    listItens().forEach((elem, i) => {
        const divItem = document.createElement('div')
        divItem.setAttribute('class', 'produto')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminho)
        imgItem.setAttribute('alt', elem.descricao)

        const h2Descricao = document.createElement('h2')
        h2Descricao.setAttribute('class', 'titulo')
        h2Descricao.innerHTML = elem.descricao

        const pVlrUnitario = document.createElement('p')
        pVlrUnitario.setAttribute('class', 'vlr-unitario')
        pVlrUnitario.innerHTML = `Preço: R$ ${elem.valorUnitario}`
        
        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', elem.quantidade)
        
        const pSubTotal = document.createElement('p')
        pSubTotal.setAttribute('class', 'vlr-subtotal')
        pSubTotal.innerHTML = `Preço: R$ ${elem.valorUnitario}`

        const aRemover = document.createElement('a')
        aRemover.setAttribute('href','#')
        aRemover.setAttribute('class', 'lnk-remover')
        aRemover.innerHTML = `Remover`


        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icones/remover.png')
        imgRemover.setAttribute('alt', 'remover')
        
        aRemover.addEventListener('click',()=>{
            if(confirm(`Tem certeza que deseja remover ${elem.descricao} `)){
                removeItemTela(i)
            }
        })

        divItem.appendChild(imgItem)
        divItem.appendChild(h2Descricao)
        divItem.appendChild(pVlrUnitario)
        divItem.appendChild(inputQuantidade)
        divItem.appendChild(pSubTotal)
        divItem.appendChild(aRemover)


        sectionItensCarrinho.appendChild(divItem)

    })

}

montaTelaCarrinho()

const removeItemTela = (pos)=>{
    removeItem(pos)

    montaTelaCarrinho()
}