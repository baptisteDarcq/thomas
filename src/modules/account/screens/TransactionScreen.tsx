import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Button } from "src/core/ui/components/Button";
import { Text } from "src/core/ui/components/Text";

export function TransactionScreen() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 justify-center items-center">
      <Link href="../" asChild>
        <Button variant="default">
          <Text variant="large">{t("account.subtitle")}</Text>
        </Button>
      </Link>
    </View>
  );
}

export default TransactionScreen;
