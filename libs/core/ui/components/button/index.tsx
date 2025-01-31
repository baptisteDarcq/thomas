import { cn } from "utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Pressable } from "react-native";
import { IconClassContext } from "../icon";
import { TextClassContext } from "../text";

const buttonVariants = cva(
  "group flex flex-row items-center justify-center rounded-md gap-x-3",
  {
    variants: {
      variant: {
        default: "bg-background dark:bg-background-dark",
        outline:
          "border border-foreground active:border-black dark:border-foreground-dark active:dark:border-white",
      },
      size: {
        default: "h-12 px-5 py-3",
        thick: "h-12 px-5 py-3 self-start",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-base font-medium", {
  variants: {
    variant: {
      default:
        "text-foreground dark:text-foreground-dark group-active:text-foreground-active group-active:dark:text-foreground-active-dark",
      outline:
        "text-foreground dark:text-foreground-dark group-active:text-foreground-active group-active:dark:text-white",
    },
    size: {
      default: "",
      thick: "",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const buttonIconVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-foreground dark:text-foreground-dark group-active:text-black group-active:dark:text-foreground-active-dark",
      outline:
        "text-foreground dark:text-foreground-dark group-active:text-foreground-active group-active:dark:text-white",
    },
    size: {
      default: "h-5 w-5",
      thick: "h-5 w-5",
      icon: "h-6 w-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <TextClassContext.Provider
      value={cn(buttonTextVariants({ variant, size }))}
    >
      <IconClassContext.Provider
        value={cn(buttonIconVariants({ variant, size }))}
      >
        <Pressable
          className={cn(
            props.disabled && "opacity-50",
            buttonVariants({ variant, size, className })
          )}
          ref={ref}
          role="button"
          {...props}
        />
      </IconClassContext.Provider>
    </TextClassContext.Provider>
  );
});
Button.displayName = "Button";

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
