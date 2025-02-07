import getAsset from "src/core/technical/assets";
import { iconWithClassName } from "./iconWithClassName";
import { iconWithContext } from "./iconWithContext";
import { assets } from "assets/generated";
import { FC } from "react";

export const Icon: FC<{
  src: keyof typeof assets & `icons/${string}`;
  className?: string;
}> = ({ src, ...props }) => {
  const Component = iconWithContext(iconWithClassName(getAsset(src).default));
  return <Component {...props} />;
};
export default Icon;
