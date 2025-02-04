import { colors } from "@theme";
import { ActivityIndicator as RNActivityIndicator } from "react-native";
import { useColorScheme } from "src/core/technical/theme/useColorScheme";

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
