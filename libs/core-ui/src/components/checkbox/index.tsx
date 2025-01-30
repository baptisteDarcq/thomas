import { cn } from "utils";
import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { Check } from "../../assets/icons/Check";

const checkboxVariants = cva(
  "shrink-0 rounded bg-background dark:bg-background-dark disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-5 w-5 mx-3",
        lg: "h-8 w-8 mx-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const checkboxIconVariants = cva("", {
  variants: {
    size: {
      default: "h-3 w-3",
      lg: "h-5 w-5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkboxVariants>
>(({ className, size, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        checkboxVariants({ size, className }),
        props.checked && "bg-primary"
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex w-full h-full items-center justify-center">
        <Check className={cn(checkboxIconVariants({ size }))} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
