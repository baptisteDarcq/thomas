import * as React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AccountBalance from "src/modules/account/components/AccountBalance";
import Constants from "expo-constants";
import BudgetDescription from "src/modules/budget/components/BudgetDescription";

export function ScreenHome() {
  return (
    <GestureHandlerRootView className="flex-1">
      <View className="justify-center align-middle flex-1 px-6 gap-y-10">
        <AccountBalance />
        {Constants.expoConfig.extra.modules?.includes("budget") ? (
          <BudgetDescription />
        ) : null}
      </View>
    </GestureHandlerRootView>
  );
}

export default ScreenHome;
