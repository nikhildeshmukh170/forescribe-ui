"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  ariaLabel?: string;
};

export default function Button({
  text,
  icon,
  isActive = false,
  isLoading = false,
  onClick,
  disabled = false,
  href,
  ariaLabel,
}: ButtonProps) {
  const baseClass = `
    relative overflow-hidden rounded-lg px-16 py-3 flex justify-center items-center
    transition-all duration-300 cursor-pointer
    ${isActive ? "bg-purple-600" : "bg-[#4A4A4A] "}
    ${disabled ? "opacity-70 cursor-not-allowed" : "hover:bg-[#4a4a4aa7]"}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={baseClass}
        onClick={onClick}
        aria-label={ariaLabel || text}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon}
            <span>{text}</span>
          </>
        )}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      aria-label={ariaLabel || text}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-3 text-white text-[16px]"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon}
            <span>{text}</span>
          </>
        )}
      </motion.div>
    </button>
  );
}