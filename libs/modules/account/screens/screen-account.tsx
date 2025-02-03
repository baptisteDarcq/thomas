import { useFeatureFlag } from "core-tech";
import { AspectRatio, Button, Text } from "core-ui";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View } from "react-native";
import { TransactionLink } from "../components/transaction-link";

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
    <View className="flex-1 justify-center items-center">
      <AspectRatio
        ratio={1}
        className="w-[200] rounded-lg overflow-hidden mb-20"
      >
        <Image
          source={asset}
          style={{ flex: 1 }}
          contentFit="cover"
          cachePolicy={"none"}
        />
      </AspectRatio>

      {featuresAvailable.includes("budget") ? (
        <Link href="./budget" asChild>
          <Button variant="outline" className="grow">
            <Text>Lien vers la tab budget</Text>
          </Button>
        </Link>
      ) : null}
      <TransactionLink />
    </View>
  );
}

export default ScreenAccount;
