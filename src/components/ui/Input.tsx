import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  error?: string;
  suffix?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helpText, error, suffix, className = "", id, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700"
        >
          {label}
        </label>

        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            className={`
              w-full px-4 py-2.5 rounded-xl
              bg-white border border-slate-200
              text-slate-800 placeholder:text-slate-400
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400
              hover:border-slate-300
              disabled:opacity-50 disabled:cursor-not-allowed
              ${error ? "border-red-300 focus:ring-red-500/30 focus:border-red-400" : ""}
              ${suffix ? "pr-12" : ""}
              ${className}
            `}
            aria-describedby={
              helpText ? `${inputId}-help` : error ? `${inputId}-error` : undefined
            }
            aria-invalid={error ? "true" : undefined}
            {...props}
          />
          {suffix && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 pointer-events-none">
              {suffix}
            </span>
          )}
        </div>

        {helpText && !error && (
          <p
            id={`${inputId}-help`}
            className="text-xs text-slate-500 leading-relaxed"
          >
            {helpText}
          </p>
        )}

        {error && (
          <p
            id={`${inputId}-error`}
            className="text-xs text-red-500 leading-relaxed"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
