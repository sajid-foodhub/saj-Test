import type { TypographyVariants } from '../typography/Type';
import type { IconSize } from '../icon/Type';
import { TYPOGRAPHY_STYLES } from '../typography/Token';
import { ICON_SIZES } from '../icon/Token';
import type {
  ButtonIconSizeType,
  ButtonSizeType,
  ButtonTextSizeType,
} from '../button/Type';
import {
  BUTTON_ICON_STYLE,
  BUTTON_STYLE,
  BUTTON_TXT_STYLE,
  ROUNDED_BORDER_RADIUS,
} from '../button/Token';
import type { ViewStyle } from 'react-native';

export class SliceTheme {
  isDebugBuildType: boolean = true; // Default value
  automationBaseid: string = 'AK_'; // Default value
  typographyStyles: TypographyVariants = TYPOGRAPHY_STYLES; // Default value
  iconSizes: IconSize = ICON_SIZES; // Default value
  buttonStyles: ButtonSizeType = BUTTON_STYLE; // Default value
  buttonTextStyles: ButtonTextSizeType = BUTTON_TXT_STYLE; // Default value
  buttonIconStyles: ButtonIconSizeType = BUTTON_ICON_STYLE; // Default value
  roundButtonRadius: ViewStyle['borderRadius'] = ROUNDED_BORDER_RADIUS;

  constructor(params?: Partial<SliceTheme>) {
    if (params) {
      Object.assign(this, params);
    }
  }

  /**
   * Updates the most deeply nested properties in the theme object.
   * Uses recursion to merge nested structures.
   *
   * @param updates A partial update object to apply changes deeply.
   */
  updateNestedStyles(updates: Partial<SliceTheme>) {
    const mergeDeep = (target: any, source: any) => {
      if (typeof target !== 'object' || target === null) return source; // Replace if not an object
      if (typeof source !== 'object' || source === null) return source;

      for (const key of Object.keys(source)) {
        if (source[key] instanceof Object) {
          target[key] = mergeDeep(target[key] || {}, source[key]);
        } else {
          target[key] = source[key];
        }
      }
      return target;
    };

    mergeDeep(this, updates);
  }
}

export const theme = new SliceTheme(); // Instantiates with default values
