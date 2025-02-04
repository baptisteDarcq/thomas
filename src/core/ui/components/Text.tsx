import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { Text as RNText } from "react-native";

import { cn } from "src/core/technical/theme/cn";

const textVariants = cva("text-foreground dark:text-foreground-dark", {
  variants: {
    variant: {
      large: "text-4xl",
      title: "text-2xl",
      heading: "text-[17px] leading-6 font-semibold",
      body: "text-[17px] leading-6",
      link: "text-[16px] leading-8 text-[#0a7ea4]",
      subtitle: "text-[20px] font-bold",
      balance: "text-[60px] font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const TextClassContext = React.createContext<string | undefined>(undefined);

function Text({
  className,
  variant,
  ...props
}: React.ComponentPropsWithoutRef<typeof RNText> &
  VariantProps<typeof textVariants>) {
  const textClassName = React.useContext(TextClassContext);
  return (
    <RNText
      className={cn(textVariants({ variant }), textClassName, className)}
      {...props}
    />
  );
}

export { Text, TextClassContext, textVariants };
