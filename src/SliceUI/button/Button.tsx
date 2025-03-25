import React, { type ReactNode, useCallback, useMemo, useState } from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  type ViewStyle,
  Platform,
  type TextStyle,
} from 'react-native';
import type { VariantBreakPoints } from '../responsive/Type';
import { useSliceTheme } from '../contextProvider/context';
import type { SizeType, VariantsType } from './Type';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../colors/Type';
import { getBackgroundColor, getBorderColor, getTextColor } from './helper';
import { useDeviceBreakpoint } from '../responsive/useDeviceBreakPoint';
import { resolveVariant, scaleFont } from '../responsive/helper';

// Button props
interface ButtonProps {
  children: string | string[];
  onPress?: () => void;
  overridedTheme?: any; // Replace with proper type if available
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
  size?: SizeType | VariantBreakPoints;
  disabled?: boolean;
  rounded?: boolean;
  showPrefixIcon?: boolean;
  showSuffixIcon?: boolean;
  prefixIcon?: React.ReactElement;
  suffixIcon?: React.ReactElement;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: TextStyle;
}

// Constants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  OUTLINED: 'outlined',
  GHOST: 'ghost',
} as const;

export const BUTTON_STATES = {
  DEFAULT: 'default',
  HOVER: 'hover',
  PRESSED: 'pressed',
  DISABLED: 'disabled',
} as const;

export const isWeb = Platform.OS === 'web';

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  overridedTheme = null,
  variant = BUTTON_VARIANTS.PRIMARY,
  size = 'medium',
  disabled = false,
  rounded = false,
  showPrefixIcon = true,
  showSuffixIcon = true,
  prefixIcon,
  suffixIcon,
  buttonStyle,
  textStyle,
  iconStyle,
}) => {
  const colorTheme = useTheme() as ExtendedTheme;

  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useSliceTheme();
  console.log(overridedTheme);

  const isSolid = variant === BUTTON_VARIANTS.PRIMARY;
  const buttonShape = isSolid ? 'solid' : 'outline';
  const buttonType = rounded ? `${buttonShape}Rounded` : buttonShape;

  const breakpoint = useDeviceBreakpoint();

  const responsiveSize = useMemo(
    () => resolveVariant(size, breakpoint) as SizeType,
    [size, breakpoint]
  );

  const buttonStyleMemo = useMemo(() => {
    const buttonTheme =
      theme.buttonStyles[responsiveSize][buttonType as VariantsType];
    const generatedBtnStyle = {
      backgroundColor: getBackgroundColor(
        variant,
        isHovered ? BUTTON_STATES.HOVER : BUTTON_STATES.DEFAULT,
        colorTheme
      ),
      borderColor: getBorderColor(variant, colorTheme),
      paddingVertical: buttonTheme.paddingVertical,
      borderRadius: buttonTheme.borderRadius,
      borderWidth: buttonTheme.borderWidth,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      minWidth: 150,
      opacity: disabled ? 0.3 : 1,
    } as ViewStyle;

    return buttonStyle
      ? StyleSheet.flatten([generatedBtnStyle, buttonStyle])
      : generatedBtnStyle;
  }, [
    theme.buttonStyles,
    responsiveSize,
    buttonType,
    variant,
    isHovered,
    colorTheme,
    disabled,
    buttonStyle,
  ]);

  const textStyleMemo = useMemo((): TextStyle => {
    const { fontFamily, fontWeight, fontSize, lineHeight } =
      theme.buttonTextStyles[responsiveSize];
    const generatedTxtStyle = {
      fontFamily,
      fontWeight,
      fontSize: scaleFont(fontSize),
      lineHeight: scaleFont(lineHeight),
      color: getTextColor(variant, colorTheme),
    } as TextStyle;
    return textStyle
      ? StyleSheet.flatten([generatedTxtStyle, textStyle])
      : generatedTxtStyle;
  }, [theme.buttonTextStyles, responsiveSize, variant, colorTheme, textStyle]);

  const iconStyleMemo = useMemo(() => {
    const { size } = theme.buttonIconStyles[responsiveSize];
    const generatedIconStyle = {
      size: scaleFont(size),
      color: getTextColor(variant, colorTheme),
    };

    return iconStyle ? [generatedIconStyle, iconStyle] : generatedIconStyle;
  }, [theme.buttonIconStyles, responsiveSize, variant, colorTheme, iconStyle]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: buttonStyleMemo,
        textStyle: textStyleMemo,
        pressed: {
          backgroundColor: getBackgroundColor(
            variant,
            BUTTON_STATES.PRESSED,
            colorTheme
          ),
        },
      }),
    [buttonStyleMemo, textStyleMemo, variant, colorTheme]
  );

  const applyIconStyle = useCallback(
    (icon: ReactNode) =>
      icon
        ? React.cloneElement(icon as React.ReactElement, iconStyleMemo)
        : null,
    [iconStyleMemo]
  );

  const applyButtonStyles = useCallback(
    ({ pressed }: { pressed: boolean }) =>
      StyleSheet.flatten([styles.buttonStyle, pressed && styles.pressed]),
    [styles.buttonStyle, styles.pressed]
  );

  return (
    <Pressable
      onPress={onPress}
      {...(isWeb && {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      })}
      disabled={disabled}
      style={applyButtonStyles}
    >
      {showPrefixIcon && prefixIcon && applyIconStyle(prefixIcon)}
      <Text style={styles.textStyle}>{children}</Text>
      {showSuffixIcon && suffixIcon && applyIconStyle(suffixIcon)}
    </Pressable>
  );
};

export default Button;
