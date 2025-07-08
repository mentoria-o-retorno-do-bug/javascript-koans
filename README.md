# javascript-koans
Baseado nos fantásticos [Ruby koans](http://github.com/edgecase/ruby_koans) da Edgecase, o objetivo dos
Javascript koans é ensinar programação Javascript através de
testes.

Quando você executar os koans pela primeira vez, será apresentado com um erro de execução e um
rastreamento de pilha indicando onde o erro ocorreu. Seu objetivo é fazer o
erro desaparecer. Conforme você corrige cada erro, deve aprender algo sobre a
linguagem Javascript e programação funcional em geral.

Sua jornada em direção à iluminação Javascript começa no arquivo koans/AboutExpects.js. Estes
koans serão muito simples, então não pense demais neles! Conforme você progride através de
mais koans, mais e mais sintaxe Javascript será introduzida, o que permitirá
que você resolva problemas mais complicados e use técnicas mais avançadas.

## Executando os Koans

### Método Recomendado: Live Server no VSCode

Para uma experiência de desenvolvimento mais fluida, recomendamos usar o **Live Server** no VSCode:

1. **Instale a extensão Live Server:**
   - Abra o VSCode
   - Vá para a aba de extensões (Ctrl+Shift+X)
   - Procure por "Live Server" (por Ritwick Dey)
   - Clique em "Instalar"

2. **Execute o projeto:**
   - Abra a pasta do projeto no VSCode
   - Clique com o botão direito no arquivo `KoansRunner.html`
   - Selecione "Open with Live Server"
   - O navegador abrirá automaticamente e atualizará sempre que você salvar um arquivo

### Método Alternativo: Navegador Direto

Simplesmente navegue até a pasta Javascript Koans usando um navegador de arquivos, e
clique duas vezes em KoansRunner.html.

Qualquer navegador serve, mas para os melhores resultados Firefox ou Chrome é
recomendado. Mais informações de rastreamento de pilha aparecem para javascript nestes
navegadores.

### Ordem de Progressão dos Koans

Os koans estão organizados em uma sequência progressiva de dificuldade. Siga esta ordem:

#### **1. AboutExpects.js** - Fundamentos de Testes
- **Arquivo:** `koans/AboutExpects.js`
- **Conceitos:** Expectativas básicas, igualdade, tipos de dados
- **Objetivo:** Aprender como escrever e entender testes

#### **2. AboutArrays.js** - Arrays e Coleções
- **Arquivo:** `koans/AboutArrays.js`
- **Conceitos:** Criação de arrays, métodos (push, pop, slice), referências
- **Objetivo:** Dominar manipulação de arrays

#### **3. AboutFunctions.js** - Funções e Escopo
- **Arquivo:** `koans/AboutFunctions.js`
- **Conceitos:** Declaração de funções, escopo léxico, closures, argumentos
- **Objetivo:** Entender funções como cidadãos de primeira classe

#### **4. AboutObjects.js** - Objetos e Propriedades
- **Arquivo:** `koans/AboutObjects.js`
- **Conceitos:** Propriedades de objetos, métodos, prototype, palavra-chave 'in'
- **Objetivo:** Trabalhar com objetos JavaScript

#### **5. AboutMutability.js** - Mutabilidade
- **Arquivo:** `koans/AboutMutability.js`
- **Conceitos:** Propriedades públicas/privadas, mutabilidade vs imutabilidade
- **Objetivo:** Entender como dados podem ser modificados

#### **6. AboutHigherOrderFunctions.js** - Funções de Ordem Superior
- **Arquivo:** `koans/AboutHigherOrderFunctions.js`
- **Conceitos:** filter, map, reduce, forEach, all, any, range, flatten
- **Objetivo:** Programação funcional com Underscore.js

#### **7. AboutInheritance.js** - Herança e Protótipos
- **Arquivo:** `koans/AboutInheritance.js`
- **Conceitos:** Herança prototipal, construtores, métodos herdados
- **Objetivo:** Entender o sistema de herança do JavaScript

#### **8. AboutApplyingWhatWeHaveLearnt.js** - Aplicação Prática
- **Arquivo:** `koans/AboutApplyingWhatWeHaveLearnt.js`
- **Conceitos:** Aplicação de todos os conceitos aprendidos em problemas reais
- **Objetivo:** Consolidar todo o conhecimento adquirido

### Como Progredir

1. **Comece pelo primeiro erro:** O primeiro erro estará em `koans/AboutExpects.js`
2. **Edite o arquivo correto:** Abra o arquivo indicado no erro
3. **Encontre a linha:** O erro mostrará exatamente qual linha precisa ser corrigida
4. **Substitua `FILL_ME_IN`:** Troque `FILL_ME_IN` pelo valor correto
5. **Salve o arquivo:** Se usando Live Server, a página atualizará automaticamente
6. **Verifique o resultado:** O teste deve ficar verde
7. **Continue para o próximo:** Repita até que todos os testes fiquem verdes

### Dicas Importantes

- **Não pule koans:** Cada koan constrói sobre o conhecimento do anterior
- **Leia os comentários:** Eles explicam o que você deve aprender
- **Experimente:** Tente diferentes valores para entender o comportamento
- **Use o console:** Abra o DevTools (F12) para debugar se necessário
- **Mantenha o foco:** Resolva um erro por vez

O executor de testes usado é [Jasmine](http://jasmine.github.io/) com um visualizador de relatórios personalizado.

### [Licenciado MIT](LICENSE)
