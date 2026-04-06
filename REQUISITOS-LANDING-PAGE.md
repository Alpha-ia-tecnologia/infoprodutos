# REQUISITOS FUNCIONAIS — Landing Page de Infoprodutos Nutricionais

---

## 1. VISÃO GERAL DO PROJETO

**Objetivo:** Landing page de alta conversão para comercialização de 3 e-books nutricionais (Guia Mounjaro/Tirzepatida, Shape Definido, Potencialize Seus Resultados), com opção de venda individual e combo.

**Público-alvo:** Homens e mulheres (25-55 anos) interessados em emagrecimento, definição muscular e uso estratégico de medicamentos/suplementos.

**Modelo de negócio:** Venda direta via plataforma de infoprodutos (Hotmart/Kiwify), com funil de vendas otimizado para tráfego pago e orgânico.

---

## 2. REQUISITOS FUNCIONAIS

### RF01 — Barra de Anúncio (Announcement Bar)
- Faixa fixa no topo com mensagem de urgência/promoção
- Indicador visual pulsante (dot animado) para chamar atenção
- Texto editável com destaque para desconto e bônus

### RF02 — Navegação Sticky
- Menu fixo no topo ao rolar (sticky header)
- Logo clicável retorna ao topo
- Links âncora para seções: Produtos, Benefícios, Resultados, Dúvidas
- CTA destacado no menu ("QUERO COMEÇAR")
- Menu hamburger responsivo para mobile
- Backdrop blur no fundo para legibilidade

### RF03 — Seção Hero (Acima da dobra)
- Badge de prova social (ex: "Método comprovado por +2.500 pessoas")
- Headline principal com destaque em gradiente dourado
- Subtítulo descritivo do produto
- Métricas de prova social (alunos, satisfação, avaliação)
- Dois CTAs: botão primário (compra) e secundário (ver produtos)
- Showcase visual com as 3 capas dos e-books em perspectiva 3D
- Badges flutuantes animados com resultados e garantias
- Fundo com gradiente escuro e efeitos radiais decorativos

### RF04 — Barra de Prova Social
- Faixa horizontal com ícones e textos de confiança
- Itens: Compra segura, Acesso imediato, Garantia 7 dias, Suporte WhatsApp

### RF05 — Seção de Problemas/Dores
- 6 cards de dores do público organizados em grid 3x2
- Cada card com ícone, título e descrição
- Efeito hover com barra vermelha no topo (indicando "problema")
- Animação de entrada (scroll reveal)

### RF06 — Seção de Produtos (Catálogo)
- 3 cards de produto em grid horizontal
- Cada card contém: imagem da capa, tag de categoria, título, descrição, lista de features com checkmarks, preço (de/por), botão de compra
- Card do produto mais vendido com destaque visual (borda dourada + badge "MAIS VENDIDO")
- Efeito hover com elevação e glow
- Fundo escuro para contraste com as capas

### RF07 — Seção Combo (Oferta Principal)
- Layout 2 colunas: visual das 3 capas + informações do combo
- Tabela de economia mostrando preço individual vs. combo
- Badge de economia (ex: "Você economiza R$ 444")
- CTA principal com preço do combo
- Informação de parcelamento
- Tag "MELHOR CUSTO-BENEFÍCIO"

### RF08 — Seção de Benefícios
- Grid 4x2 com cards de benefícios
- Cada card com ícone temático, título e descrição
- Itens: Evidências científicas, Acesso vitalício, Protocolos práticos, Suporte exclusivo, Atualizações gratuitas, Bônus, Personalização, Comunidade

### RF09 — Seção de Depoimentos
- 3 cards de depoimentos com: estrelas, citação, avatar com iniciais, nome, cidade, badge de resultado
- Layout em grid 3 colunas (1 coluna em mobile)
- Efeito hover com elevação

### RF10 — Seção de Garantia
- Card centralizado com ícone de escudo
- Texto claro sobre garantia incondicional de 7 dias
- Borda verde para transmitir segurança

### RF11 — FAQ (Perguntas Frequentes)
- Accordion com 6 perguntas/respostas
- Primeira pergunta aberta por padrão
- Animação suave de abertura/fechamento
- Ícone rotativo (+/×)
- Máximo de uma pergunta aberta por vez

### RF12 — Seção Final CTA (Urgência)
- Headline persuasivo com destaque dourado
- Contador regressivo animado (horas:minutos:segundos)
- Botão CTA principal grande com desconto
- Selos de confiança (Pagamento seguro, Acesso imediato, Garantia)
- Fundo escuro com efeito radial

### RF13 — Footer
- Logo, links legais (Termos, Privacidade, Contato)
- Disclaimer sobre caráter educacional
- Copyright e menção à plataforma de pagamento

---

## 3. REQUISITOS NÃO-FUNCIONAIS

### RNF01 — Performance
- Tempo de carregamento < 3 segundos (LCP)
- CSS inline para eliminar render-blocking
- Imagens otimizadas (WebP quando possível)
- Lazy loading para imagens abaixo da dobra

### RNF02 — Responsividade
- Breakpoints: 1024px (tablet), 768px (mobile landscape), 480px (mobile portrait)
- Menu hamburger em mobile
- Grid adaptativo (3→2→1 colunas)
- Tamanhos de fonte fluidos
- Touch targets mínimos de 44px

### RNF03 — Acessibilidade
- Contraste mínimo WCAG AA (4.5:1 para texto)
- Aria-labels em botões e elementos interativos
- Navegação por teclado no FAQ e links
- Alt text descritivo em todas as imagens

### RNF04 — SEO
- Meta tags otimizadas (title, description, og:tags)
- Estrutura semântica (h1→h2→h3)
- Schema markup para Product e FAQ
- URL amigável

### RNF05 — Tracking & Analytics
- Pixels de rastreamento: Facebook Pixel, Google Analytics 4, Google Ads
- Eventos customizados: scroll_depth, cta_click, product_view, faq_interaction
- UTM parameters parsing para atribuição

---

## 4. ESPECIFICAÇÕES DE DESIGN

### Paleta de Cores
- **Primária:** Navy (#0a1628) → Deep Blue (#0f2145) → Royal Blue (#1a3a6b)
- **Acento:** Gold (#f0b832), Cyan (#00d4ff), Green (#2ecc71)
- **Danger/Urgência:** Vermelho (#e74c3c)
- **Neutros:** Off-white (#f4f6fa), Cinzas graduais

### Tipografia
- **Display/Títulos:** Sora (800 weight) — moderna e impactante
- **Corpo/Texto:** DM Sans (400-700) — legível e profissional
- **Logo:** Playfair Display (900) — elegante e premium

### Elementos Visuais
- Border-radius consistente: 8px (small), 16px (default), 24px (large)
- Sombras em camadas para profundidade
- Gradientes para CTAs e destaques
- Background patterns sutis (SVG inline)
- Glassmorphism na navbar (backdrop-filter: blur)

### Animações
- Scroll reveal (fade-in-up) com IntersectionObserver
- Float animation nos badges do hero
- Hover effects em cards (elevação + glow)
- Countdown timer com atualização a cada segundo
- Transições suaves em todos os elementos interativos (0.3s ease)
- Pulse animation no announcement bar

---

## 5. GATILHOS MENTAIS IMPLEMENTADOS

| Gatilho | Implementação |
|---------|--------------|
| Urgência | Countdown timer + barra de anúncio |
| Escassez | "Oferta por tempo limitado" |
| Prova Social | Métricas (2.500+ alunos, 97% satisfação) + depoimentos |
| Autoridade | Badge de método comprovado + selo de especialistas |
| Reciprocidade | Bônus exclusivos + atualizações gratuitas |
| Garantia | Seção dedicada com 7 dias incondicional |
| Ancoragem de preço | Preço "de" riscado vs. preço "por" destacado |
| Economia | Badge de economia no combo (R$ 444 OFF) |

---

## 6. FLUXO DE CONVERSÃO

```
Tráfego (Ads/Orgânico)
    ↓
Barra de Anúncio (urgência)
    ↓
Hero (proposta de valor + CTA)
    ↓
Problemas (identificação com dores)
    ↓
Produtos (catálogo com preços)
    ↓
Combo (oferta principal — melhor ROI)
    ↓
Benefícios (justificativa de valor)
    ↓
Depoimentos (prova social)
    ↓
Garantia (remoção de risco)
    ↓
FAQ (remoção de objeções)
    ↓
CTA Final (urgência + decisão)
    ↓
Checkout (Hotmart/Kiwify)
```

---

## 7. INTEGRAÇÕES RECOMENDADAS

- **Pagamento:** Hotmart ou Kiwify (checkout otimizado)
- **E-mail Marketing:** ActiveCampaign ou Mailchimp (sequência pós-compra)
- **WhatsApp:** Botão flutuante + link direto no suporte
- **Analytics:** GA4 + Meta Pixel + Google Tag Manager
- **CRM:** RD Station ou HubSpot para nutrição de leads
- **Testes A/B:** Google Optimize ou VWO para otimização contínua
