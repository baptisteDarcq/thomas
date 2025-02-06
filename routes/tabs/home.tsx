import * as React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AccountBalance from "src/modules/account/components/AccountBalance";
import Constants from "expo-constants";
import BudgetDescription from "src/modules/budget/components/BudgetDescription";
import { Text } from "src/core/ui/components/Text";

export function ScreenHome() {
  return (
    <GestureHandlerRootView className="flex-1">
      <View className="justify-center align-middle flex-1 px-6 gap-y-10">
        <Text className="font-primary-light">font-primary-light</Text>
        <Text className="font-primary-regular">font-primary-regular</Text>
        <Text className="font-primary-bold">font-primary-bold</Text>
        <Text className="font-secondary-light">font-secondary-light</Text>
        <Text className="font-secondary-regular">font-secondary-regular</Text>
        <Text className="font-secondary-bold">font-secondary-bold</Text>
        <AccountBalance />
        {Constants.expoConfig?.extra?.modules?.includes("budget") ? (
          <BudgetDescription />
        ) : null}
      </View>
    </GestureHandlerRootView>
  );
}

export default ScreenHome;
