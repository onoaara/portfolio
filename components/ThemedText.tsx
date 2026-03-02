import React from "react";

type Variant = "title" | "subtitle" | "lead" | "body" | "caption" | "overline";
type Tone = "default" | "muted" | "primary" | "invert";
type Weight = "normal" | "medium" | "semibold" | "bold";

type Props<T extends React.ElementType> = {
  as?: T;
  variant?: Variant;
  tone?: Tone;
  weight?: Weight;
  align?: "left" | "center" | "right";
  gradient?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

function clsx(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

function variantToClasses(variant: Variant): string {
  switch (variant) {
    case "title":
      return "text-4xl md:text-5xl tracking-tight";
    case "subtitle":
      return "text-2xl md:text-3xl tracking-tight";
    case "lead":
      return "text-lg md:text-xl";
    case "caption":
      return "text-xs uppercase tracking-wide";
    case "overline":
      return "text-[11px] uppercase tracking-widest";
    default:
      return "text-base";
  }
}

function toneToClasses(tone: Tone, gradient: boolean): string {
  if (gradient && (tone === "primary" || tone === "invert")) {
    const base = "bg-gradient-to-r bg-clip-text text-transparent";
    if (tone === "invert") {
      return clsx(base, "from-neutral-100 via-white to-neutral-200");
    }
    return clsx(base, "from-primary/80 via-primary to-primaryLight");
  }
  switch (tone) {
    case "muted":
      return "text-neutral-500";
    case "primary":
      return "text-primary";
    case "invert":
      return "text-white";
    default:
      return "text-foreground";
  }
}

function weightToClasses(weight: Weight): string {
  switch (weight) {
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    default:
      return "font-normal";
  }
}

export default function ThemedText<T extends React.ElementType = "p">({
  as,
  variant = "body",
  tone = "default",
  weight = "normal",
  align = "left",
  gradient = false,
  className,
  children,
  ...rest
}: Props<T>) {
  const Component = (as ||
    (variant === "title" ? "h1" : "p")) as React.ElementType;
  const classes = clsx(
    variantToClasses(variant),
    toneToClasses(tone, gradient),
    weightToClasses(weight),
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right"
        : "text-left",
    className,
  );
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
