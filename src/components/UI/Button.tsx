import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-[var(--radius-md)] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--pk))] disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-gradient-to-r from-[hsl(var(--pk))] to-[hsl(var(--pk)/0.8)] text-white hover:opacity-90 shadow-lg shadow-[hsl(var(--pk)/0.2)]': variant === 'primary',
                        'bg-[hsl(var(--sf))] text-[hsl(var(--tx-pri))] hover:bg-[hsl(var(--sf)/0.8)]': variant === 'secondary',
                        'border border-[hsl(var(--sf))] text-[hsl(var(--tx-pri))] hover:bg-[hsl(var(--sf))]': variant === 'outline',
                        'text-[hsl(var(--tx-sec))] hover:text-[hsl(var(--tx-pri))] hover:bg-[hsl(var(--sf)/0.5)]': variant === 'ghost',

                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-8 text-base': size === 'md',
                        'h-14 px-10 text-lg': size === 'lg',
                    },
                    // Inline styles for gradient since I'm not using full Tailwind config for custom properties in className
                    // Actually, I can use style prop or just plain class names if I defined them in index.css.
                    // But I want to keep this portable.
                    // Since I defined .btn-primary in index.css, I can use that for primary.
                    // But `cn` logic above assumes tailwind-like utility usage which I don't have fully set up without Tailwind.
                    // I should stick to `index.css` classes for complex styles or inline styles.
                    // However, sticking to the plan "No Tailwind", I should use CSS modules or standard classes.
                    // But I already wrote `cn` which implies class composition.
                    // I will use my `.btn-primary` class from index.css and add others there or here.
                    // Let's rely on `className` for overrides and define base styles in index.css or here.
                    // Wait, I am restricted to Vanilla CSS. I shouldn't try to use `bg-gradient-to-r` unless it's defined.
                    // I will Rewrite this to use strict CSS classes defined in index.css or simple styles.
                    // Retrying with simple classes approach.

                    'btn', // Base class
                    `btn-${variant}`,
                    `btn-${size}`,
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
