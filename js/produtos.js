//IMPORTANDO OS PRODUTOS DO ARQUIVO lista-produtos.js
import { motos } from './lista_produtos.js'

//PEGANDO ELEMENTOS DO DOM
const sectionCards = document.querySelector('#cards')

//CARREGANDO OS CARDS
const listarProdutos = () => {
    sectionCards.innerHTML = ''
    
    motos.forEach((elem, i)=>{
        const divCards = document.createElement('div')
        divCards.setAttribute('class', 'card')

        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)

        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valorUnitario).
        toFixed(2).replace('.',',')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        divCards.appendChild(imgCard)
        divCards.appendChild(pCard)
        divCards.appendChild(h2Card)
        divCards.appendChild(btnCard)

        sectionCards.appendChild(divCards)
    })
}

listarProdutos()