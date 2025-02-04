import { Link } from "expo-router";
import { View } from "react-native";
import { Button } from "src/core/ui/components/Button";
import { Text } from "src/core/ui/components/Text";

export function TransactionScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Link href="../" asChild>
        <Button variant="default">
          <Text variant="large">Retour</Text>
        </Button>
      </Link>
    </View>
  );
}

export default TransactionScreen;
