"use client";

import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  isColor?: boolean;
};

export const Button: React.FC<Props> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  isColor,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? "bg-white" : "bg-rose-500"
      } ${outline ? "border-black" : "border-rose-500"} ${
        outline ? "text-black" : "text-white"
      } ${small ? "text-sm" : "text-md"} ${small ? "py-1" : "py-3"} ${
        small ? "font-light" : "font-semibold"
      } ${small ? "border-[1px]" : "border-2"}`}
    >
      {Icon && (
        <Icon
          size={24}
          className={`absolute left-4 top-3 ${isColor && "text-blue-600"}`}
        />
      )}
      {label}
    </button>
  );
};
