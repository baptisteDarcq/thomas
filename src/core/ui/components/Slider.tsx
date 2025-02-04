import { cn } from "src/core/technical/theme/cn";
import * as SliderPrimitives from "@rn-primitives/slider";
import * as React from "react";
import { LayoutChangeEvent, Platform, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  clamp,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const SliderNative = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitives.Root>,
  { className: string; value: number; disabled?: boolean }
>(({ className, value = 0, ...props }, ref) => {
  const offset = useSharedValue<number>(value);
  const pressed = useSharedValue<boolean>(false);
  const width = useSharedValue<number>(0);

  const onLayout = (event: LayoutChangeEvent) => {
    width.value = event.nativeEvent.layout.width;
  };
  const pan = Gesture.Pan()
    .onBegin((event) => {
      pressed.value = true;
      offset.value = clamp(event.x, 0, width.value);
    })
    .onChange((event) => {
      offset.value = clamp(event.x, 0, width.value);
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedThumbStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: offset.value,
      },
    ],
  }));

  const animatedRangeStyles = useAnimatedStyle(() => ({
    width: offset.value,
  }));

  return (
    <SliderPrimitives.Root
      className={cn("h-2 w-full mx-[12px]", className)}
      ref={ref}
      value={value}
      {...props}
    >
      <View onLayout={onLayout}>
        <GestureDetector gesture={pan}>
          <SliderPrimitives.Track className="relative h-2 w-full bg-background dark:bg-background-dark rounded-full">
            <Animated.View
              className="h-full rounded-l-full bg-primary dark:bg-primary-dark"
              style={animatedRangeStyles}
            >
              <SliderPrimitives.Range />
            </Animated.View>
            <Animated.View
              className="absolute mt-[-8px] ml-[-12px] h-6 w-6 bg-foreground dark:bg-foreground-dark border-background dark:border-background-dark border-4 rounded-full cursor-grab"
              style={animatedThumbStyles}
            >
              <SliderPrimitives.Thumb />
            </Animated.View>
          </SliderPrimitives.Track>
        </GestureDetector>
      </View>
    </SliderPrimitives.Root>
  );
});

SliderNative.displayName = "SliderNative";

const Slider = Platform.select({
  default: SliderNative,
});

export { Slider };
