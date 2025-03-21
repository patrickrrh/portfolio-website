import React from "react";
import Link from "next/link";
import FramerMagnetic from "../FramerMagnetic";

export default function MagneticButton({ 
  size = "md", 
  text = "Button", 
  icon, 
  iconPosition = "left", 
  variant = "filled",
  rounded = "lg",
  link,
  onClick,
  disabled
}) {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg"
  };

  const flexDirection = iconPosition === "top" 
    ? "flex-col" 
    : iconPosition === "bottom" 
    ? "flex-col-reverse" 
    : "flex-row";

  const variantClasses = variant === "outlined" 
    ? "border-2 border-primary text-primary bg-transparent" 
    : "bg-primary text-white";

  const buttonContent = (
    <button 
      className={`inline-flex ${flexDirection} cursor-pointer rounded-${rounded} items-center gap-2 ${sizeClasses[size]} ${variantClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (iconPosition === "left" || iconPosition === "top") && <span className="w-5 h-5">{icon}</span>}
      {text}
      {icon && (iconPosition === "right" || iconPosition === "bottom") && <span className="w-5 h-5">{icon}</span>}
    </button>
  );

  const isInternal = link?.startsWith("/");

  return (
    <FramerMagnetic>
      {link ? (
        isInternal ? (
          <Link href={link}>
            {buttonContent}
          </Link>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {buttonContent}
          </a>
        )
      ) : (
        buttonContent
      )}
    </FramerMagnetic>
  );
}
