import { createContext, PropsWithChildren, useContext } from "react";
export enum EnumFeaturesFlag {
  account,
  budget,
}
const FeatureFlagContext = createContext<(keyof typeof EnumFeaturesFlag)[]>([]);

export const FeatureFlagProvider = ({
  features,
  children,
}: PropsWithChildren & { features: (keyof typeof EnumFeaturesFlag)[] }) => {
  return (
    <FeatureFlagContext.Provider value={features}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlag = () => {
  return useContext(FeatureFlagContext);
};
