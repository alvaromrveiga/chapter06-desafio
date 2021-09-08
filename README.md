## Instalação

1. Clone o projeto e rode no terminal:

1. ``yarn`` # Instala as dependências
   
1. ``serverless dynamodb install`` # Instala o banco de dados
   
1. ``yarn dynamo:start`` # Inicializa o banco de dados

1. ``yarn dev`` # Inicializa a aplicação


## Rotas

1.  Criar todo POST
    -  ``http://localhost:3000/dev/todos/{user_id}`` 
       - Exemplo: 
      ```json
      {
      
          "id":"027bdc2e-18ba-4342-aa82-edb17d8e77c5",

	      "title": "Lavar carro",

	      "deadline": "09-09-2021"
      
      } 
      ```

1. Buscar todos GET
   -  ``http://localhost:3000/dev/todos/{user_id}``
