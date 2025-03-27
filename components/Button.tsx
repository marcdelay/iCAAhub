"use client";

import { twMerge as tm } from "tailwind-merge";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
children: React.ReactNode
}

export default function Button({ className, onClick, children, ...props }: ButtonProps) {
  

  return (
    <button
    // Here i use tailwind-merge to merge the tailwind classes
     className={tm(
        "btn btn-accent btn-soft btn-outline btn-ghost",
        className,
        )}
        onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
