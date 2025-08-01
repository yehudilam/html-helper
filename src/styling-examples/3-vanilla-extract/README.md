# Vanilla Extract Implementation

This folder demonstrates the zero-runtime CSS-in-TypeScript approach using vanilla-extract.

## Files

- `ClockfaceVanilla.tsx` - React component using vanilla-extract styles
- `ClockfaceVanilla.css.ts` - Type-safe CSS definitions

## Key Features

### 1. **Type-Safe CSS Variables**

```typescript
export const rotationVar = createVar();
export const elementVar = createVar();

export const handsRect = style([clockBase, {
  transform: `rotate(${rotationVar})`,
}]);
```

### 2. **Style Composition**

```typescript
export const clockBase = style([clockSquare, {
  position: 'absolute',
}]);

export const clockBoundary = style([clockBase, {
  border: '2px solid #333',
  borderRadius: '100%',
}]);
```

### 3. **Runtime CSS Variable Assignment**

```tsx
import { assignInlineVars } from '@vanilla-extract/dynamic';

<div
  className={styles.handsRect}
  style={assignInlineVars({
    [styles.rotationVar]: `${rotation}deg`
  })}
>
```

### 4. **Conditional Styles with Variants**

```typescript
export const clockMarkLarge = style([clockMark, {
  height: '24px',
  width: '6px',
}]);

export const clockMarkSmall = style([clockMark, {
  height: '16px',
  width: '4px',
}]);
```

## Build Configuration (vite.config.ts)

```typescript
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin()
  ],
});
```

## Pros

- **Zero Runtime**: CSS is extracted at build time
- **Type Safety**: Full TypeScript support for styles
- **Performance**: No runtime style generation
- **CSS Variables**: Dynamic values via CSS custom properties
- **Modern CSS**: Supports all modern CSS features
- **Framework Agnostic**: Can be used with any framework

## Cons

- **Build Setup**: Requires build-time compilation
- **Learning Curve**: Different from traditional CSS-in-JS
- **Newer Ecosystem**: Less community resources than established solutions
- **Complexity**: More complex setup than plain CSS

## When to Use

- Performance is critical
- Want type-safe styles without runtime cost
- Building modern applications with build tools
- Need dynamic styling with CSS variables
- Team values type safety across the entire stack
