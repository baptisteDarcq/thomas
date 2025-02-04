import { AspectRatio } from "core-ui";
import Constants from "expo-constants";
import { Image } from "expo-image";
import { BudgetLink } from "feat-budget";
import { View } from "react-native";
import { TransactionLink } from "../components/transaction-link";
import getAsset from "src/get-asset";

export interface ScreenAccountProps {}

export function ScreenAccount(props: ScreenAccountProps) {
  return (
    <View className="flex-1 justify-center items-center">
      <AspectRatio
        ratio={1}
        className="w-[200] rounded-lg overflow-hidden mb-20"
      >
        <Image
          source={getAsset("logo")}
          style={{ flex: 1 }}
          contentFit="cover"
          cachePolicy={"none"}
        />
      </AspectRatio>

      {Constants.expoConfig.extra?.modules["budget"] ? (
        <BudgetLink className="mb-5" />
      ) : null}
      <TransactionLink />
    </View>
  );
}

export default ScreenAccount;
