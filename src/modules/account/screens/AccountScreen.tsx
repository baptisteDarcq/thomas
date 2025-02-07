import Constants from "expo-constants";
import { Image } from "expo-image";
import { View } from "react-native";
import { TransactionLink } from "../components/TransactionLink";
import getAsset from "src/core/technical/assets";
import { AspectRatio } from "src/core/ui/components/AspectRatio";
import BudgetLink from "src/modules/budget/components/BudgetLink";
import { Button } from "src/core/ui/components/Button";
import Icon from "src/core/technical/icon/Icon";

export function AccountScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <AspectRatio
        ratio={1}
        className="w-[200] rounded-lg overflow-hidden mb-20"
      >
        <Image
          source={getAsset("images/logo")}
          style={{ flex: 1 }}
          contentFit="cover"
          cachePolicy={"none"}
        />
      </AspectRatio>

      <Icon src="icons/ambulance" className="text-orange-400 w-10 h-10" />

      {Constants.expoConfig?.extra?.modules["budget"] ? (
        <BudgetLink className="mb-5" />
      ) : null}
      <TransactionLink />
    </View>
  );
}

export default AccountScreen;
