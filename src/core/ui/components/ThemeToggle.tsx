import { Pressable, View } from "react-native";
import Animated, {
  LayoutAnimationConfig,
  ZoomInRotate,
} from "react-native-reanimated";

import { cn } from "src/core/technical/theme/cn";
import { colors } from "@theme";
import { useColorScheme } from "src/core/technical/theme/useColorScheme";
import Icon from "src/core/technical/icon/Icon";

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <LayoutAnimationConfig skipEntering>
      <Animated.View
        className="items-center justify-center"
        key={"toggle-" + colorScheme}
        entering={ZoomInRotate}
      >
        <Pressable
          onPress={() => {
            setColorScheme(colorScheme === "dark" ? "light" : "dark");
          }}
          className="opacity-80"
        >
          {colorScheme === "dark"
            ? ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Icon src="icons/sun" className="text-white" />
                </View>
              )
            : ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Icon src="icons/moon" className="text-white" />
                </View>
              )}
        </Pressable>
      </Animated.View>
    </LayoutAnimationConfig>
  );
}
