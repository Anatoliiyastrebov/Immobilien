import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function GlassCard({ children, className, dark = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-sm p-6 md:p-8",
        dark ? "glass" : "glass-light shadow-2xl shadow-black/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
