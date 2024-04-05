A partir da resoluçao da [atividade passada](../2024-04-02-navegacao-javascript/resolucao-atividade/)

Observações para entrega:
Respostas com link do Github Pages que não mostram o html da página não serão avaliadas, nota será 0. Cliquem no link antes de enviar.

Quem ainda tem dificuldade nesse ponto, pode utilizar o tutorial disponível no nosso [github](../2024-03-05-criacao-repositorio-deploy-github-pages/aula.md), ou me chamar para ajudar.

Atividade:

Adicionar as seguintes funcionalidades:

1. Adicionar links a lista de evoluções do Squirtle, que vão redirecionar para uma página pokemon.html;
2. Esse redirect para a nova página deverá passar o nome da evolução por parâmetro na url, utilizando querystring. Ex: href="./pokemon.html?evolucao=wartortle";
3. Criar uma nova página (novo arquivo html), com o nome pokemon.html;
4. Essa página deverá ter o conteúdo do Header e do Footer da página principal;
5. O title da página deverá ser atualizado para: "Página do {nome da evolução}";
6. Essa nova página deverá carregar um arquivo javascript, e através desse script:
   a. Deverá ler querystring da url, que irá conter o nome da evolução;
   b. Com o nome dessa evolução, deverá fazer uma requisiçao fetch para a pokeapi e passar o nome do pokemon que recebemos de parâmetro, ex: fetch("https://pokeapi.co/api/v2/pokemon/wartortle");
   c. Depois de obter a resposta da requisição, criar um elemento img e adicionar a src com o valor de sprites.front_default que retorna da pokeApi;
   d. Adicionar atributos de acessibilidade, utilizando javascript e adicionar esse elemento novo no body da página.

Links que podem auxiliar para a resolução da atividade:

Para pegar a querystring da url:[ Documentação da Location API](https://developer.mozilla.org/en-US/docs/Web/API/Location), [Documentação URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

Para fazer o fetch: [Utilizando fetch para fazer requests GET e POST](https://www.freecodecamp.org/portuguese/news/fetch-api-como-fazer-solicitacoes-get-e-post-em-javascript/)

[Slides da aula de terça-feira](../2024-04-02-navegacao-javascript/slides.md)
