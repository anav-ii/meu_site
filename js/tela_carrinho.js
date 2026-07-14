import { listItens } from "./carrinho.js"


const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#lista-produtos')

    sectionItensCarrinho.innerHTML = ''

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', item)

        const divImgItem = document.createElement('img')
        ImgItem.setAttribute('src', elem.caminho)
        ImgItem.setAttribute('alt', elem.descricao)

        ImgItem.appendChild(ImgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricoes-itens')

        const divDescricao = document.createElement('div')
        divQuant.setAttribute('class', input - quantidade)

        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', 1)

        divQuant.appendChild(inputQuantidade)

        const pCalc = document.createElement('p')
        pCalc.innerHTML = `R$ ${elem.valorUnitario * 1}`

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icones/remover.png')
        imgRemover.setAttribute('alt', 'remover')

        divValores.appendChild(pItem)
        divValores.appendChild(divQuant)
        divValores.appendChild(pCalc)
        divValores.appendChild(imgRemover)

        divDescricaoItens.appendChild(divDescricao)
        divDescricaoItens.appendChild(divValores)



    })

}

montaTelaCarrinho()