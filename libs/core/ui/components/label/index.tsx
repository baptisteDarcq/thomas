import * as LabelPrimitive from "@rn-primitives/label";
import * as React from "react";
import { cn } from "utils";

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Text>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Text>
>(
  (
    { className, onPress, onLongPress, onPressIn, onPressOut, ...props },
    ref
  ) => (
    <LabelPrimitive.Root
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <LabelPrimitive.Text
        ref={ref}
        className={cn(
          "text-base text-foreground dark:text-foreground-dark font-medium leading-none",
          className
        )}
        {...props}
      />
    </LabelPrimitive.Root>
  )
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
