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
    const baseClasses = 'group flex items-center justify-center font-bold tracking-wide select-none transition-all duration-300';

    // Apply our Neumorphic utility classes defined in globals.css
    // nm-flat and nm-blue handle the default drop-shadows AND the :active inner-shadows automatically
    // On hover, we make it look pressed (inner shadow & scale down) and change text color to #DF9420
    const variantClasses = variant === 'blue'
        ? 'nm-blue text-black hover:text-[#DF9420] hover:[box-shadow:var(--nm-blue-inner-lg)]'
        : 'nm-flat text-black hover:text-[#DF9420] active:text-[#C07708] hover:[box-shadow:var(--nm-inner)] hover:scale-[0.98]';

    // Size variations based on the design kit (Hero CTA is 24px)
    const sizeClasses = size === 'lg'
        ? 'px-8 py-4 text-[24px]'
        : 'px-8 py-3 text-[16px]';

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
            {...props}
        >
            <span>{children}</span>
            <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 shrink-0 hidden group-hover:block"
            >
                <path
                    d="M0.389064 13.7167C0.275489 13.6761 0.176956 13.5999 0.10721 13.4986C0.0374645 13.3972 -1.51304e-05 13.2759 4.58202e-09 13.1514C4.58202e-09 10.4202 0.529329 8.23604 1.57392 6.65898C2.83595 4.75352 4.8267 3.72756 7.50003 3.60015V0.59774C7.50004 0.480686 7.53321 0.36621 7.59544 0.268513C7.65766 0.170817 7.7462 0.0942 7.85007 0.0481668C7.95393 0.00213349 8.06856 -0.0112901 8.17972 0.00956104C8.29088 0.0304122 8.39369 0.0846207 8.47539 0.165462L14.8216 6.44228C14.878 6.4981 14.9229 6.56519 14.9535 6.63948C14.9842 6.71378 15 6.79375 15 6.87456C15 6.95537 14.9842 7.03534 14.9535 7.10964C14.9229 7.18394 14.878 7.25103 14.8216 7.30684L8.47539 13.5837C8.39369 13.6645 8.29088 13.7187 8.17972 13.7396C8.06856 13.7604 7.95393 13.747 7.85007 13.701C7.7462 13.6549 7.65766 13.5783 7.59544 13.4806C7.53321 13.3829 7.50004 13.2684 7.50003 13.1514V10.171C5.87742 10.2218 4.65146 10.4942 3.67537 11.0169C2.62068 11.5818 1.8559 12.4258 1.03161 13.5202C0.957668 13.6183 0.856007 13.69 0.740817 13.7254C0.625627 13.7607 0.502656 13.758 0.389064 13.7174V13.7167Z"
                    fill="#DF9420"
                />
            </svg>
        </button>
    )
}
