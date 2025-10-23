# 🔄 Exemplo: Como Usar as Variáveis CSS

Este documento mostra exemplos práticos de como usar as variáveis CSS centralizadas.

## ✅ Antes (Hardcoded) vs Depois (Variáveis CSS)

### Exemplo 1: Botão Primário

#### ❌ Antes (Não recomendado)
```jsx
<button className="bg-teal-500 hover:bg-teal-600 text-white">
  Clique aqui
</button>
```

#### ✅ Depois (Recomendado)
```jsx
<button className="bg-primary hover:bg-primary-hover text-white">
  Clique aqui
</button>
```

Ou usando style inline:
```jsx
<button 
  style={{ 
    backgroundColor: 'var(--primary)',
    color: 'var(--background-white)'
  }}
  className="hover:opacity-90"
>
  Clique aqui
</button>
```

### Exemplo 2: Card com Bordas

#### ❌ Antes
```jsx
<div className="bg-white border border-slate-200 rounded-lg">
  Conteúdo
</div>
```

#### ✅ Depois
```jsx
<div 
  style={{
    backgroundColor: 'var(--background-white)',
    borderColor: 'var(--border-light)'
  }}
  className="border rounded-lg"
>
  Conteúdo
</div>
```

### Exemplo 3: Texto com Cores Variadas

#### ❌ Antes
```jsx
<div>
  <h2 className="text-slate-900">Título</h2>
  <p className="text-slate-600">Descrição</p>
  <span className="text-slate-500">Info adicional</span>
</div>
```

#### ✅ Depois
```jsx
<div>
  <h2 style={{ color: 'var(--text-primary)' }}>Título</h2>
  <p style={{ color: 'var(--text-secondary)' }}>Descrição</p>
  <span style={{ color: 'var(--text-tertiary)' }}>Info adicional</span>
</div>
```

Ou usando classes utilitárias criadas:
```jsx
<div>
  <h2 className="text-primary-color">Título</h2>
  <p className="text-secondary">Descrição</p>
  <span className="text-tertiary">Info adicional</span>
</div>
```

## 🎯 Componentes Específicos

### Header

```jsx
export default function Header() {
  return (
    <header 
      style={{
        backgroundColor: 'var(--header-bg)',
        borderBottomColor: 'var(--header-border)'
      }}
      className="backdrop-blur-md border-b sticky top-0 z-50"
    >
      <nav>
        <a 
          href="#recursos"
          style={{ color: 'var(--text-secondary)' }}
          className="hover-primary-text"
        >
          Recursos
        </a>
      </nav>
    </header>
  );
}
```

### Hero Badge

```jsx
<span 
  style={{
    backgroundColor: 'var(--hero-badge-bg)',
    color: 'var(--hero-badge-text)',
    borderColor: 'var(--hero-badge-border)'
  }}
  className="px-4 py-2 rounded-full text-sm font-semibold border"
>
  Tecnologia Educacional Inclusiva
</span>
```

### Feature Card

```jsx
<div 
  style={{
    backgroundColor: 'var(--feature-card-bg)'
  }}
  className="rounded-xl p-6 shadow-lg hover:shadow-primary transition-all"
>
  <div 
    style={{
      backgroundColor: 'var(--feature-icon-bg)',
      color: 'var(--primary)'
    }}
    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
  >
    <Icon className="w-8 h-8" />
  </div>
  <h3 style={{ color: 'var(--text-primary)' }}>Título</h3>
  <p style={{ color: 'var(--text-secondary)' }}>Descrição</p>
</div>
```

### Benefits Section

```jsx
<section 
  style={{
    backgroundColor: 'var(--benefits-bg)',
    color: 'var(--benefits-text)'
  }}
  className="py-20"
>
  <h2 className="text-4xl font-bold mb-4">Por Que Escolher?</h2>
  <p style={{ color: 'var(--benefits-text-secondary)' }}>
    Impacto real na vida de estudantes
  </p>
</section>
```

### CTA

```jsx
<div 
  style={{ backgroundColor: 'var(--cta-bg)' }}
  className="rounded-3xl p-12 text-center shadow-2xl"
>
  <h2 style={{ color: 'var(--cta-text)' }}>
    Pronto para Transformar?
  </h2>
  
  <button 
    style={{
      backgroundColor: 'var(--cta-button-bg)',
      color: 'var(--cta-button-text)'
    }}
    className="px-8 py-4 rounded-full font-semibold"
  >
    Agende uma Demo
  </button>
  
  <button 
    style={{
      borderColor: 'var(--cta-button-border)',
      color: 'var(--cta-text)'
    }}
    className="border-2 px-8 py-4 rounded-full font-semibold"
  >
    Saiba Mais
  </button>
</div>
```

## 🎨 Mudando a Paleta Completa

Se você quiser mudar toda a paleta de cores do site:

### 1. Abra `src/app/globals.css`

### 2. Modifique as variáveis principais:

```css
:root {
  /* Exemplo: Mudando para Azul */
  --primary: #3b82f6;           /* blue-500 */
  --primary-hover: #2563eb;     /* blue-600 */
  --primary-light: #93c5fd;     /* blue-300 */
  --primary-bg: #eff6ff;        /* blue-50 */
  --primary-border: #bfdbfe;    /* blue-200 */
  
  /* Ajuste os componentes específicos se necessário */
  --hero-badge-text: #1e40af;   /* blue-800 */
  --benefits-bg: var(--primary);
  --cta-bg: var(--primary);
}
```

### 3. Salve e veja as mudanças instantaneamente!

Todos os componentes que usam `var(--primary)` serão atualizados automaticamente.

## 🔍 Inspecionando Cores no Browser

Use o DevTools para ver as variáveis CSS:

1. Abra o Chrome DevTools (F12)
2. Vá para a aba "Elements"
3. Selecione o elemento `<html>` ou `:root`
4. No painel "Styles", você verá todas as variáveis definidas
5. Você pode editar os valores diretamente para testar!

## 📊 Hierarquia de Cores

```
Nível 1: Variáveis Base
└─ --primary, --text-primary, --background

Nível 2: Variáveis de Componente
└─ --header-bg, --hero-badge-bg, --footer-heading

Nível 3: Classes Utilitárias
└─ .bg-primary, .text-primary-color, .border-primary

Nível 4: Componentes React
└─ <Button>, <FeatureCard>, <Header>
```

**Regra de ouro**: Sempre edite no Nível 1 (variáveis base) para mudanças globais!

## 🚀 Dicas Pro

1. **Use CSS Variables para temas dinâmicos**:
```jsx
function ThemeSwitcher() {
  const changeTheme = (color) => {
    document.documentElement.style.setProperty('--primary', color);
  };
  
  return (
    <div>
      <button onClick={() => changeTheme('#14b8a6')}>Teal</button>
      <button onClick={() => changeTheme('#3b82f6')}>Blue</button>
      <button onClick={() => changeTheme('#8b5cf6')}>Purple</button>
    </div>
  );
}
```

2. **Crie variantes de componentes**:
```jsx
const Button = ({ variant = 'primary' }) => {
  const styles = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--background-white)'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--primary)',
      borderColor: 'var(--primary)'
    }
  };
  
  return <button style={styles[variant]}>Clique</button>;
};
```

3. **Use hover states com variáveis**:
```css
.btn-primary {
  background-color: var(--primary);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  box-shadow: var(--shadow-primary);
}
```

## ✅ Checklist de Migração

Quando estiver convertendo um componente para usar variáveis CSS:

- [ ] Substitua cores hardcoded por variáveis CSS
- [ ] Use `var(--variavel-nome)` no style ou classes utilitárias
- [ ] Teste o componente em light mode
- [ ] Teste com filtros de daltonismo
- [ ] Verifique o contraste de cores (mínimo 4.5:1)
- [ ] Valide estados hover/focus/active
- [ ] Teste responsividade
- [ ] Documente mudanças se necessário

---

**CalmWave** - Código limpo e manutenível 🎨✨

