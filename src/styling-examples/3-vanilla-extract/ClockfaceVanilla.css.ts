import { style, createVar } from "@vanilla-extract/css";

// Custom properties for dynamic values
export const rotationVar = createVar();
export const elementVar = createVar();

const DIMENSION = 300;

// Base styles
export const clockSquare = style({
  height: `${DIMENSION}px`,
  width: `${DIMENSION}px`,
});

export const clockBase = style([
  clockSquare,
  {
    position: "absolute",
  },
]);

export const clockBoundary = style([
  clockBase,
  {
    border: "2px solid #333",
    borderRadius: "100%",
  },
]);

export const clockFaceBackground = style([
  clockSquare,
  {
    borderRadius: "100%",
  },
]);

export const clockMarks = style({
  position: "relative",
  width: "100%",
});

export const clockMarkContainer = style([
  clockBase,
  {
    transform: `rotate(calc(${elementVar} * 30deg))`,
  },
]);

export const clockMark = style({
  margin: "auto",
  backgroundColor: "black",
});

// Variants for clock marks
export const clockMarkLarge = style([
  clockMark,
  {
    height: "24px",
    width: "6px",
  },
]);

export const clockMarkSmall = style([
  clockMark,
  {
    height: "16px",
    width: "4px",
  },
]);

export const clockHands = style([
  clockSquare,
  {
    position: "relative",
  },
]);

export const handsRect = style([
  clockBase,
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: `rotate(${rotationVar})`,
  },
]);

export const hourHand = style({
  height: "100px",
  width: "7px",
  backgroundColor: "black",
  marginBottom: "70px",
});

export const minuteHand = style({
  height: "140px",
  width: "4px",
  backgroundColor: "black",
  marginBottom: "100px",
});

export const secondHand = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "120px",
});

export const secondHandLong = style({
  height: "145px",
  width: "3px",
  backgroundColor: "red",
});

export const secondHandTip = style({
  width: "16px",
  height: "16px",
  borderRadius: "100%",
  backgroundColor: "red",
});
