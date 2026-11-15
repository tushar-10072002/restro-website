import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-[#FF6B00] text-white hover:bg-[#E05E00] shadow-md shadow-[#FF6B00]/25 hover:shadow-lg hover:shadow-[#FF6B00]/30',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-zinc-200',
    outline: 'border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white',
    white: 'bg-white text-zinc-900 hover:bg-zinc-100 shadow-md hover:shadow-lg',
    ghost: 'text-zinc-700 hover:text-[#FF6B00] hover:bg-orange-50',
    dark: 'bg-zinc-900 text-white hover:bg-black shadow-md'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
    xl: 'text-lg px-8 py-4 gap-3'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}
