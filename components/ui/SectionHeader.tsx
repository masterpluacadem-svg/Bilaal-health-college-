import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl space-y-3 ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 bg-bilaal-light text-bilaal-primary text-xs font-heading font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-bilaal-secondary/20 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-bilaal-accent"></span>
          {badge}
        </span>
      )}
      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-bilaal-dark tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
