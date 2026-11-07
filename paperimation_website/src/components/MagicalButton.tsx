import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface MagicalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const MagicalButton = forwardRef<HTMLButtonElement, MagicalButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "relative font-body font-semibold transition-all duration-300 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

    const variants = {
      primary:
        "bg-primary text-primary-foreground border border-primary hover:opacity-90 hover:shadow-lg active:scale-[0.98]",
      secondary:
        "bg-secondary text-foreground border border-border/30 hover:border-primary/40 hover:text-primary",
      ghost:
        "bg-transparent text-muted-foreground hover:text-primary hover:bg-primary/10",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-7 py-3.5 text-base",
      lg: "px-12 py-5 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(base, variants[variant], sizes[size], className)}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);
MagicalButton.displayName = "MagicalButton";

export default MagicalButton;
