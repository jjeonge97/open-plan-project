import React from 'react';

import './button.css';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button type="button" className="custom-button" {...props}>
      {children}
    </button>
  );
};
