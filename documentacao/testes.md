# Testes Realizados

## Objetivo

Este documento registra os testes realizados durante o desenvolvimento
do projeto **Planet Music**, garantindo que a aplicação esteja
funcionando corretamente antes da publicação.

------------------------------------------------------------------------

## 1. Testes de Responsividade

Foram realizados testes utilizando o modo responsivo das Ferramentas de
Desenvolvedor do Google Chrome.

### Resoluções testadas

-   320px (smartphones pequenos)
-   375px (iPhone)
-   768px (tablets)
-   1024px (notebooks)
-   1440px (monitores Full HD)

### Resultados

-   A navegação permaneceu funcional em todas as resoluções.
-   O menu responsivo foi exibido corretamente em dispositivos móveis.
-   As imagens foram redimensionadas sem perda de qualidade.
-   Não foi identificada rolagem horizontal indesejada.
-   Os textos permaneceram legíveis em todas as telas.

------------------------------------------------------------------------

## 2. Testes de Navegação

Foram verificados todos os links presentes no menu de navegação.

### Resultados

-   Todos os links direcionam corretamente para suas respectivas seções
    da página.
-   A navegação ocorre de forma fluida.
-   O menu móvel fecha automaticamente após a seleção de uma opção.

------------------------------------------------------------------------

## 3. Testes das Imagens

Foi verificado o carregamento de todas as imagens utilizadas no projeto.

### Resultados

-   Todas as imagens foram carregadas corretamente.
-   Nenhuma imagem apresentou erro de carregamento.
-   Todas possuem texto alternativo (`alt`) para melhorar a
    acessibilidade.

------------------------------------------------------------------------

## 4. Testes do JavaScript

Foi testada a funcionalidade implementada em JavaScript.

### Resultados

-   O botão do menu responsivo abre e fecha corretamente.
-   O atributo `aria-expanded` é atualizado conforme o estado do menu.
-   Após clicar em uma opção da navegação, o menu é fechado
    automaticamente.

------------------------------------------------------------------------

## 5. Testes de Acessibilidade

Foram realizadas verificações básicas de acessibilidade.

### Resultados

-   Todas as imagens possuem atributo `alt`.
-   A estrutura da página utiliza HTML semântico.
-   Os títulos seguem uma hierarquia adequada.
-   Os botões possuem identificação clara.
-   O contraste entre texto e fundo facilita a leitura.
-   Foi possível navegar utilizando a tecla **Tab**.

------------------------------------------------------------------------

## 6. Testes da Publicação

Após a publicação no GitHub Pages foram realizados novos testes.

### Resultados

-   A página foi carregada corretamente.
-   O CSS foi aplicado sem erros.
-   O JavaScript funcionou normalmente.
-   Todas as imagens foram carregadas corretamente.
-   Não foram encontrados links quebrados.

------------------------------------------------------------------------

# Conclusão

Após a realização dos testes, verificou-se que o projeto atende aos
requisitos propostos para a disciplina de Desenvolvimento Front-end. A
aplicação apresentou funcionamento adequado em diferentes dispositivos,
manteve boa usabilidade, responsividade, acessibilidade básica e
estabilidade após a publicação.
