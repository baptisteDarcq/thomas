import * as SwitchPrimitives from "@rn-primitives/switch";
import * as React from "react";
import { Platform } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { cn } from "src/core/technical/theme/cn";
import { colorsByScheme } from "@theme";
import { useColorScheme } from "src/core/technical/theme/useColorScheme";

const SwitchNative = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { colorScheme } = useColorScheme();
  const translateX = useDerivedValue(() =>
    withTiming(props.checked ? 14 : 0, {
      duration: 200,
      easing: Easing.out(Easing.exp),
    })
  );

  const animatedRootStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.value,
        [0, 14],
        [
          colorsByScheme[colorScheme].background,
          colorsByScheme[colorScheme].primary,
        ]
      ),
    };
  });
  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));
  return (
    <Animated.View
      style={animatedRootStyle}
      className={cn(
        "h-8 w-[46px] rounded-full",
        props.disabled && "opacity-50"
      )}
    >
      <SwitchPrimitives.Root
        className={cn(
          "flex-row h-8 w-[46px] shrink-0 items-center rounded-full",
          className
        )}
        {...props}
        ref={ref}
      >
        <Animated.View style={animatedThumbStyle}>
          <SwitchPrimitives.Thumb
            className={"h-6 w-6 rounded-full bg-slate-700 ml-1"}
          />
        </Animated.View>
      </SwitchPrimitives.Root>
    </Animated.View>
  );
});
SwitchNative.displayName = "SwitchNative";

const Switch = Platform.select({
  default: SwitchNative,
});

export { Switch };
