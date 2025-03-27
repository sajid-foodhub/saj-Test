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
    [responsiveSize, rounded]
  );

  const textTheme = useMemo(
    () => theme.buttonTextStyles[responsiveSize as SizeType],
    [responsiveSize]
  );

  const backgroundColor = useMemo(
    () =>
      getBackgroundColor(
        variant as keyof typeof BUTTON_COLOR_TOKENS,
        isHovered ? 'hover' : 'default',
        colorTheme
      ),
    [variant, isHovered]
  );

  const borderColor = useMemo(
    () =>
      getBorderColor(variant as keyof typeof BUTTON_COLOR_TOKENS, colorTheme),
    [variant]
  );

  const pressedBackgroundColor = useMemo(
    () =>
      getBackgroundColor(
        variant as keyof typeof BUTTON_COLOR_TOKENS,
        'pressed',
        colorTheme
      ),
    [variant]
  );

  const textColor = useMemo(
    () => getTextColor(variant as keyof typeof BUTTON_COLOR_TOKENS, colorTheme),
    [variant]
  );

  const opacity = useMemo(() => (disabled ? 0.3 : 1), [disabled]);

  const iconStyleMemo = useMemo(
    () => ({
      size: scaleFont(theme.buttonIconStyles[responsiveSize as SizeType].size),
      color: textColor,
    }),
    [responsiveSize, textColor]
  );

  const applyIconStyle = useCallback(
    (icon: ReactNode) =>
      icon
        ? React.cloneElement(icon as React.ReactElement, iconStyleMemo)
        : null,
    [iconStyleMemo]
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        combinedButtonStyle: {
          ...stylesLocal.baseButton,
          ...buttonTheme,
          backgroundColor,
          borderColor,
          opacity,
          ...buttonStyle,
        },
        pressedButtonStyle: {
          backgroundColor: pressedBackgroundColor,
        },
        combinedTextStyle: {
          ...stylesLocal.baseText,
          ...textTheme,
          fontSize: scaleFont(Number(textTheme.fontSize)),
          color: textColor,
          ...textStyle,
        } as TextStyle,
      }),
    [
      buttonTheme,
      backgroundColor,
      borderColor,
      opacity,
      buttonStyle,
      pressedBackgroundColor,
      textTheme,
      textColor,
      textStyle,
    ]
  );

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.combinedButtonStyle,
        pressed && styles.pressedButtonStyle,
      ]}
      {...(isWeb && {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      })}
    >
      {showPrefixIcon && prefixIcon && applyIconStyle(prefixIcon)}
      <Text style={styles.combinedTextStyle}>{children}</Text>
      {showSuffixIcon && suffixIcon && applyIconStyle(suffixIcon)}
    </Pressable>
  );
};

const stylesLocal = StyleSheet.create({
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
