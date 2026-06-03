import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  hover = false,
  onClick,
}: CardProps) {
  return (
    <div
      className={`
        bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100
        shadow-sm
        ${hover ? "hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 cursor-pointer" : ""}
        transition-all duration-200 ease-out
        ${className}
      `}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
  );
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className = "" }: CardBodyProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div
      className={`px-6 pb-6 pt-2 border-t border-slate-100 ${className}`}
    >
      {children}
    </div>
  );
}
