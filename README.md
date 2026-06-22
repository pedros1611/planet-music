# Planet Music

## Integrantes da dupla
- Pedro Henrique Soares Bezerra
- Vinicíus Mesquita da Costa

## Descrição do caso escolhido
Planet Music é uma loja especializada em instrumentos musicais e equipamentos para músicos (baterias, pianos, violões, flautas e acessórios).

## Necessidade identificada
A loja não possuía um site, o que limitava a divulgação do catálogo de produtos e dos canais de contato com o público.

## Público-alvo
Músicos amadores e profissionais que buscam equipamentos de qualidade e querem conhecer o catálogo e os canais de contato da loja antes de visitar ou comprar.

## Objetivo do site
Apresentar a loja e seu catálogo de produtos, e direcionar o visitante para o contato/orçamento.

## Processo de desenvolvimento
Nós iniciamos o projeto identificando a necessidade da Planet Music de possuir uma presença digital simples para divulgação de produtos e contatos. Inicialmente foi criada a estrutura HTML semântica. Em seguida foi desenvolvido o CSS para identidade visual e responsividade. Posteriormente foi implementado o menu hambúrguer com JavaScript e utilizado o Bootstrap na organização dos cards de produtos. Por fim foram realizados testes de responsividade, acessibilidade e navegação.

## Principais decisões do projeto
- Estrutura HTML semântica com header, nav, main, section e footer.
- CSS externo organizado por componente.
- Responsividade via media queries e grid do Bootstrap na seção de produtos.
- Botão hambúrguer para navegação em telas pequenas.
- Textos alternativos (alt) em todas as imagens.
- Botão de chamada para ação ("Solicitar orçamento") direcionando para a seção de contato.

## Funcionalidade em JavaScript
Menu hambúrguer: ao clicar no ícone (visível em telas menores que 768px), o menu de navegação abre/fecha via toggle de classe CSS. O atributo aria-expanded é atualizado para acessibilidade, e o menu se fecha automaticamente ao clicar em um link.

## Uso de Bootstrap
Grid system (container/row/col) na seção "Nossos produtos", tornando os cards responsivos (1 coluna no celular, 2 no tablet, 4 no desktop) sem necessidade de media queries adicionais para esse bloco.

## Testes realizados
- Testes de responsividade utilizando o modo de inspeção do navegador.
- Verificação do funcionamento dos links de navegação.
- Teste de carregamento das imagens.
- Teste do menu hambúrguer em dispositivos móveis.
- Navegação utilizando teclado.
- Verificação do funcionamento após publicação.

## Links
- Link do repositório: https://github.com/pedros1611/planet-music
- Link do site publicado: https://pedros1611.github.io/planet-music/

## Contribuição dos integrantes
Pedro Henrique Soares Bezerra:
- Estrutura HTML e organização do conteúdo.
- Implementação da responsividade.

Vinícius Mesquita da Costa:
- Estilização com CSS.
- Implementação do JavaScript e testes finais.
