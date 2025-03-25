import type { ExtendedTheme } from '../colors/Type';

export const getBackgroundColor = (
  buttonType: string,
  state: string,
  theme: ExtendedTheme
) => {
  switch (buttonType) {
    case 'primary':
      return getPrimaryBackgroundColor(state, theme);
    case 'primaryOutline':
      return getPrimaryOutlineBackgroundColor(state, theme);
    case 'outlined':
      return getOutlinedBackgroundColor(state, theme);
    default:
      return getPrimaryBackgroundColor(state, theme);
  }
};

export const getBorderColor = (
  buttonType: string,
  theme: ExtendedTheme
) => {
  switch (buttonType) {
    case 'primary':
      return 'transparent';
    case 'primaryOutline':
      return theme.colors.colorAccentPrimary;
    case 'outlined':
      return theme.colors.colorBorderSubtle;
    default:
      return theme.colors.colorAccentPrimary;
  }
};

export const getTextColor = (
  buttonType: string,
  theme: ExtendedTheme
) => {
  switch (buttonType) {
    case 'primary':
      return theme.colors.colorContrastWhite;
    case 'primaryOutline':
      return theme.colors.colorAccentPrimary;
    case 'outlined':
      return theme.colors.colorForegroundSecondary;
    default:
      return theme.colors.colorContrastWhite;
  }
};

const getPrimaryBackgroundColor = (state: string, theme: ExtendedTheme) => {
  switch (state) {
    case 'default':
      return theme.colors.colorAccentPrimary;
    case 'pressed':
      return theme.colors.colorStateAccentCOPressed1;
    case 'hover':
      return theme.colors.colorStateAccentCOHover1;
    default:
      return theme.colors.colorAccentPrimary;
  }
};

const getPrimaryOutlineBackgroundColor = (
  state: string,
  theme: ExtendedTheme
) => {
  switch (state) {
    case 'default':
      return 'transparent';
    case 'pressed':
      return theme.colors.colorStateAccentCOPressed2;
    case 'hover':
      return theme.colors.colorStateAccentCOHover2;
    default:
      return theme.colors.colorAccentPrimary;
  }
};

const getOutlinedBackgroundColor = (state: string, theme: ExtendedTheme) => {
  switch (state) {
    case 'default':
      return 'transparent';
    case 'pressed':
      return theme.colors.colorStatePrimaryPressed;
    case 'hover':
      return theme.colors.colorStatePrimaryHover;
    default:
      return theme.colors.colorAccentPrimary;
  }
};

