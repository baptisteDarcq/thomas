import { cn } from "utils";
import * as SelectPrimitive from "@rn-primitives/select";
import * as React from "react";
import { Pressable, ScrollView, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Check } from "../../assets/icons/Check";
import { ChevronDown } from "../../assets/icons/ChevronDown";

type Option = SelectPrimitive.Option;

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Value>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Value
    ref={ref}
    className={cn(
      "text-foreground dark:text-foreground-dark text-lg",
      className
    )}
    {...props}
  />
));
SelectValue.displayName = SelectPrimitive.Value.displayName;

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof Pressable> & {
    children: React.ReactNode;
  }
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex flex-row h-12 items-center text-sm justify-between rounded-md bg-background dark:bg-background-dark px-3 py-2",
      props.disabled && "opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown
      size={16}
      aria-hidden={true}
      className="text-foreground dark:text-foreground-dark"
    />
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    portalHost?: string;
    margin?: string;
  }
>(({ className, margin, children, portalHost, ...props }, ref) => {
  const { open } = SelectPrimitive.useRootContext();

  return (
    <SelectPrimitive.Portal hostName={portalHost}>
      <SelectPrimitive.Overlay className="bg-black/50 absolute top-0 right-0 left-0 bottom-0">
        <Animated.View entering={FadeIn} exiting={FadeOut} className={margin}>
          <SelectPrimitive.Content
            ref={ref}
            className={cn(
              "relative z-50 max-h-60 min-w-[8rem] rounded-md bg-background dark:bg-background-dark shadow-md shadow-foreground/10 py-2 px-1",
              className
            )}
            position="popper"
            {...props}
          >
            <SelectPrimitive.Viewport className={cn("p-1")}>
              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </Animated.View>
      </SelectPrimitive.Overlay>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "py-1.5 pb-2 pl-10 pr-2 text-foreground dark:text-foreground-dark text-lg font-bold",
      className
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex flex-row w-full items-center rounded-sm py-2 pl-10 pr-2 active:bg-black/10 dark:active:bg-white/10",
      props.disabled && "opacity-50",
      className
    )}
    {...props}
  >
    <View className="absolute left-3.5 flex h-3.5 pt-px w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check
          size={16}
          strokeWidth={3}
          className="text-foreground dark:text-foreground-dark"
        />
      </SelectPrimitive.ItemIndicator>
    </View>
    <SelectPrimitive.ItemText className="text-lg text-foreground dark:text-foreground-dark" />
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-slate-400", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  type Option,
};
