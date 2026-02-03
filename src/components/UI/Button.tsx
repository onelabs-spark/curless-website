import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

const variantStyles = {
    primary: `
        bg-[hsl(var(--pk))] text-white 
        hover:bg-[hsl(var(--pk-dark))] 
        shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]
        hover:-translate-y-0.5
        active:translate-y-0 active:shadow-[var(--shadow-sm)]
    `,
    secondary: `
        bg-[hsl(var(--sf))] text-[hsl(var(--tx-pri))]
        hover:bg-[hsl(var(--sf)/0.7)]
        shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]
    `,
    outline: `
        bg-transparent border-2 border-[hsl(var(--tx-mut)/0.3)] text-[hsl(var(--tx-pri))]
        hover:border-[hsl(var(--pk))] hover:text-[hsl(var(--pk))]
        hover:bg-[hsl(var(--pk)/0.05)]
    `,
    ghost: `
        bg-transparent text-[hsl(var(--tx-sec))]
        hover:text-[hsl(var(--pk))] hover:bg-[hsl(var(--sf)/0.5)]
    `,
};

const sizeStyles = {
    sm: 'h-10 px-5 text-sm rounded-[var(--radius-sm)]',
    md: 'h-12 px-8 text-base rounded-[var(--radius-md)]',
    lg: 'h-14 px-10 text-lg rounded-[var(--radius-md)]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base styles
                    'inline-flex items-center justify-center font-semibold',
                    'transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-expo)]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--pk))] focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    // Variant and size
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

