# 🎨 Guia de Cores - CalmWave

Este documento centraliza todas as cores utilizadas no projeto CalmWave para facilitar edições e manutenção.

## 📋 Localização das Cores

Todas as cores estão definidas como **variáveis CSS** no arquivo:
```
src/app/globals.css
```

## 🎯 Cores Principais

### Cor de Affordance (Principal)
A cor teal é usada para todos os elementos interativos e de destaque:

```css
--primary: #14b8a6;           /* teal-500 - Cor principal */
--primary-hover: #0d9488;     /* teal-600 - Hover/Active */
--primary-light: #5eead4;     /* teal-300 - Variação clara */
--primary-bg: #f0fdfa;        /* teal-50 - Background suave */
--primary-border: #99f6e4;    /* teal-200 - Bordas */
```

**Onde é usado:**
- Botões primários
- Links no hover
- Ícones de destaque
- Badges e tags
- Indicadores de focus
- Títulos de seção (Footer)

### Background (Fundo)

```css
--background: #FEFDFA;        /* Off-white quente - Fundo principal */
--background-white: #FFFFFF;  /* Branco puro - Cards e modais */
```

**Onde é usado:**
- Fundo geral da página: `--background`
- Cards (Features, Benefits): `--background-white`
- Header backdrop: `--background` com opacity
- Footer: `--background-white`

### Cores de Texto

```css
--text-primary: #0f172a;      /* slate-900 - Títulos principais */
--text-secondary: #475569;    /* slate-600 - Texto secundário */
--text-tertiary: #64748b;     /* slate-500 - Texto terciário */
```

**Onde é usado:**
- Títulos (h1, h2, h3): `--text-primary`
- Parágrafos descritivos: `--text-secondary`
- Texto auxiliar/footer: `--text-tertiary`

### Bordas e Divisores

```css
--border-light: #e2e8f0;      /* slate-200 - Bordas suaves */
--border-medium: #cbd5e1;     /* slate-300 - Bordas visíveis */
```

**Onde é usado:**
- Separadores de seções
- Bordas de cards
- Divisor no footer

## 🧩 Cores por Componente

### Header
```css
--header-bg: rgba(254, 253, 250, 0.95);
--header-border: rgba(226, 232, 240, 0.5);
```

### Hero
```css
--hero-badge-bg: var(--primary-bg);
--hero-badge-text: #0f766e;        /* teal-700 */
--hero-badge-border: var(--primary-border);
```

### Features (Recursos)
```css
--feature-card-bg: var(--background-white);
--feature-card-hover: var(--hover-bg);
--feature-icon-bg: var(--primary-bg);
```

### Benefits (Benefícios)
```css
--benefits-bg: var(--primary);
--benefits-text: var(--background-white);
--benefits-text-secondary: #ccfbf1;  /* teal-50 mais claro */
```

### CTA (Call to Action)
```css
--cta-bg: var(--primary);
--cta-text: var(--background-white);
--cta-button-bg: var(--background-white);
--cta-button-text: var(--primary);
```

### Footer
```css
--footer-bg: var(--background-white);
--footer-text: var(--text-secondary);
--footer-heading: var(--primary);
--footer-border: var(--border-light);
```

### Menu de Acessibilidade
```css
--menu-bg: var(--background-white);
--menu-text: var(--text-primary);
--menu-button-inactive: #f1f5f9;   /* slate-100 */
--menu-button-hover: #e2e8f0;      /* slate-200 */
```

## 🔧 Como Editar as Cores

### Método 1: Editar Variáveis CSS (Recomendado)

1. Abra `src/app/globals.css`
2. Localize a seção `:root { ... }`
3. Modifique os valores hexadecimais:

```css
:root {
  /* Exemplo: Mudando para azul */
  --primary: #3b82f6;           /* blue-500 */
  --primary-hover: #2563eb;     /* blue-600 */
  --primary-light: #93c5fd;     /* blue-300 */
  --primary-bg: #eff6ff;        /* blue-50 */
  --primary-border: #bfdbfe;    /* blue-200 */
}
```

4. Salve o arquivo - as mudanças serão aplicadas automaticamente!

### Método 2: Usar Classes Utilitárias

No código dos componentes, use as classes criadas:

```jsx
// Em vez de:
<button className="bg-teal-500 hover:bg-teal-600">

// Use:
<button className="bg-primary hover:bg-primary-hover">
```

## 🎨 Paletas de Cores Sugeridas

### Opção 1: Azul Profissional
```css
--primary: #3b82f6;           /* blue-500 */
--primary-hover: #2563eb;     /* blue-600 */
```

### Opção 2: Verde Sustentável
```css
--primary: #10b981;           /* emerald-500 */
--primary-hover: #059669;     /* emerald-600 */
```

### Opção 3: Roxo Criativo
```css
--primary: #8b5cf6;           /* violet-500 */
--primary-hover: #7c3aed;     /* violet-600 */
```

### Opção 4: Laranja Vibrante
```css
--primary: #f97316;           /* orange-500 */
--primary-hover: #ea580c;     /* orange-600 */
```

### Opção 5: Rosa Moderno
```css
--primary: #ec4899;           /* pink-500 */
--primary-hover: #db2777;     /* pink-600 */
```

## 🧪 Testando Mudanças

Após alterar as cores:

1. **Verifique o contraste**: Use ferramentas como:
   - [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - Chrome DevTools > Lighthouse > Accessibility

2. **Teste os filtros de daltonismo**:
   - Use o menu de acessibilidade do site
   - Verifique se a nova cor funciona bem com todos os filtros

3. **Valide a legibilidade**:
   - Texto sobre fundo claro deve ter contraste mínimo de 4.5:1
   - Texto sobre fundo escuro (Benefits, CTA) deve ter contraste de 4.5:1

## 📝 Mapeamento Tailwind → Variáveis CSS

Para ajudar na transição, aqui está o mapeamento das classes Tailwind usadas:

| Tailwind Class | Variável CSS | Valor Hex |
|---------------|--------------|-----------|
| `bg-teal-500` | `--primary` | #14b8a6 |
| `bg-teal-600` | `--primary-hover` | #0d9488 |
| `bg-teal-50` | `--primary-bg` | #f0fdfa |
| `text-slate-900` | `--text-primary` | #0f172a |
| `text-slate-600` | `--text-secondary` | #475569 |
| `border-slate-200` | `--border-light` | #e2e8f0 |
| `bg-[#FEFDFA]` | `--background` | #FEFDFA |

## 🚨 Importante

- **Sempre teste**: Depois de mudar cores, teste em diferentes dispositivos
- **Mantenha a consistência**: Use sempre as variáveis CSS
- **Evite hardcode**: Não use cores hexadecimais diretas nos componentes
- **Acessibilidade**: Verifique o contraste de cores (WCAG AA mínimo)

## 🔍 Encontrando Usos

Para encontrar onde uma cor específica é usada:

```bash
# Buscar por variável CSS
grep -r "var(--primary)" src/

# Buscar por classe Tailwind
grep -r "bg-teal-500" src/

# Buscar por cor hexadecimal
grep -r "#14b8a6" src/
```

## 📞 Suporte

Se tiver dúvidas sobre cores ou acessibilidade:
- **Email**: design@calmwave.com.br
- **Docs**: ACCESSIBILITY.md

---

**CalmWave** - Design acessível e personalizável 🎨♿

