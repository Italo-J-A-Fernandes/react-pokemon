##Teste de Front -End ReactJS
##Executar aplicação
`npm i && npm start` ou `yarn && yarn start`
###Fluxo da aplicação:
- Landing page com um botão para iniciar a aplicação
- Personagem no centro da página e barra na esquerda indicando quantos Pokemons ele já capturou
- Ao passar o mouse no personagem é exibido uma lupa indicando para fazer uma busca
- Ao clicar é feito uma busca por Pokemon aleatório
- Com o resultado da busca é aberto um modal para o usuário ver detalhes do Pokemon
- Usuário tem a opção de capturar clicando na pokebola ou fecha o modal
- Se ele capturar o Pokemon, esse Pokemon é exibido na barra a esquerda
- Usuário pode capturar até 6 Pokemons
- Selecionando qualquer Pokemon na barra da esquerda o usuário pode ver os detalhes do pokemon
- Na barra da esquerda o usuário tem a possibilidade de criar um novo Pokemon customizado
- Para Pokemon customizado o usuário pode editar todos os detalhes
- Na janela de detalhes do Pokemon o usuário tem a opção de editar somente o nome do Pokemon ou liberar o Pokemon
- Sempre que liberar um Pokemon é possível capturar outro através da busca
- Caso as 6 posições sejam ocupadas o usuário não pode mais buscar pokemons
Link da API: https://pokeapi.co/  <br>
Especificações: https://www.figma.com/file/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=45%3A28100  <br>
Layout Desktop: https://www.figma.com/file/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=13%3A2617 <br>
Layout Mobile: https://www.figma.com/file/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=41%3A18734 <br>
Style Guide: https://www.figma.com/file/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=36%3A506 <br>
Componentes: https://www.figma.com/file/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=21%3A24690 <br>
#
###Bibliotecas liberadas:
- react-redux
- redux
- redux-thunk
- redux-sagas
- axios
- storybook
- eslint
- node-sass
- styled-components
- prettier
#
###Resoluções:
Desktop: 1280 x 720 <br>
Mobile: 360 x 740
###Opcional
 - Teste unitário
 - Teste de integração
 - Teste de interface
