# NutriGuia Pro — Landing Page

Landing page de alta conversão para comercialização de 3 e-books nutricionais.

## Estrutura do Projeto

```
infoprodutos/
├── index.html                  # Página principal (HTML semântico)
├── css/
│   ├── variables.css           # Design tokens (cores, fontes, sombras)
│   ├── base.css                # Reset, utilities, scroll reveal
│   ├── components.css          # Navbar, cards, buttons, FAQ, footer
│   ├── sections.css            # Layout de cada seção (hero, products, combo...)
│   └── responsive.css          # Media queries (1024px, 768px, 480px)
├── js/
│   ├── app.js                  # Entry point — importa todos os módulos
│   ├── scroll-reveal.js        # Animações de entrada (IntersectionObserver)
│   ├── navigation.js           # Navbar, hamburger, smooth scroll
│   ├── faq.js                  # Accordion com exclusão mútua
│   ├── countdown.js            # Timer com persistência (sessionStorage)
│   └── analytics.js            # Tracking de eventos + UTM parser
├── assets/
│   └── images/                 # Capas dos e-books
├── REQUISITOS-LANDING-PAGE.md  # Documento de requisitos funcionais
└── README.md                   # Este arquivo
```

## Como usar

1. Abra `index.html` no browser (basta dar duplo-clique)
2. Para desenvolvimento, use um servidor local:
   ```bash
   npx serve .
   ```
   > Necessário para ES Modules funcionarem corretamente via `file://`

## Stack

- **HTML5** semântico com Schema.org (Product + FAQ)
- **CSS3** vanilla com Custom Properties
- **JavaScript** ES Modules (sem dependências)
- **Fontes**: Sora, DM Sans, Playfair Display (Google Fonts)

## SEO

- Meta tags OpenGraph e Twitter Card
- Schema.org JSON-LD (Product + FAQ)
- Heading hierarchy (h1 → h2 → h3)
- Alt text em todas as imagens
- Aria-labels em elementos interativos
