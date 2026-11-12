import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "editorial" | "filterPill";

const variantClasses: Record<ButtonVariant, string> = {
  editorial:
    "inline-flex items-center gap-2 rounded-full border border-caramel px-5 py-2.5 accent-link transition-colors hover:bg-camel-wash",
  filterPill:
    "label-pill cursor-pointer transition-colors hover:border-caramel hover:text-foreground aria-pressed:border-caramel aria-pressed:bg-camel-wash aria-pressed:text-foreground",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "editorial", asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : (type ?? "button")}
        className={cn(variantClasses[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
