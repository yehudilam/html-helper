# Styled Components Implementation

This folder demonstrates the traditional styled-components approach used in the original clock component.

## Files

- `ClockfaceStyled.tsx` - React component using styled components
- `ClockfaceStyled.styled.tsx` - Styled component definitions

## Key Features

### 1. **CSS-in-JS with Props**

```tsx
export const ClockMark = styled.div<ClockMarkProps>`
  height: ${props => props.element % 3 === 0 ? '24px' : '16px'};
  width: ${props => props.element % 3 === 0 ? '6px' : '4px'};
  margin: auto;
  background-color: black;
`;
```

### 2. **Dynamic Styling**

```tsx
export const HandsRect = styled(ClockBase)<HandsReact>`
  transform: rotate(${props => props.rotation ?? 0}deg);
`;
```

### 3. **Component Composition**

```tsx
export const ClockBase = styled(ClockSqure)`
  position: absolute;
`;
```

## Pros

- **Full JavaScript Power**: Can use any JavaScript logic for styling
- **Dynamic Props**: Easy to pass data and create conditional styles
- **Scoped Styles**: Automatically generates unique class names
- **Theme Support**: Built-in theming with ThemeProvider
- **CSS-in-JS**: No separate CSS files to manage

## Cons

- **Runtime Cost**: Styles are generated at runtime
- **Bundle Size**: Larger bundle due to the styled-components library
- **Learning Curve**: Need to learn CSS-in-JS patterns
- **Performance**: Can have performance implications with many dynamic components

## When to Use

- Need complex dynamic styling logic
- Building a component library with theming
- Team is comfortable with CSS-in-JS
- Don't mind runtime style generation
