/* NOME DO BANCO DE DADOS */
const database = 'BD3-AV2-PEDRO-VASQUE'

/* NOME DO BANCO DE DADOS */
const collection = 'Produtos'

/* CRIAR OU ACESSA O BANCO DE DADOS: */
use(database)

/*INSERE UM REGISTRO NA COLEÇÃO DE DADOS:*/
db[collection].insertOne(
    {
      "nome_do_produto": "Fone de Ouvido Bluetooth",
      "valor_do_produto": 199.90,
      "quantidade_em_estoque": 150,
      "fabricante_do_produto": "TechSound",
      "categoria_do_produto": "Eletrônicos",
      "descricao_do_produto": "Fone de ouvido sem fio com cancelamento de ruído, bateria de longa duração e conforto ergonômico."
      }
)