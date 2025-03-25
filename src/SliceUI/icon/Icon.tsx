import React from 'react';

import { resolveVariant, scaleFont } from '../responsive/helper';
import { ICON_SIZES } from './Token';
import type { VariantBreakPoints } from '../responsive/Type';
import { useDeviceBreakpoint } from '../responsive/useDeviceBreakPoint';

interface IconProps {
  component: any; // Ensure this is a valid React element
  variant: keyof typeof ICON_SIZES | VariantBreakPoints;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ component, variant, color }) => {
  const breakpoint = useDeviceBreakpoint();
  const breakPointVariant = resolveVariant(
    variant,
    breakpoint
  ) as keyof typeof ICON_SIZES;
  const applyIconStyle = (icon: any) =>
    React.cloneElement(icon, {
      ...ICON_SIZES[breakPointVariant],
      size: scaleFont(ICON_SIZES[breakPointVariant].size),
      color: color,
    });

  return applyIconStyle(component);
};

export default React.memo(Icon);
