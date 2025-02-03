import { Text } from "core-ui";
import * as React from "react";
import { View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export function ScreenHome() {
  return (
    <GestureHandlerRootView className="flex-1">
      <ScrollView>
        <View className="px-8 py-4 justify-center align-middle flex-1 gap-y-5">
          <Text variant="title">Buttons</Text>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export default ScreenHome;
