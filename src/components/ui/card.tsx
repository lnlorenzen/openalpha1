import React, { HTMLAttributes, DetailedHTMLProps } from 'react';

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string; // Optionaler String für zusätzliche Klassen
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  const baseClasses = 'rounded-lg shadow-md p-4'; // Beispiel für Standardklassen
  return (
    <div {...props} className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  const baseClasses = 'p-4'; // Beispiel für Standardklassen
  return (
    <div {...props} className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};
