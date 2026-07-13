//IMPORTANDO OS PRODUTOS DO ARQUIVO lista-produtos.js
import { motos } from './lista_produtos.js'
//IMPORTANDO
import { addItem } from './carrinho.js'


//PEGANDO ELEMENTOS DO DOM
const sectionCards = document.querySelector('#cards')

//CARREGANDO OS CARDS
const listarProdutos = () => {
    
}

//CHAMANDO A FUNÇÃO listarProdutos
listarProdutos()

//MONTANDO OS MENUS SEÇÕES
const menuSecoes = () => {
    const mapSecoes = new Map()

    motos.forEach((elem)=>{
        mapSecoes.set(elem.idSecao, elem)
    })
     const secoesFiltradas = Array.from(mapSecoes.values())

     return secoesFiltradas
}

//FUNÇÃO PARA INSERIR OS MENUS NA LISTA
    const carregaSecoes = () =>{
        //PEGANDO O ELEMENTO ul menu-secoes DO DOM
        const ulMenuSecoes = document.querySelector('#menu-secoes')

        //LIMPANDO O ELEMENTO li
        ulMenuSecoes.innerHTML = ''

        // MENU TODOS
        const liTodos = document.createElement('li')
        const aTodos = document.createElement('a')

        aTodos.setAttribute('href', '#')
        aTodos.setAttribute('class', 'lnk-secao')
        aTodos.innerHTML = 'Todos'

        aTodos.addEventListener('click', () => {
            montaCards(motos)
        })

    liTodos.appendChild(aTodos)
    ulMenuSecoes.appendChild(liTodos)

        //CRIANDO O ELEMENTO a ATRIBUINDO O NOME DA SEÇÃO
        menuSecoes().forEach((elem, i)=>{
        const liMenu = document.createElement('li')

        //CRIANDO O ELEMENTO a ATRIBUINDO O NOME DA SEÇÃO
        const aMenu = document.createElement('a')
        aMenu.setAttribute('href', '#')
        aMenu.setAttribute('class', 'lnk-secao')
        aMenu.innerHTML = elem.secao

        aMenu.addEventListener('click', ()=>{
            montaCards(filtroProduto(elem.idSecao))
        })

        //ADICIONANDO O ELEMENTO FILHO a NO li
        liMenu.appendChild(aMenu)

        //ADICIONANDO O ELEMENTO FILHO liMenu NO OBJETO DOM
        ulMenuSecoes.appendChild(liMenu)
    })
}    


    carregaSecoes()

//FUNÇÃO FILTRO PRODUTO
const filtroProduto = (idSecao)=>{
    //FILTRANDO OS PRODUTOS A PARTIR DO REPETIÇÃO 
        return motos.filter(elem =>elem.idSecao === idSecao)
    }


 //CAPTURANDO OS CARACTERES DO INPUT PESQUISA
 //PEGANDO O INPUT DO DOM
 const inputPesquisa = document.querySelector('#pesquisa')

 inputPesquisa.addEventListener('input', (evt)=>{
    //PEGANDO O VALOR DO input E CONVERTENDO EM MINÙSCULO
    let txtInput = evt.target.value.toLowerCase()

    //FILTRANDO OS CARDS A PARTIR DO FILTER E INCLUINDO 
    montaCards(motos.filter(elem => elem.descricao.toLowerCase().includes(txtInput)))
})



 //FUNÇÃO MONTA CARDS
   const montaCards = (objProdutos) =>{
    //LIMPANDO A SECTION cards
    sectionCards.innerHTML = ''
    
    //PERCORRENDO O ARRAY DE PRODUTOS
    objProdutos.forEach((elem, i)=>{
        //CRIANDO ELEMENTO div E DEFININDO O ATRIBUTO CARD
        const divCards = document.createElement('div')
        divCards.setAttribute('class', 'card')

        //CRIANDO O ELEMENTO img E DEFINIDO OS ATRIBUTOS SRC E ALI OS VALORES DO CAMINHO DAS IMAGENS E A DESCRIÇÃO DOS PRODUTOS
    
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho)
        imgCard.setAttribute('alt', elem.descricao)

        //CRIANDO O ELEMENTO p  E ATRIBUINDO A DESCRIÇÃO DOS PRODUTOS
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao

        //CRIANDO O ELEMENTO h2 E ATRIBUINDO O VALOR UNITÁRIO DEIXANDO EM DUAS CASAS DECIMAIS E SUBSTITUINDO O PONTO POR VÍRGULA
        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valorUnitario).
        toFixed(2).replace('.',',')}`

        //CRIANDO O ELEMENTO button E DEFININDO OS ATRIBUTOS CLASS E A DESCRIÇÃO ADICIONAR
        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        btnCard.addEventListener('click', ()=>{
            addItem(elem)
            window.location.href = 'paginas/carrinho.html'
        })

        //ADICIONANDO OS ELEMENTOS FILHOS AOS divCard
        divCards.appendChild(imgCard)
        divCards.appendChild(pCard)
        divCards.appendChild(h2Card)
        divCards.appendChild(btnCard)

        //ADICIONANDO O divCard A SECTION CARDS
        sectionCards.appendChild(divCards)
    })
   }