import React from 'react';

export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

interface DataPlateGridProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Hardware Seam Grid (The Chassis)
 * Enforces bg-sbb-aluminum and gap-[1px] to create borders via background bleed.
 */
export const DataPlateGrid: React.FC<DataPlateGridProps> = ({ children, className = "" }) => {
  return (
    <div className={cn(
      "grid p-[1px] gap-[1px] bg-sbb-aluminum w-full min-h-0",
      className
    )}>
      {children}
    </div>
  );
};

interface DataPlateCellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Individual Data Cell (The Card)
 * Enforces flexbox layout and white background.
 * Layout borders are managed by the Grid parent (gap-1px).
 */
export const DataPlateCell: React.FC<DataPlateCellProps> = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 flex flex-col min-h-0",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

interface DataPlateAccentCellProps {
  children: React.ReactNode;
  accent: string;
  className?: string;
}

/**
 * Editorial Accent Cell.
 * Displays the vertical accent column on the left (e.g. INPUT / ANTWORT)
 * with internal inset shadow matching the 1px hairline law.
 */
export const DataPlateAccentCell: React.FC<DataPlateAccentCellProps> = ({ children, accent, className = "" }) => {
  return (
    <div className={cn(
      "bg-white grid grid-cols-[auto_1fr] relative overflow-hidden",
      className
    )}>
      {/* Accent Column */}
      <div className="bg-sbb-cloud flex items-center justify-center p-4 w-9 shrink-0 shadow-[inset_-1px_0_0_0_#E5E5E5]">
        <span className="[writing-mode:vertical-lr] -rotate-180 type-accent-number text-xs leading-none text-sbb-stone font-bold select-none whitespace-nowrap tracking-widest">
          {accent}
        </span>
      </div>
      
      {/* Content Column */}
      <div className="p-6 flex flex-col min-h-0">
        {children}
      </div>
    </div>
  );
};

interface DataPlateSignageProps {
  label: string;
  metadata?: string;
  className?: string;
}

/**
 * Quiet Signage (Module Header)
 * Enforces Brutalist signage standards.
 */
export const DataPlateSignage: React.FC<DataPlateSignageProps> = ({ 
  label, 
  metadata,
  className = "" 
}) => {
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex items-center gap-2 mb-1">
        <span className="type-ui text-sbb-stone">
          {label}
        </span>
      </div>
      
      {metadata && (
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-sbb-aluminum" />
          <span className="type-caption font-medium text-sbb-stone/80 uppercase tracking-widest text-[9px]">
            {metadata}
          </span>
        </div>
      )}
    </div>
  );
};
