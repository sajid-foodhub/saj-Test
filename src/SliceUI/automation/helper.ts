import { Platform } from 'react-native';

export const BASE_ID = 'AK_';
export const VIEW_DISABLED = '_Disabled';
export const VIEW_SELECTED = '_Selected';

export const setTestId = (
  screenName: string | null | undefined,
  id: string | null | undefined,
  className: string | null | undefined
) => {
  try {
    return Platform.OS === 'android'
      ? {
          accessible: true,
          accessibilityLabel: BASE_ID + screenName + '_' + id,
        }
      : {
          testID: BASE_ID + screenName + '_' + id,
          ...(className
            ? { dataSet: { class: className } }
            : { dataSet: { class: id } }),
        };
  } catch (e) {
    // Adding automation logging failed
  }
  return undefined;
};
