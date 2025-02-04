import * as React from "react";
import * as AvatarPrimitive from "@rn-primitives/avatar";
import { cn } from "src/core/technical/theme/cn";

const AvatarPrimitiveRoot = AvatarPrimitive.Root;
const AvatarPrimitiveImage = AvatarPrimitive.Image;
const AvatarPrimitiveFallback = AvatarPrimitive.Fallback;

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitiveRoot>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitiveRoot>
>(({ className, ...props }, ref) => (
  <AvatarPrimitiveRoot
    ref={ref}
    className={cn(
      "relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitiveRoot.displayName;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitiveImage>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitiveImage>
>(({ className, ...props }, ref) => (
  <AvatarPrimitiveImage
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitiveImage.displayName;

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitiveFallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitiveFallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitiveFallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full border border-slate-300 dark:border-slate-400",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitiveFallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
