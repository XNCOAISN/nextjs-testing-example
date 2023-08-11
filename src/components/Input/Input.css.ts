import { style } from "@vanilla-extract/css";

export const input = style({
  display: "block",
  width: "100%",
  borderRadius: "0.25rem",
  border: "1px solid #000",
  padding: "0.375rem 0.5rem",
  color: "#000",
  fontSize: "0.875rem",
  lineHeight: "1.5rem",
  height: "2.5rem",
  boxShadow: "0 0 0 1px #000, #000",
  ":focus": {
    outline: "none",
    borderColor: "rgb(25, 113, 194)",
  },
  "::placeholder": {
    color: "#aaa",
  },
});
