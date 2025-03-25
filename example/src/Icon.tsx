import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon as SajTestIcon } from 'react-native-saj-test';
import { ICON_SIZES } from '../../src/SliceUI/icon/Token';
import IcoMoonIcon from './Icomoon';

export const AllIconVariants = () => (
  <>
    {Object.keys(ICON_SIZES).map((variant) => (
      <View key={variant} style={{ padding: 16 }}>
        <SajTestIcon
          variant={variant as keyof typeof ICON_SIZES}
          component={
            <IcoMoonIcon name="icon-Merge_Fill" size={32} color="tomato" />
          }
        />
      </View>
    ))}
  </>
);

const Icon = () => {
  const navigation =
    useNavigation<
      import('@react-navigation/native').NavigationProp<
        Record<string, object | undefined>
      >
    >();

  return (
    <View style={styles.container}>
      <IcoMoonIcon name="Apple_Fill" size={32} color="tomato" />
      <AllIconVariants />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default Icon;
