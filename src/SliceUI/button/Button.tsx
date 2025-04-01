import React, { useState, useMemo, useCallback, type ReactNode } from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  Platform,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { useSliceTheme } from '../contextProvider/context';
import { useTheme } from '@react-navigation/native';
import { getBackgroundColor, getBorderColor, getTextColor } from './helper';
import { useDeviceBreakpoint } from '../responsive/useDeviceBreakPoint';
import { resolveVariant, scaleFont } from '../responsive/helper';
import type { SizeType } from './Type';
import type { BUTTON_COLOR_TOKENS } from './Token';

interface ButtonProps {
  id?: number;
  children: string | string[];
  onPress?: () => void;
  overridedTheme?: any;
  variant?: ButtonVariantType;
  size?: string;
  disabled?: boolean;
  rounded?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  showPrefixIcon?: boolean;
  showSuffixIcon?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  OUTLINED: 'outlined',
  GHOST: 'ghost',
} as const;

export type ButtonVariantType =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

const isWeb = Platform.OS === 'web';

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  variant = BUTTON_VARIANTS.PRIMARY,
  size = 'medium',
  disabled = false,
  rounded = false,
  showPrefixIcon = false,
  showSuffixIcon = false,
  prefixIcon,
  suffixIcon,
  buttonStyle,
  textStyle,
}) => {
  const colorTheme = useTheme();
  const { theme } = useSliceTheme();
  const [isHovered, setIsHovered] = useState(false);

  const breakpoint = useDeviceBreakpoint();
  const responsiveSize = useMemo(
    () => resolveVariant(size, breakpoint),
    [size, breakpoint]
  );

  const buttonTheme = useMemo(
    () =>
      theme.buttonStyles[responsiveSize as SizeType][
        rounded ? 'solidRounded' : 'solid'
      ],
    [responsiveSize, rounded, theme.buttonStyles]
  );

  const textTheme = useMemo(
    () => theme.buttonTextStyles[responsiveSize as SizeType],
    [responsiveSize, theme.buttonTextStyles]
  );

  const defaultBgColor = useMemo(
    () =>
      getBackgroundColor(
        variant as keyof typeof BUTTON_COLOR_TOKENS,
        'default',
        colorTheme
      ),
    [variant, colorTheme]
  );

  const hoverBgColor = useMemo(
    () =>
      getBackgroundColor(
        variant as keyof typeof BUTTON_COLOR_TOKENS,
        'hover',
        colorTheme
      ),
    [variant, colorTheme]
  );

  const pressedBgColor = useMemo(
    () =>
      getBackgroundColor(
        variant as keyof typeof BUTTON_COLOR_TOKENS,
        'pressed',
        colorTheme
      ),
    [variant, colorTheme]
  );

  const borderColor = useMemo(
    () =>
      getBorderColor(variant as keyof typeof BUTTON_COLOR_TOKENS, colorTheme),
    [variant, colorTheme]
  );

  const textColor = useMemo(
    () => getTextColor(variant as keyof typeof BUTTON_COLOR_TOKENS, colorTheme),
    [variant, colorTheme]
  );

  const opacity = useMemo(() => (disabled ? 0.3 : 1), [disabled]);

  const iconStyleMemo = useMemo(
    () => ({
      size: scaleFont(theme.buttonIconStyles[responsiveSize as SizeType].size),
      color: textColor,
    }),
    [responsiveSize, textColor, theme.buttonIconStyles]
  );

  const applyIconStyle = useCallback(
    (icon: ReactNode) =>
      icon
        ? React.cloneElement(icon as React.ReactElement, iconStyleMemo)
        : null,
    [iconStyleMemo]
  );

  const combinedButtonStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.baseButton,
        buttonTheme,
        {
          backgroundColor: isHovered ? hoverBgColor : defaultBgColor,
          borderColor,
          opacity,
        },
        buttonStyle,
      ]),
    [
      styles.baseButton,
      buttonTheme,
      isHovered,
      hoverBgColor,
      defaultBgColor,
      borderColor,
      opacity,
      buttonStyle,
    ]
  );

  const pressedButtonStyle = useMemo(
    () =>
      StyleSheet.flatten([
        combinedButtonStyle,
        { backgroundColor: pressedBgColor },
      ]),
    [combinedButtonStyle, pressedBgColor]
  );

  const combinedTextStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.baseText,
        textTheme,
        { color: textColor, fontSize: scaleFont(textTheme.fontSize) },
        textStyle,
      ]) as TextStyle,
    [styles.baseText, textTheme, textColor, textStyle]
  );

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) =>
        pressed ? pressedButtonStyle : combinedButtonStyle
      }
      {...(isWeb && {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      })}
    >
      {showPrefixIcon && prefixIcon && applyIconStyle(prefixIcon)}
      <Text style={combinedTextStyle}>{children}</Text>
      {showSuffixIcon && suffixIcon && applyIconStyle(suffixIcon)}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minWidth: 150,
  },
  baseText: {
    textAlign: 'center',
  },
});

export default Button;
