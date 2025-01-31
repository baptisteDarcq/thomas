import * as React from "react";
import * as TabsPrimitive from "@rn-primitives/tabs";
import { cn } from "utils";
import { TextClassContext } from "../text";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "h-12 items-center justify-center rounded-md bg-background dark:bg-background-dark px-1.5",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { value } = TabsPrimitive.useRootContext();
  return (
    <TextClassContext.Provider
      value={cn(
        "text-base font-medium text-foreground dark:text-foreground-dark",
        value === props.value && "font-semibold"
      )}
    >
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
          "items-center justify-center shadow-none rounded-sm px-3 py-1.5 text-sm font-medium",
          props.disabled && "opacity-50",
          className
        )}
        {...props}
      />
    </TextClassContext.Provider>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = TabsPrimitive.Content;

export { Tabs, TabsContent, TabsList, TabsTrigger };
