import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../../lib/utils';

export const Avatar = ({ src, fallback, className, ...props }) => (
  <AvatarPrimitive.Root
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    <AvatarPrimitive.Image
      src={src}
      className="h-full w-full object-cover"
    />
    <AvatarPrimitive.Fallback
      className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-600"
    >
      {fallback}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
);