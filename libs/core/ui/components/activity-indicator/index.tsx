import { colors } from "@theme";
import { useColorScheme } from "core-tech";
import { ActivityIndicator as RNActivityIndicator } from "react-native";

function ActivityIndicator(
  props: React.ComponentPropsWithoutRef<typeof RNActivityIndicator>
) {
  const { isDarkColorScheme } = useColorScheme();
  return (
    <RNActivityIndicator
      color={isDarkColorScheme ? colors.white : colors.black}
      {...props}
    />
  );
}

export { ActivityIndicator };
