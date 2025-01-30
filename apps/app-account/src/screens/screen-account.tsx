import { useFeatureFlag } from "core-tech";
import { AspectRatio, Text, ThemeToggle } from "core-ui";
import { TransactionLink } from "feat-account";
import { Link } from "expo-router";
import { Button, View } from "react-native";

/* eslint-disable-next-line */
export interface ScreenAccountProps {}

export function ScreenAccount(props: ScreenAccountProps) {
  const featuresAvailable = useFeatureFlag();
  // const theme = useTheme();
  return (
    <View className="flex-1 justify-center items-center bg-background dark:bg-background-dark">
      {/* <Logo /> */}
      <ThemeToggle />
      <Text variant="heading">Welcome to ScreenAccount!</Text>

      {featuresAvailable.includes("budget") ? (
        <Link href="./budget" asChild>
          <Button title="Go to Budget tab" />
        </Link>
      ) : null}

      <AspectRatio ratio={16 / 9} className="w-[200]">
        <View className="bg-primary dark:bg-primary-dark h-full w-full rounded-lg justify-center items-center">
          <Text
            variant="title"
            className="text-foreground dark:text-foreground-dark"
          >
            16:9
          </Text>
        </View>
      </AspectRatio>

      <TransactionLink />
    </View>
  );
}

export default ScreenAccount;
