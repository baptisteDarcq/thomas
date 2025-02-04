import { assets as appAssets } from "@assets";
import { assets as commonAssets } from "../assets/generatedAssetsMap";
export const getAsset = (name: string) => {
  return appAssets[name] || commonAssets[name];
};

export default getAsset;
