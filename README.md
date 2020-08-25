## Teste de Front -End ReactJS
### Executar aplicação
`npm i && npm start` ou `yarn && yarn start`
### Fluxo da aplicação:
- Landing page com um botão para iniciar a aplicação
- Personagem no centro da página e barra na esquerda indicando quantos Pokemons ele já capturou
- Ao passar o mouse no personagem é exibido uma lupa indicando para fazer uma busca
- Ao clicar é feito uma busca por Pokemon aleatório
- Com o resultado da busca é aberto um modal para o usuário ver detalhes do Pokemon
- Usuário tem a opção de capturar clicando na pokebola ou fecha o modal
- Se ele capturar o Pokemon, esse Pokemon é exibido na barra a esquerda
- Usuário pode capturar até 6 Pokemons
- Selecionando qualquer Pokemon na barra da esquerda o usuário pode ver os detalhes do pokemon
- Usuário pode editar o nome de um Pokemon capturado
- Na barra da esquerda o usuário tem a possibilidade de criar um novo Pokemon customizado
- O formulários de criação de Pokemon deve conter todos controles de validação de campos
- Para Pokemon customizado o usuário pode editar qualquer informação (um pokemon só pode ter 2 tipos no máximo)
- Sempre que liberar um Pokemon é possível capturar outro através da busca ou criando um customizado
- Caso as 6 posições sejam ocupadas o usuário não pode mais buscar ou criar novos pokemons

### Links
- Link da API: <https://pokeapi.co/> 
- Layout Desktop: <https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=13%3A13571&scaling=min-zoom>
- Layout Mobile: <https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=41%3A18782&scaling=min-zoom>
- Style Guide: <https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=36%3A2135&scaling=min-zoom>
- Componentes: <https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=27%3A18584&scaling=min-zoom>
- Issues: <https://bitbucket.org/fdtedsd/teste-frontend-react/issues>

### Bibliotecas liberadas:
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
- prop-types
- typescript

### Resoluções:
 - Desktop: 1280 x 720  
 - Mobile: 360 x 740 
### Opcional
 - Teste unitário
 - Teste de integração
 - Teste de interface
