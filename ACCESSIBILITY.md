# ♿ Guia de Acessibilidade - CalmWave

Este documento descreve todos os recursos de acessibilidade implementados na landing page CalmWave.

## 🌐 Multilíngue (i18n)

### Idiomas Suportados
- **Português (pt)** - Idioma padrão
- **English (en)** - Totalmente traduzido

### Como Usar
1. Clique no botão de acessibilidade (canto inferior direito)
2. Na seção "Idioma / Language", escolha:
   - 🇧🇷 Português
   - 🇺🇸 English
3. Todo o conteúdo da página será atualizado instantaneamente

### Conteúdo Traduzido
- Header (navegação)
- Hero (título, descrição, botões, estatísticas)
- Features (recursos principais)
- How It Works (como funciona)
- Benefits (benefícios)
- CTA (chamada para ação)
- Footer (rodapé)
- Menu de acessibilidade

## 👁️ Filtros para Daltonismo

### Tipos de Filtros Disponíveis

#### 1. Normal
Sem filtro aplicado - visualização padrão.

#### 2. Protanopia
- **O que é**: Deficiência na percepção da cor vermelha
- **Prevalência**: ~1% dos homens
- **Efeito**: Simula a dificuldade em distinguir tons de vermelho e verde

#### 3. Deuteranopia
- **O que é**: Deficiência na percepção da cor verde
- **Prevalência**: ~1% dos homens (mais comum)
- **Efeito**: Simula a dificuldade em distinguir tons de verde e vermelho

#### 4. Tritanopia
- **O que é**: Deficiência na percepção da cor azul
- **Prevalência**: ~0.001% (muito rara)
- **Efeito**: Simula a dificuldade em distinguir tons de azul e amarelo

#### 5. Acromatopsia
- **O que é**: Visão totalmente monocromática (sem percepção de cores)
- **Prevalência**: Extremamente rara
- **Efeito**: Converte toda a página para escala de cinza

### Como Usar os Filtros
1. Abra o menu de acessibilidade
2. Na seção "Modo Daltonismo / Color Blind Mode"
3. Selecione o filtro desejado
4. O filtro será aplicado instantaneamente a todo o conteúdo visual

### Tecnologia Utilizada
Os filtros são implementados usando **SVG Color Matrix Filters** aplicados globalmente via CSS, garantindo:
- ✅ Performance otimizada
- ✅ Compatibilidade com todos os navegadores modernos
- ✅ Sem degradação da qualidade visual
- ✅ Aplicação instantânea

## ⌨️ Navegação por Teclado

### Atalhos e Funcionalidades

#### Tab
- Navega entre todos os elementos interativos
- Ordem lógica de navegação
- Focus visível com anel teal

#### Enter / Espaço
- Ativa botões e links
- Abre/fecha o menu de acessibilidade
- Seleciona opções no menu

#### Skip to Content
- Link invisível no topo da página
- Pressione `Tab` na primeira carga
- Permite pular direto para o conteúdo principal
- Útil para usuários de leitores de tela

### Indicadores de Focus
- **Cor**: Anel teal (`ring-teal-500`)
- **Espessura**: 2px
- **Offset**: 2px
- **Visibilidade**: Sempre visível durante navegação por teclado

## 🔊 ARIA e Leitores de Tela

### Implementações

#### Landmarks (Regiões)
```html
<header role="banner">           <!-- Cabeçalho -->
<nav role="navigation">          <!-- Navegação -->
<main role="main">               <!-- Conteúdo principal -->
<section role="region">          <!-- Seções -->
<footer role="contentinfo">      <!-- Rodapé -->
```

#### Labels Descritivos
- Todos os botões possuem `aria-label`
- Ícones decorativos marcados com `aria-hidden="true"`
- Links com descrições contextuais

#### Estados Dinâmicos
- `aria-expanded` para menus expansíveis
- `aria-current` para navegação ativa
- Labels dinâmicos baseados no idioma selecionado

## 💾 Persistência de Preferências

### localStorage
As preferências do usuário são salvas automaticamente:

```javascript
// Idioma selecionado
localStorage.setItem('language', 'pt' | 'en')

// Filtro de daltonismo
localStorage.setItem('colorBlindMode', 'none' | 'protanopia' | ...)
```

### Restauração Automática
- Ao retornar ao site, as preferências são restauradas
- Funciona mesmo após fechar o navegador
- Específico por domínio/site

## 🎨 Design Inclusivo

### Contraste de Cores
- **Background**: #FEFDFA (off-white quente)
- **Texto Principal**: slate-900 (quase preto)
- **Affordances**: teal-500 (verde-azulado)
- **Contraste**: Sempre acima de 4.5:1 (WCAG AA)

### Tipografia
- **Fonte Principal**: Geist Sans (legível)
- **Tamanhos**: Responsivos e escaláveis
- **Line Height**: Espaçamento confortável (1.5-1.75)
- **Letter Spacing**: Otimizado para leitura

### Espaçamento
- Áreas de clique/toque mínimas: 44x44px
- Espaçamento generoso entre elementos
- Hierarquia visual clara

## 🧪 Testes de Acessibilidade

### Checklist de Conformidade

- ✅ WCAG 2.1 Level AA
- ✅ Navegação 100% por teclado
- ✅ Compatível com leitores de tela
- ✅ Contraste de cores adequado
- ✅ Texto alternativo em imagens/ícones
- ✅ Formulários com labels apropriados
- ✅ Skip links implementados
- ✅ Landmarks semânticos
- ✅ Estados de focus visíveis
- ✅ Suporte a múltiplos idiomas
- ✅ Filtros para daltonismo

### Ferramentas Recomendadas para Testes

1. **Lighthouse** (Chrome DevTools)
   - Auditorias de acessibilidade
   - Métricas de performance

2. **WAVE** (Web Accessibility Evaluation Tool)
   - Análise visual de problemas
   - Identifica erros WCAG

3. **axe DevTools**
   - Extensão para Chrome/Firefox
   - Testes automatizados completos

4. **Screen Readers**
   - **NVDA** (Windows - gratuito)
   - **JAWS** (Windows)
   - **VoiceOver** (macOS/iOS - nativo)

## 📱 Responsividade

A acessibilidade é mantida em todos os tamanhos de tela:

- **Mobile**: Touch targets apropriados (44px mínimo)
- **Tablet**: Layout adaptativo
- **Desktop**: Navegação otimizada por teclado

## 🚀 Próximas Melhorias

Funcionalidades planejadas para o futuro:

- [ ] Mais idiomas (Espanhol, Francês)
- [ ] Ajuste de tamanho de fonte
- [ ] Modo de alto contraste adicional
- [ ] Animações reduzidas (prefers-reduced-motion)
- [ ] Suporte a temas personalizados
- [ ] Modo de leitura simplificada

## 📞 Suporte

Se você encontrar algum problema de acessibilidade ou tiver sugestões:

- **Email**: acessibilidade@calmwave.com.br
- **Issue Tracker**: [GitHub Issues](#)
- **Feedback**: Use o formulário de contato no site

---

**CalmWave** - Comprometidos com a inclusão digital para todos 🌊♿

