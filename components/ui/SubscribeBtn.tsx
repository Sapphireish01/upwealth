import React from 'react';

interface SubscribeBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'blue';
    size?: 'md' | 'lg';
    children?: React.ReactNode;
}

export function SubscribeBtn({
    variant = 'default',
    size = 'md',
    children = 'Subscribe Now!',
    className = '',
    ...props
}: SubscribeBtnProps) {
    const baseClasses = 'flex items-center justify-center font-bold tracking-wide select-none';

    // Apply our Neumorphic utility classes defined in globals.css
    // nm-flat and nm-blue handle the default drop-shadows AND the :active inner-shadows automatically
    const variantClasses = variant === 'blue'
        ? 'nm-blue text-black'
        : 'nm-flat text-black active:text-[#C07708]'; // Black default, orange when clicked

    // Size variations based on the design kit (Hero CTA is 24px)
    const sizeClasses = size === 'lg'
        ? 'px-12 py-5 text-[24px]'
        : 'px-8 py-3 text-[16px]';

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
