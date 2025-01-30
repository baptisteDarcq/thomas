import * as React from "react";

import { LucideProps } from "lucide-react-native";

import { cn } from "utils";
import { cva, VariantProps } from "class-variance-authority";

const iconVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const IconClassContext = React.createContext<string | undefined>(undefined);

const iconWithContext = (
  Component: React.ComponentType<
    LucideProps & { readonly className?: string | undefined }
  >
) => {
  return ({
    variant,
    className,
    ...props
  }: LucideProps & {
    readonly className?: string | undefined;
  } & VariantProps<typeof iconVariants>) => {
    const iconClassName = React.useContext(IconClassContext);
    return (
      <Component
        className={cn(iconVariants({ variant }), iconClassName, className)}
        {...props}
      />
    );
  };
};

export { IconClassContext, iconWithContext };
