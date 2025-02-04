import { View } from "react-native";
import { Text } from "src/core/ui/components/Text";

export function AccountBalance() {
  return (
    <View className="flex items-center bg-background py-4 px-6 rounded-xl">
      <Text variant="heading" className="text-black dark:text-black">
        Account component
      </Text>
      <Text variant="balance" className="text-black dark:text-black">
        2603€
      </Text>
    </View>
  );
}

export default AccountBalance;
