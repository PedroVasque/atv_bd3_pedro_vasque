/* NOME DO BANCO DE DADOS */
const database = 'BD3-AV2-PEDRO-VASQUE'

/* NOME DO BANCO DE DADOS */
const collection = 'Produtos'

/* CRIAR OU ACESSA O BANCO DE DADOS: */
use(database)

db[collection].find({"categoria":"Ficção Científica"})

