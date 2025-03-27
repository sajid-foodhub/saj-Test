import type { Theme } from '@react-navigation/native';

export interface ColorTokens {
  colorBackgroundAccent: string;
  colorBackgroundPositive: string;
  colorBackgroundNegative: string;
  colorBackgroundLink: string;
  colorBackgroundPrimary: string;
  colorBackgroundSecondary: string;
  colorBackgroundTertiary: string;
  colorBackgroundLight: string;
  colorBackgroundLighter: string;
  colorBackgroundElevated: string;
  colorBackgroundModal: string;

  colorBorderAccent: string;
  colorBorderPositive: string;
  colorBorderNegative: string;
  colorBorderLink: string;
  colorBorderStrong: string;
  colorBorderMedium: string;
  colorBorderSubtle: string;
  colorBorderLight: string;
  colorBorderLighter: string;
  colorBorderAlpha: string;

  colorForegroundAccent: string;
  colorForegroundPositive: string;
  colorForegroundNegative: string;
  colorForegroundLink: string;
  colorForegroundPrimary: string;
  colorForegroundSecondary: string;
  colorForegroundTertiary: string;
  colorForegroundLight: string;
  colorForegroundLighter: string;
  colorForegroundInvariable: string;

  colorStatePrimaryDisabled: string;
  colorStatePrimaryHover: string;
  colorStatePrimaryPressed: string;

  colorStateAccentDisabled: string;
  colorStateAccentHover1: string;
  colorStateAccentHover2: string;
  colorStateAccentPressed1: string;
  colorStateAccentPressed2: string;
  colorStateContrastWhiteDisabled: string;
}

export type ExtendedTheme = Theme & {
  colors: Theme['colors'] & ColorTokens;
};
