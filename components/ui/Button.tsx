"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-dark hover:bg-gold-hover border border-gold shadow-lg shadow-gold/20",
  secondary:
    "bg-transparent text-white border border-white/40 hover:border-gold hover:text-gold",
  outline:
    "bg-transparent text-foreground border border-foreground/20 hover:border-gold hover:text-gold",
  ghost: "bg-transparent text-foreground hover:text-gold",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs tracking-widest",
  md: "px-7 py-3 text-sm tracking-widest",
  lg: "px-9 py-4 text-sm tracking-widest",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const classes = cn(
    "inline-flex items-center justify-center font-medium uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  const motionProps = prefersReducedMotion
    ? {}
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  if (href) {
    const isAnchor = href.startsWith("#");
    if (isAnchor) {
      return (
        <motion.a href={href} className={classes} {...motionProps}>
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
