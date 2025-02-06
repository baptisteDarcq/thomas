import { assets as appAssets } from "@assets";
import { assets as commonAssets } from "assets/generated";
export const getAsset = (
  name: keyof typeof appAssets | keyof typeof commonAssets
) => {
  return appAssets[name] || commonAssets[name];
};

export default getAsset;
