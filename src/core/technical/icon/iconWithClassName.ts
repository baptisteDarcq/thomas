import { cssInterop } from "nativewind";

export function iconWithClassName(icon) {
  return cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
        width: true,
        height: true,
      },
    },
  });
}
