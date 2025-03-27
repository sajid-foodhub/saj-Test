// @ts-ignore
import type { TextStyle, ViewStyle } from 'react-native';


export type SizeType = 'small' | 'medium' | 'large';

export type VariantsType =
  | 'solid'
  | 'outline'
  | 'solidRounded'
  | 'outlineRounded';

export type ButtonSizeType = {
  [key in SizeType]: ButtonVariantType;
};

export type ButtonVariantType = {
  [key in VariantsType]: ViewStyle;
};


export type ButtonVariants = {
  [key in SizeType]: TextStyle;
};

export type ButtonTextSizeType = {
  [key in SizeType]: TextStyle;
};

export type ButtonIconSizeType = {
  [key in SizeType]: any;
};

export type ButtonState = 'default' | 'pressed' | 'hover' | 'disabled';


export type ButtonVariant = 'primary' | 'primaryOutline' | 'outlined';


