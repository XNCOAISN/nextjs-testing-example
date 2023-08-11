import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const name = style({
  fontSize: 20,
  fontWeight: "bold",
});

export const description = style({
  color: "#aaa",
});
