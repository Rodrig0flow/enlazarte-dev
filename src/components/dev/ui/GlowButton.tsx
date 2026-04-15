import Link from "next/link";

interface GlowButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

export function GlowButton({
  href,
  onClick,
  children,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
  external = false,
}: GlowButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-xl transition-all duration-300";

  const variants = {
    primary:
      "bg-[#00B4D8] text-black hover:bg-[#00C4E8] shadow-[0_0_20px_rgba(0,180,216,0.5)] hover:shadow-[0_0_30px_rgba(0,180,216,0.7)]",
    secondary:
      "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";
  const classes = `${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ""} ${className}`;

  if (href && !disabled) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
