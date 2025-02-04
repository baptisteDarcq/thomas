import * as React from "react";
import { TextInput } from "react-native";
import { cn } from "src/core/technical/theme/cn";

const Input = React.forwardRef<
  React.ComponentRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput>
>(({ className, placeholderClassName, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      className={cn(
        "h-12 rounded-md border border-foreground dark:border-0 bg-background dark:bg-background-dark px-3 text-lg leading-[1.25] text-foreground file:border-0 file:bg-transparent file:font-medium",
        props.editable === false && "opacity-50",
        className
      )}
      placeholderClassName={cn(
        "text-foreground dark:text-foreground-dark",
        placeholderClassName
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
