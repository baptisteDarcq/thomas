import { View } from "react-native";
import { Text } from "src/core/ui/components/Text";

export function BudgetDescription() {
  return (
    <View className="flex items-center bg-background py-4 px-6 rounded-xl">
      <Text variant="heading" className="text-black dark:text-black">
        Budget Component
      </Text>
      <Text className="text-slate-500 dark:text-slate-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text>
    </View>
  );
}

export default BudgetDescription;
