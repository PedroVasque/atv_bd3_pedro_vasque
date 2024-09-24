/* NOME DO BANCO DE DADOS */
const database = 'BD3-AV2-PEDRO-VASQUE'

/* NOME DO BANCO DE DADOS */
const collection = 'Produtos'

/* CRIAR OU ACESSA O BANCO DE DADOS: */
use(database)

/* SELECIONA LIVROS ENTRE VALORES DE 100 E 150 */
db[collection].find({
    valor: {$gte:100, $lte:150}
}) 