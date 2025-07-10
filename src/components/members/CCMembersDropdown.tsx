"use client";

import * as React from "react";
import ChevronDownSVG from "@/icons/angle.svg";
import { cn } from "@/lib/utils";
import DefaultButton from "@/components/ui/defaultButton";

interface DropdownOption {
  value: string;
  label: string;
}

interface MembersDropdownProps {
  value: string;
  onValueChange: (value: string) => void;
  options: DropdownOption[];
  placeholder: string;
  className?: string;
  disabled?: boolean;
}

export default function MembersDropdown({
  value,
  onValueChange,
  options,
  placeholder,
  className,
  disabled = false,
}: MembersDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={cn("relative", className)}>
      <DefaultButton
        variant="outline"
        size="default"
        className="w-full justify-between text-left font-normal"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className={cn(!selectedOption && "text-gray-400")}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDownSVG className="h-4 w-4 opacity-50" />
      </DefaultButton>

      {isOpen && !disabled && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown */}
          <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border border-gray-200 bg-white shadow-lg">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className="w-full px-3 py-2 text-left text-sm text-gray-900 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                onClick={() => {
                  onValueChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
