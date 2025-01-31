import { requireAsset, useColorScheme, useFeatureFlag } from "core-tech";
import { AspectRatio, Text, ThemeToggle } from "core-ui";
import { TransactionLink } from "../components/transaction-link";
import { Link } from "expo-router";
import { Button, View } from "react-native";
import { Image } from "expo-image";

// We need to find a cleaner way to handle fallback on require failure
let asset;
try {
  asset = require("@assets/images/logo.png");
} catch (error) {
  asset = require("/assets/images/logo.png");
}

export interface ScreenAccountProps {}

export function ScreenAccount(props: ScreenAccountProps) {
  const featuresAvailable = useFeatureFlag();

  return (
    <View className="flex-1 justify-center items-center bg-background dark:bg-background-dark">
      <ThemeToggle />
      <Text variant="heading" className="text-primary dark:text-primary-dark">
        Welcome to ScreenAccount!
      </Text>

      <AspectRatio ratio={16 / 9} className="w-[200]">
        <Image
          source={asset}
          style={{ flex: 1 }}
          contentFit="cover"
          cachePolicy={"none"}
        />
      </AspectRatio>
      {featuresAvailable.includes("budget") ? (
        <Link href="./budget" asChild>
          <Button title="Go to Budget tab" />
        </Link>
      ) : null}
      <TransactionLink />
    </View>
  );
}

export default ScreenAccount;
