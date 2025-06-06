import { spacing } from '../values/Spacing';
import { borderRadius } from '../values/BorderRadius';
import type {
  ButtonIconSizeType,
  ButtonSizeType,
  ButtonTextSizeType,
} from './Type';
import { TYPOGRAPHY_STYLES } from '../typography/Token';
import type { TextStyle, ViewStyle } from 'react-native';
import { ICON_SIZES } from '../icon/Token';
import type { ExtendedTheme } from '../colors/Type';

// Variant styles (shared across sizes)
const variantStyles = {
  solid: { borderRadius: borderRadius.borderRadius40 },
  solidRounded: { borderRadius: borderRadius.borderRadiusFull },
  outline: { borderRadius: borderRadius.borderRadius40, borderWidth: 1 },
  outlineRounded: {
    borderRadius: borderRadius.borderRadiusFull,
    borderWidth: 1,
  },
} as const;

// Size-specific padding
const sizePaddings = {
  small: spacing.space250,
  medium: spacing.space300,
  large: spacing.space400,
} as const;

// Helper function to create styles for a given size
const createStylesForSize = (
  paddingVertical: ViewStyle['paddingVertical']
) => ({
  solid: { ...variantStyles.solid, paddingVertical },
  solidRounded: {
    ...variantStyles.solidRounded,
    paddingVertical,
  },
  outline: {
    ...variantStyles.outline,
    paddingVertical,
  },
  outlineRounded: {
    ...variantStyles.outlineRounded,
    paddingVertical,
  },
});

// Export the button styles
export const BUTTON_STYLE: ButtonSizeType = {
  small: createStylesForSize(sizePaddings.small),
  medium: createStylesForSize(sizePaddings.medium),
  large: createStylesForSize(sizePaddings.large),
};

export function textViewWrapperStyle(
  textStyle: TextStyle,
  marginHorizontal: TextStyle['marginHorizontal'] = 0
): TextStyle {
  return { ...textStyle, marginHorizontal };
}

export const BUTTON_TXT_STYLE: ButtonTextSizeType = {
  small: textViewWrapperStyle(
    TYPOGRAPHY_STYLES.body2Bold as TextStyle,
    spacing.space100
  ),
  medium: textViewWrapperStyle(
    TYPOGRAPHY_STYLES.body1Bold as TextStyle,
    spacing.space100
  ),
  large: textViewWrapperStyle(
    TYPOGRAPHY_STYLES.body1Bold as TextStyle,
    spacing.space100
  ),
};

export const BUTTON_ICON_STYLE: ButtonIconSizeType = {
  large: ICON_SIZES.large,
  medium: ICON_SIZES.small,
  small: ICON_SIZES.xSmall,
};

export const ROUNDED_BORDER_RADIUS = borderRadius.borderRadiusFull;

export const BUTTON_COLOR_TOKENS = {
  primary: {
    background: {
      default: (theme: ExtendedTheme) => theme.colors.colorBackgroundAccent,
      pressed: (theme: ExtendedTheme) => theme.colors.colorStateAccentPressed1,
      hover: (theme: ExtendedTheme) => theme.colors.colorStateAccentHover1,
    },
    border: () => 'transparent',
    text: (theme: ExtendedTheme) => theme.colors.colorForegroundInvariable,
  },
  primaryOutline: {
    background: {
      default: () => 'transparent',
      pressed: (theme: ExtendedTheme) => theme.colors.colorStateAccentPressed2,
      hover: (theme: ExtendedTheme) => theme.colors.colorStateAccentHover2,
    },
    border: (theme: ExtendedTheme) => theme.colors.colorBorderAccent,
    text: (theme: ExtendedTheme) => theme.colors.colorForegroundAccent,
  },
  outlined: {
    background: {
      default: () => 'transparent',
      pressed: (theme: ExtendedTheme) => theme.colors.colorStatePrimaryPressed,
      hover: (theme: ExtendedTheme) => theme.colors.colorStatePrimaryHover,
    },
    border: (theme: ExtendedTheme) => theme.colors.colorBorderSubtle,
    text: (theme: ExtendedTheme) => theme.colors.colorForegroundSecondary,
  },
} as const;
