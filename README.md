# Coxilha Fermentados Artesanais - Landing page

Landing page comercial da **Coxilha**, uma cervejaria e kombucharia artesanal de Santa Maria (RS). O site apresenta os dois produtos (cerveja IPA e kombucha de gengibre e limão), explica o processo de produção e recebe pedidos de atacado por WhatsApp.

> **Aviso:** a Coxilha é uma empresa fictícia, criada para um trabalho da disciplina de Custos A (UFSM, Ciências Econômicas). Preços, contatos e dados são ilustrativos.

## Visão geral

- Página única, em HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build.
- Hero dividido entre cerveja e kombucha, que se expande ao passar o mouse.
- Fichas dos produtos com preço de atacado.
- Seção "Do campo à garrafa" com as etapas de produção.
- Abas por tipo de cliente (bares, empórios, cafés e academias, eventos).
- Perguntas frequentes em sanfona, sem JavaScript.
- Formulário de pedido que monta a mensagem e abre o WhatsApp.
- Layout responsivo, com menu para celular.

## Estrutura do projeto

```
coxilha-landing/
├── index.html        # estrutura e conteúdo da página
├── css/
│   └── styles.css    # identidade visual, layout e responsividade
├── js/
│   └── script.js     # menu mobile, abas e formulário
└── README.md
```

## Como rodar

Não há dependências. Escolha uma das opções:

1. **Direto no navegador:** abra o `index.html`.
2. **Servidor local** (opcional):

   ```bash
   python3 -m http.server 8000
   ```

   Depois acesse `http://localhost:8000`.

As fontes (Bricolage Grotesque e Figtree) são carregadas do Google Fonts, então é preciso conexão com a internet na primeira abertura.

## Como personalizar

### 1. Número do WhatsApp

Em `js/script.js`, na primeira linha, troque o valor da constante `WHATSAPP` por um número real, só com dígitos, incluindo o código do país e o DDD:

```js
const WHATSAPP = '5555999990000';
```

Enquanto o valor for `SEUNUMERO`, o formulário avisa que o número ainda não foi configurado, em vez de abrir o WhatsApp.

### 2. Dados de contato e informações da empresa

No `index.html`, procure os marcadores entre colchetes e substitua:

| Marcador | O que colocar |
|---|---|
| `[SEU WHATSAPP]` | Número exibido na seção de contato |
| `[SEU E-MAIL]` | E-mail comercial |
| `[@SEU_INSTAGRAM]` | Perfil no Instagram |
| `[ENDEREÇO]` | Endereço da fábrica |
| `[CNPJ]` | CNPJ da empresa (rodapé) |
| `[PEDIDO MÍNIMO]` | Pedido mínimo de atacado (FAQ) |
| `[REGIÃO ATENDIDA]` | Cidades e regiões com entrega (FAQ) |

### 3. Cores e tipografia

As cores ficam no início do `css/styles.css`, em variáveis CSS:

```css
:root{
  --malte:#1A1511;   /* fundo escuro */
  --ambar:#E39B22;   /* cerveja e botões */
  --campo:#2F5F2B;   /* kombucha */
  --limao:#C6DB4A;   /* destaque da kombucha */
  --espuma:#FFF8E7;  /* texto sobre fundo escuro */
  --palha:#F1F4E4;   /* fundo claro */
  --tinta:#241C14;   /* texto sobre fundo claro */
}
```

### 4. Preços e textos dos produtos

Os preços de atacado (R$ 19,10 para a IPA e R$ 9,10 para a kombucha) estão nas seções `#ipa` e `#kombucha` do `index.html`.

## Publicar no GitHub Pages

1. Envie os arquivos para um repositório no GitHub.
2. Em **Settings > Pages**, escolha a branch `main` e a pasta `/ (root)` como origem.
3. Aguarde alguns minutos: o site ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Acessibilidade

- Foco de teclado visível em todos os elementos interativos.
- Abas navegáveis com as setas do teclado.
- Textos alternativos nas ilustrações das garrafas.
- Animações desativadas para quem usa a opção "reduzir movimento" do sistema.

## Tecnologias

- HTML5
- CSS3 (Grid, Flexbox, variáveis CSS)
- JavaScript (ES6+)
- Google Fonts

## Licença

Defina a licença do projeto antes de publicar (por exemplo, MIT) e adicione o arquivo `LICENSE` na raiz do repositório.

## Autor

**Waliston Euripedes**
Universidade Federal de Santa Maria, Curso de Ciências Econômicas
Disciplina: Custos A, Profª. Eduarda Grasel Stieler