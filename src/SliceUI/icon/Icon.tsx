import React from 'react';

import { resolveVariant, scaleFont } from '../responsive/helper';
import { ICON_SIZES } from './Token';
import type { VariantBreakPoints } from '../responsive/Type';
import { useDeviceBreakpoint } from '../responsive/useDeviceBreakPoint';
import { useSliceTheme } from '../contextProvider/context';

interface IconProps {
  component: any; // Ensure this is a valid React element
  variant: keyof typeof ICON_SIZES | VariantBreakPoints;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ component, variant, color }) => {
  const { theme } = useSliceTheme();
  const { iconSizes } = theme;
  const breakpoint = useDeviceBreakpoint();
  const breakPointVariant = resolveVariant(
    variant,
    breakpoint
  ) as keyof typeof iconSizes;
  const applyIconStyle = (icon: any) =>
    React.cloneElement(icon, {
      ...iconSizes[breakPointVariant],
      size: scaleFont(iconSizes[breakPointVariant].size),
      color: color,
    });

  return applyIconStyle(component);
};

export default React.memo(Icon);
