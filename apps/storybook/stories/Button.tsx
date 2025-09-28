import React from "react";

import "./button.css";

export interface ButtonProps {
  size?: "default" | "small";
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({ size = "default", label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        "custom-button",
        size === "small" ? "custom-button--small" : "",
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
