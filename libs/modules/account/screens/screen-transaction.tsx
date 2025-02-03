import { Button, ChevronDown, Text } from "core-ui";
import { Link } from "expo-router";
import { ChevronUp } from "lucide-react-native";
import { View } from "react-native";

export interface ScreenTransactionProps {}

export function ScreenTransaction(props: ScreenTransactionProps) {
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

export default ScreenTransaction;
