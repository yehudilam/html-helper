# Styling Approaches Migration Guide

This directory contains three different implementations of the same clock component, demonstrating how to migrate from styled-components to modern styling approaches.

## 🎯 Purpose

Show practical examples of how TailwindCSS and vanilla-extract can replace styled-components while maintaining the same visual output and functionality.

## 📁 Structure

```
styling-examples/
├── 1-styled-components/     # Original styled-components implementation
├── 2-tailwindcss/          # TailwindCSS utility-first approach
├── 3-vanilla-extract/      # Zero-runtime CSS-in-TypeScript
└── StylingComparison.tsx   # Live comparison component
```

## 🚀 Quick Start

1. **Install dependencies** (already done if following the main setup):

   ```bash
   npm install @vanilla-extract/css @vanilla-extract/vite-plugin @vanilla-extract/dynamic clsx
   ```

2. **View the comparison**:

   ```bash
   npm run dev
   # Navigate to the StylingComparison component
   ```

## 📊 Comparison Summary

| Aspect | Styled Components | TailwindCSS | Vanilla Extract |
|--------|------------------|-------------|-----------------|
| **Runtime** | ❌ Runtime CSS generation | ✅ Static CSS | ✅ Zero runtime |
| **Type Safety** | ⚠️ Limited | ❌ No types | ✅ Full TypeScript |
| **Bundle Size** | ❌ Large | ✅ Small (purged) | ✅ Small |
| **Learning Curve** | ⚠️ CSS-in-JS concepts | ⚠️ Utility classes | ⚠️ Build-time concepts |
| **Dynamic Styling** | ✅ Full JS power | ⚠️ Limited | ✅ CSS variables |
| **Developer Experience** | ✅ Great | ✅ Great | ✅ Great |

## 🎨 Migration Strategies

### From Styled Components to TailwindCSS

1. **Replace basic styles** with utility classes
2. **Extract complex logic** into components
3. **Use inline styles** for dynamic values
4. **Configure custom values** in tailwind.config.js

### From Styled Components to Vanilla Extract

1. **Move styles** to .css.ts files
2. **Use createVar()** for dynamic values
3. **Compose styles** with arrays
4. **Apply variables** with assignInlineVars()

## 🔧 Build Configuration

The project is configured with Vite and includes:

- **TailwindCSS**: Configured in `tailwind.config.js`
- **Vanilla Extract**: Plugin added to `vite.config.ts`
- **TypeScript**: Full type support for all approaches

## 📝 Key Learnings

1. **TailwindCSS** is best for rapid development and consistent design systems
2. **Vanilla Extract** offers the best performance with type safety
3. **Styled Components** remains powerful for complex dynamic styling
4. **Migration** is possible incrementally - you can mix approaches

## 🔍 See Also

- Each subdirectory contains detailed README with pros/cons
- `StylingComparison.tsx` shows all three approaches side-by-side
- The original clockface components for reference
