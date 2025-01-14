import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ className, children, darkMode, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-lg border shadow-sm",
        darkMode
          ? 'bg-gray-800 text-white border-gray-700'
          : 'bg-white text-gray-900 border-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, ...props }) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);

export const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
);

export const CardDescription = ({ className, ...props }) => (
  <p
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
);

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

export const CardFooter = ({ className, ...props }) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);
