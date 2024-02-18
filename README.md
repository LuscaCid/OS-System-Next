# Projeto feito com next, Typescript e tailwind 


## Requisitos funcionais da aplicacao

### as ordems de servico precisam ter :

-deve ser informado data de chegada na empresa durante a geração da OS, pode ser informado por baixo dos panos apenas pegando o new Date().toIsoString()
-a OS deve ter prazo de saida
-um cliente atrelado a ela, ou seja, um cadastro anterior deve ser feito
-deve ser possivel pesquisar ordens de serviço no histórico pelo título, ou descrição ou nome do dono através do mesmo input
-ao criar um novo Job ou OS é necessário pesquisar um cliente e ligar a ordem serviço, se caso ele nao existir na base de dados, deve existir um botao que abra um modal para registrar um cliente no app e assim que criar o cadastro, a ordem de serviço deve ser criada e o usuário ser alertado disso.
-deve ser possivel editar as informações do usuário
-deve ser possivel cadastrar um novo usuário
-deve ser possivel visualizar cada OS gerada por um usuário em específico 
-area de visualização de clientes, deleção, criacao, edição, pesquisa

## Regras de negócios

-ao criar ordem de serviço, ela deve estar conectada a um cliente
-prazo mínimo para entrega do dispositivo é de 2 dias

