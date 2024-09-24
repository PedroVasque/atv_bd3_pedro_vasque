/* NOME DO BANCO DE DADOS */
const database = 'BD3-AV2-PEDRO-VASQUE'

/* NOME DO BANCO DE DADOS */
const collection = 'Produtos'

/* CRIAR OU ACESSA O BANCO DE DADOS: */
use(database)

/* SELECIONA UM LIVRO DE UMA CATEGORIA E UM VALOR DETERMINADO */
db[collection].find({

    $or:[
        {categoria:{$eq:'Fantasia Heroica'}},
        {valor:{$lte:100}}
    ]
})