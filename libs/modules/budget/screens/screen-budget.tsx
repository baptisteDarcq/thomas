import { Text } from "core-ui";
import { View } from "react-native";

export interface ScreenBudgetProps {}

export function ScreenBudget(props: ScreenBudgetProps) {
  return (
    <View className="flex-1 justify-center items-center bg-background dark:bg-background-dark">
      <Text variant="heading">Welcome to Budget!</Text>
    </View>
  );
}

export default ScreenBudget;
