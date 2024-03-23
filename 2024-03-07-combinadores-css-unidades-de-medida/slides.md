### Combinadores

<!-- _footer: pedro.mateus@unicesumar.edu.br -->

> Combinadores de filhos

Representado pelo sinal `>`, é colocado entre dois seletores. O estilo será aplicado apenas aos elementos que são filhos diretos do primeiro seletor.

```css
/* Aplica estilo apenas aos elementos <span> que são 
  filhos diretos de <p> */
p > span {
  color: red;
}
```

---

> Combinadores de irmãos

Representado pelo sinal `+`, é colocado entre dois seletores. O estilo será aplicado apenas aos elementos que são irmãos imediatos do primeiro seletor.

```css
/* Aplica estilo apenas aos elementos <span> que são 
  irmãos imediatos de <p> */
p + span {
  background-color: lightgrey;
}
```

---

> Combinadores de irmãos gerais

Representado pelo sinal `~`, é colocado entre dois seletores. O estilo será aplicado a todos os elementos que são irmãos do primeiro seletor.

```css
/* Aplica estilo a todos os elementos <span> que são 
  irmãos de <p> */

p ~ span {
  color: blue;
}
```

---

É possível utilizar todos os combinadores em conjunto.

```css
/* Aplica estilo a todos os elementos <span> que são 
  irmãos de <p> e filhos diretos de <div> */

div > p ~ span {
  color: blue;
}
```

[Documentação MDN sobre Combinadores css](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

---

> Algumas das principais unidades de medidas css

| Unidade | Descrição                                            |
| ------- | ---------------------------------------------------- |
| `px`    | Pixels                                               |
| `em`    | Relativo ao tamanho da fonte do elemento pai         |
| `rem`   | Relativo ao tamanho da fonte do elemento raiz (root) |
| `vw`    | Relativo à largura da viewport (1vw = 1% view width) |
| `vh`    | Relativo à altura da viewport (1vh = 1% view height) |
| `%`     | Percentual                                           |
| `ch`    | Largura do "0" no tipo de letra                      |

---

### O modelo de caixas (box model)

Tudo no CSS possuí uma caixa ao seu redor, e cada caixa possui quatro áreas: **conteúdo**, **padding**, **border** e **margin**.

Temos vários tipos de caixas, sendo que essas geralmente sem encaixam na categoria de **caixas em bloco** (block boxes) e as **caixas em linha** (inline blocks). O tipo vai definir como a caixa se comporta na página e em relação as outras caixas.

---

> Caixas Block

As caixas em bloco são caixas que **ocupam toda a largura disponível** e **são empilhadas uma em cima da outra**.

As propriedades **width** e **height** são aplicadas a essas caixas, e elas **podem** ter **margin**, **padding** e **border**.

A menos que sejam alterados manualmente, alguns elementos HTML são caixas em bloco por padrão, como `<div>`, `<p>`, `<h*>`, `<main>`, `<nav>`, `<header>`, `<article>`, `<footer>`, etc.

---

> Caixas Inline

As caixas em linha são caixas que não ocupam toda a largura disponível, são exibidas uma ao lado da outra.

As propriedades **width** e **height** não são aplicadas a essas caixas, **margin** e padding são aplicadas apenas horizontalmente.

Elementos HTML como `<span>`, `<a>`, `<strong>`, `<em>`, `<small>`, `<button>`, etc, são caixas **inline** por padrão.

---

### Tipos de exibição outer (externos) e inner (internos)

As caixas **inline** e **block** são exemplos de caixas do tipo **outer**. Pois ditam como os outros elementos se comportam em relação a elas.

As caixas também possuem um tipo de exibição **inner**, indicando como os elementos na caixa se comportam. Por padrão os elementos dentro de uma caixa são posicionados em um fluxo normal (normal flow), significando que se comportam como caixas em bloco ou em linha.

---

É possível alterar o tipo de exibição inner utilizando a propriedade **display**.

Como por exemplo, a propriedade **display: flex** transforma a caixa em um **flex container**, o "outer display" continuará se comportando como os tipos "block", mas todos os filhos diretos da caixa se comportarão como **flex items**, seguindo as regras do **flexbox**.

<!-- _footer: pedro.mateus@unicesumar.edu.br -->
