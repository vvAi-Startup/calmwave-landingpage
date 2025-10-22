# Estrutura de Componentes - CalmWave Landing Page

## 📁 Organização dos Componentes

```
src/
├── app/
│   ├── page.js          # Página principal (orquestra os componentes)
│   ├── layout.js        # Layout base
│   └── globals.css      # Estilos globais
└── components/
    ├── index.js         # ✨ Barrel export - facilita importações
    ├── Header.js        # Cabeçalho e navegação
    ├── Hero.js          # Seção hero principal
    ├── Features.js      # Seção de recursos
    ├── FeatureCard.js   # Card individual de recurso
    ├── HowItWorks.js    # Seção "Como Funciona"
    ├── ProcessStep.js   # Step individual do processo
    ├── Benefits.js      # Seção de benefícios
    ├── BenefitCard.js   # Card individual de benefício
    ├── CTA.js           # Call-to-Action
    ├── Footer.js        # Rodapé
    ├── Logo.js          # ✨ Logo reutilizável
    └── Button.js        # ✨ Botão reutilizável
```

## 🧩 Componentes

### **Componentes de Layout**

#### 1. **Header.js**
- Navegação principal
- Usa o componente `<Logo />`
- Links de navegação (Recursos, Como Funciona, Benefícios)
- Botão CTA "Começar"

#### 2. **Footer.js**
- Links de navegação organizados
- Usa o componente `<Logo size="sm" />`
- Informações de contato
- Copyright

---

### **Componentes de Conteúdo**

#### 3. **Hero.js**
- Seção de destaque principal
- Título e subtítulo
- Botões de ação (Experimente Gratuitamente, Saiba Mais)
- Estatísticas (95% redução, 100+ escolas, 24/7 suporte)
- Ilustração com ícone de microfone

#### 4. **Features.js** + **FeatureCard.js**
- Lista os recursos principais
- **FeatureCard** - Componente reutilizável
- **Props**: `icon`, `title`, `description`, `gradient`
- Dados configuráveis via array

#### 5. **HowItWorks.js** + **ProcessStep.js**
- Explica o funcionamento em 3 passos
- **ProcessStep** - Componente reutilizável
- **Props**: `number`, `title`, `description`, `gradient`, `showLine`
- Linhas conectoras entre os passos

#### 6. **Benefits.js** + **BenefitCard.js**
- Mostra os benefícios do CalmWave
- **BenefitCard** - Componente reutilizável
- **Props**: `emoji`, `title`, `description`
- Grid responsivo

#### 7. **CTA.js**
- Call-to-action final
- Botões de conversão
- Destaque visual com gradiente

---

### **Componentes Reutilizáveis (UI)**

#### 8. **Logo.js** ✨
Componente reutilizável para o logo do CalmWave

**Props:**
- `size`: `"sm"` | `"md"` | `"lg"` (padrão: `"md"`)
- `showText`: `boolean` (padrão: `true`)

**Exemplo de uso:**
```javascript
<Logo />                    // Tamanho médio com texto
<Logo size="sm" />         // Tamanho pequeno com texto
<Logo size="lg" showText={false} />  // Grande, apenas ícone
```

#### 9. **Button.js** ✨
Componente reutilizável para botões

**Props:**
- `variant`: `"primary"` | `"secondary"` | `"outline"` | `"white"` (padrão: `"primary"`)
- `size`: `"sm"` | `"md"` | `"lg"` (padrão: `"md"`)
- `onClick`: função callback
- `className`: classes CSS adicionais
- `children`: conteúdo do botão

**Exemplo de uso:**
```javascript
<Button variant="primary" size="md">
  Começar Agora
</Button>

<Button variant="secondary" onClick={handleClick}>
  Saiba Mais
</Button>
```

---

## 📦 Barrel Export (index.js)

O arquivo `components/index.js` exporta todos os componentes de um único lugar:

```javascript
import {
  Header,
  Hero,
  Features,
  CTA,
  Footer,
  Logo,
  Button
} from '@/components';
```

**Benefícios:**
- ✅ Importações mais limpas
- ✅ Menos linhas de código
- ✅ Fácil refatoração
- ✅ Auto-complete melhorado

---

## 🎨 Padrões de Design

### Cores Principais
- **Cyan**: `#06b6d4` (cyan-500)
- **Teal**: `#14b8a6` (teal-500)
- **Gradientes**: cyan → teal

### Espaçamento
- Container: `mx-auto px-6`
- Seções: `py-20`
- Cards: `p-6` ou `p-8`

### Animações
- Hover scale: `hover:scale-105`
- Transições: `transition-all duration-300`
- Shadow: `hover:shadow-xl`

### Responsividade
- Mobile first
- Breakpoints: `sm:`, `md:`, `lg:`
- Grid adaptativos: `grid md:grid-cols-2 lg:grid-cols-4`

---

## 🔧 Como Adicionar um Novo Componente

1. **Criar o arquivo** em `/src/components/NomeDoComponente.js`
   ```javascript
   export default function NomeDoComponente({ prop1, prop2 }) {
     return (
       <div>
         {/* JSX aqui */}
       </div>
     );
   }
   ```

2. **Adicionar ao index.js**
   ```javascript
   export { default as NomeDoComponente } from './NomeDoComponente';
   ```

3. **Usar no page.js**
   ```javascript
   import { NomeDoComponente } from '@/components';
   
   <NomeDoComponente prop1="valor" prop2="valor" />
   ```

---

## 📝 Exemplos de Componentes Reutilizáveis

### Card Genérico
```javascript
export default function Card({ children, className = "" }) {
  return (
    <div className={`p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg ${className}`}>
      {children}
    </div>
  );
}
```

### Section Container
```javascript
export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-gray-600 dark:text-gray-300 text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
```

---

## 🚀 Benefícios dessa Estrutura

✅ **Manutenção Facilitada** - Cada componente em seu próprio arquivo  
✅ **Reutilização** - Cards, botões e elementos compartilhados  
✅ **Testabilidade** - Componentes isolados são mais fáceis de testar  
✅ **Escalabilidade** - Fácil adicionar novas seções  
✅ **Legibilidade** - Código mais limpo e organizado  
✅ **Colaboração** - Múltiplos desenvolvedores podem trabalhar simultaneamente  
✅ **Importações Limpas** - Barrel export simplifica importações  
✅ **Type Safety** - Melhor suporte para TypeScript no futuro  

---

## 🔄 Modificando Conteúdo

Para alterar o conteúdo, basta editar o componente correspondente:

| O que alterar | Onde editar |
|---------------|-------------|
| Textos do Hero | `Hero.js` |
| Lista de Recursos | Array em `Features.js` |
| Passos do Processo | Array em `HowItWorks.js` |
| Benefícios | Array em `Benefits.js` |
| Links do Footer | Objeto em `Footer.js` |
| Navegação | `Header.js` |
| CTA Buttons | `CTA.js` |

---

## 🎯 Próximos Passos (Opcional)

- [ ] Adicionar animações com Framer Motion
- [ ] Criar componente de Menu Mobile
- [ ] Adicionar modo de scroll suave
- [ ] Implementar lazy loading de imagens
- [ ] Adicionar testes unitários
- [ ] Converter para TypeScript
- [ ] Adicionar Storybook para documentação visual
- [ ] Implementar formulário de contato
