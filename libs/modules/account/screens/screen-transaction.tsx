import { useFeatureFlag } from "core-tech";
import { AspectRatio, Text, ThemeToggle } from "core-ui";
import { Link } from "expo-router";
import { Button, View } from "react-native";

export interface ScreenTransactionProps {}

export function ScreenTransaction(props: ScreenTransactionProps) {
  return (
    <View className="flex-1 justify-center items-center bg-background dark:bg-background-dark">
      <Text variant="heading">Welcome to ScreenTransaction!</Text>
    </View>
  );
}

export default ScreenTransaction;
