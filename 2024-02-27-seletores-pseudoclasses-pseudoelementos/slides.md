### Seletores de atributos

```css
/* Seleciona todos os elementos <a> com o atributo 
  "href" que contém o "https://" */
a[href*="https://"]
{
  color: green;
}

/* Seleciona todos os elementos <a> com o atributo 
  "title" */
a[title] {
  color: blue;
}
```

[Documentação MDN sobre Seletores de atributos](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

---

### Pseudo classes

```css
/* Aplica o estilo quando elementos <a> estiverem
  em hover (mouse sobre o elemento) */
a:hover {
  color: green;
}

button:disabled {
  color: gray;
}
```

[Documentação MDN sobre Pseudo Classes](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)

---

### Pseudo elementos

```css
/* Aplica estilo a primeira letra dos <p> */
p::first-letter {
  color: blue;
  text-transform: uppercase;
}

/* Aplica a cor laranja aos marcadores 
  de cada list item */

li::marker {
  color: orange;
}
```

[Documentação MDN sobre Pseudo Elementos](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elements)
