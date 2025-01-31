import * as ProgressPrimitive from "@rn-primitives/progress";
import { cn } from "utils";
import * as React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string;
  }
>(({ className, value, indicatorClassName, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-background dark:bg-background-dark",
        className
      )}
      {...props}
    >
      <Indicator value={value} className={indicatorClassName} />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

function Indicator({
  value,
  className,
}: {
  value: number | undefined | null;
  className?: string;
}) {
  const progress = useDerivedValue(() => value ?? 0);

  const indicator = useAnimatedStyle(() => {
    return {
      width: withSpring(
        `${interpolate(
          progress.value,
          [0, 100],
          [1, 100],
          Extrapolation.CLAMP
        )}%`,
        { overshootClamping: true }
      ),
    };
  });

  return (
    <ProgressPrimitive.Indicator asChild>
      <Animated.View
        style={indicator}
        className={cn("h-full bg-primary dark:bg-primary-dark", className)}
      />
    </ProgressPrimitive.Indicator>
  );
}
