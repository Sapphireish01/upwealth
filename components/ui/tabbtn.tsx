import React from 'react';
import Link from 'next/link';

interface TabBtnProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function TabBtn({
  href,
  isActive = false,
  children,
  className = '',
}: TabBtnProps) {
  
  // Base styling for the text
  const baseClasses = 'px-6 py-2 rounded-lg font-montserrat text-[16px] transition-all duration-200 inline-flex items-center justify-center select-none';
  
  // If active, it uses the pressed (inner shadow) styling.
  // If inactive, it's just text (or you can apply .nm-flat-sm if they should look like raised buttons when inactive)
  // Based on your image, the inactive state looks perfectly flat with the background, just text.
  const stateClasses = isActive
    ? 'nm-pressed-sm text-[#202020] font-medium' // active state: pressed in
    : 'text-[#202020] hover:text-[#C07708] bg-transparent'; // inactive state: flat

  return (
    <Link href={href} className={`${baseClasses} ${stateClasses} ${className}`}>
      {children}
    </Link>
  );
}
