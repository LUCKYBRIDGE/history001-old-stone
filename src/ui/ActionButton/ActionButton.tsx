import type { ButtonHTMLAttributes } from 'react';

export function ActionButton({
  className = '',
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`action-button ${className}`.trim()}
      type={type}
      {...props}
    />
  );
}
