"use client";

import { ReactNode, useEffect, useRef } from "react";
import { Button } from "./Button";
import { X } from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title: string;
  children: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "default" | "danger";
}

export function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmLabel,
  cancelLabel,
  variant = "default",
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const dict = useDictionary();

  const displayConfirm = confirmLabel || dict.common.save;
  const displayCancel = cancelLabel || dict.common.cancel;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      firstFocusableRef.current?.focus();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="
        fixed inset-0 z-50
        bg-transparent backdrop:bg-black/40 backdrop:backdrop-blur-sm
        p-0 m-auto
        max-w-md w-[calc(100%-2rem)]
        rounded-2xl border-none outline-none
        animate-in fade-in zoom-in-95
      "
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-800">{title}</h2>
          <button
            ref={firstFocusableRef}
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label={dict.common.close}
          >
            <X size={20} />
          </button>
        </div>

        <div className="text-slate-600 text-sm leading-relaxed mb-6">
          {children}
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="ghost" size="sm" onClick={onClose}>
            {displayCancel}
          </Button>
          {onConfirm && (
            <Button
              variant={variant === "danger" ? "danger" : "primary"}
              size="sm"
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              {displayConfirm}
            </Button>
          )}
        </div>
      </div>
    </dialog>
  );
}
