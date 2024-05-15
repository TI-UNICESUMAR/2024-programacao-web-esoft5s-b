## Prova Programação WEB - 2o Bimestre

1. **(0.5) Estrutura de Grid na Página, Cor do Header, Main e Footer:**

   - (0.2) Utilize um sistema de grid, como o CSS Grid para estruturar a página.
   - (0.1) Utilize a cor `#4682b4` para o background do `<header>` e `<footer>`, a cor `#f0f0f0` para o background do `<main>`.
   - (0.2) Defina `100ch` como tamanho máximo do conteúdo principal. para garantir uma boa experiência de leitura.

1. **(0.6) Form de busca:**

   - (0.1) Crie um formulário (`<form>`) para o campo de busca, no header.
   - (0.2) Deixe o input centralizado.
   - (0.1) Adicione um botão dentro do input de busca, para ser o submit. Utilize o ícone 🔍. Adicionar cursor pointer.
   - (0.2) Alinhe o botão dentro do campo de busca utilizando `position: absolute`.

1. **(1.65) Filtro:**

   - (0.1) Utilize a tag `<svg>` com o código SVG fornecido para criar o ícone de filtro.
   - (0.1) Alinhe o ícone de filtro à direita do header.
   - (0.1) O ícone deve ser clicável e abrir um modal (`<dialog>`) com os filtros. Adicionar cursor pointer.
   - (1) Exiba o número de filtros ativos, baseado na query string, ao lado do ícone de filtro (não contar page e busca). Alinhe com `position: absolute`.
   - (0.35) Caso exista filtros na querystring, eles deverão ser aplicados nos inputs. Ex: url.com?busca=IBGE, o input de busca deverá ter o value "IBGE"

1. **(2.85) Filtros em um Dialog HTML:**

   - (0.5) Utilize a tag `<dialog>` do HTML para criar o modal de filtros.
   - (0.25) Inclua os campos de filtro "Tipo", "Quantidade", "De" e "Até" dentro do dialog.
   - (0.25) Os filtros deverão ficar em um form.
   - (0.25) Inicie sempre a quantidade com 10, e as options sendo múltiplos de 5.
   - (0.25) Adiciona um ícone de "X" no canto superior direito do modal para fechá-lo.
   - (0.25) Adicione um botão "Aplicar" para aplicar os filtros e fechar o modal.
   - (1) Ao aplicar, os filtros devem ser refletidos na URL da página, com query string, e os dados devem ser atualizados (nova chamada na API).

1. **(1.5) Buscar as Notícias da API do IBGE:**

   - (0.15) Utilize a API http://servicodados.ibge.gov.br/api/v3/noticias para buscar as notícias.
   - (0.25) Utilize a documentação https://servicodados.ibge.gov.br/api/docs/noticias?versao=3, atualize o input de "Tipo" para os valores possíveis.
   - (0.1) Por padrão, busque somente 10 notícias.
   - (1) A api deve ser chamada com os filtros da query string, filtrados pelo usuário.

1. **(1.3) Listar as Notícias Dentro de uma `<ul> <li>`:**

   - (0.25) Após obter os dados das notícias da API, itere sobre esses dados e crie elementos `<li>` para cada notícia.
   - (0.1) Liste esses elementos dentro de uma `<ul>`.
   - (0.1) Cada notícia deve conter a imagem da noticia, o título em um h2, introdução em um parágrafo.
   - (0.3) A imagem fica em um objeto stringified, e precisa ser concatenada com a url de noticias do IBGE `https://agenciadenoticias.ibge.gov.br/`
   - (0.2) Mostrar as editorias da notícia com prefixo `#`.
   - (0.25) Mostrar a quanto tempo a notícia foi publicada, com base na data de publicação. Ex possíveis: "Publicado há 2 dias", "Publicado hoje", "Publicado ontem".
   - (0.1) Adicione um botão "Leia Mais" ao final de cada notícia, que ao ser clicado, abre a página da notícia no site do IBGE, em uma nova aba.

1. **(0.7) Botoes de Paginacao no Final das Noticias em uma `<ul> <li>`:**

   - (0.1) Crie botões de paginação no final das notícias utilizando elementos `<button>` dentro de `<ul>` `<li>`.
   - (0.25) Implemente a lógica para mostrar no máximo 10 botões de páginas. Sempre mostrando a página atual no meio. Ex: Caso o usuário esteja na página 10, mostre as páginas 5, 6, 7, 8, 9, 10, 11, 12, 13, 14. Mesmo comportamento do [site do IBGE](https://agenciadenoticias.ibge.gov.br/agencia-noticias.html)
   - (0.1) Indique visualmente a página atual com uma cor de fundo `#4682b4`.
   - (0.25) Atualizar a querystring da página ao clicar em um botão de paginação. Também carregar novos dados da API com base na página selecionada.

1. **(0.1) Remover Todos os Bullet Points de `<ul> <li>`:**

   - (0.1) Utilize CSS para remover os bullet points padrão de listas não ordenadas (`<ul>`).

1. **(0.7) Responsividade:**

   - (0.2) Garanta que a página seja responsiva e não quebre em resoluções menores.
   - (0.5) Utilize CSS Grid para organizar os campos de filtro em duas colunas em resoluções maiores que 760px e em uma coluna em resoluções menores.

### Links e Recursos Adicionais

[Forms para enviar a atividade - Prazo 16/06](https://forms.gle/XQxcmR2uUGt2aQhB6)

[Vídeo demonstrativo](https://www.youtube.com/watch?v=KJZ2alMe1yg)

#### CSS Position:

[MDN - CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)  
[DevMedia - Como usar a propriedade Position](https://www.devmedia.com.br/como-usar-a-propriedade-position-css/24451)

#### SVG utilizado no filtro:

```html
<svg
  width="20"
  height="20"
  fill="#f0f0f0"
  viewBox="0 0 80 90"
  focusable="false"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="m 0,0 30,45 0,30 10,15 0,-45 30,-45 Z"></path>
</svg>
```

#### Elemento `<dialog>`:

[MDN - The dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

#### Funções/APIS JS úteis:

[Atualizar querystring via JS sem recarregar a página](https://www.ninjadevspace.com.br/post/javascript-update-query-string-without-refreshing-page)

[Percorrer dados de um formulário](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries#examples)

[Percorrer valores de querystring](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/forEach#examples)
