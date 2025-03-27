import React from 'react';
import { Button, Typography, useDeviceBreakpoint } from 'react-native-saj-test';
import { StyleSheet, ScrollView, SafeAreaView, View } from 'react-native';
import { useFonts } from 'expo-font';
import { TYPOGRAPHY_STYLES } from '../../src/SliceUI/typography/Token';

export const AllTypographyVariants = () => (
  <>
    {Object.keys(TYPOGRAPHY_STYLES).map((variant) => (
      <Typography key={variant} variant={variant}>
        {variant} sample text
      </Typography>
    ))}
  </>
);

export const responsiveFont = {
  xs: 'body2Regular',
  sm: 'body1Medium',
  md: 'heading4Bold',
  lg: 'heading2Bold',
  xl: 'display3Bold',
  xxl: 'display2Bold',
  default: 'body1Regular',
};

export default function Typo() {
  const [fontsLoaded] = useFonts({
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Heavy': require('../assets/fonts/Lato-Heavy.ttf'),
    'Lato-Medium': require('../assets/fonts/Lato-Medium.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
  });

  const breakPoint = useDeviceBreakpoint();

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Typography variant="heading5Black">
          {'ALL Typography variants'}
        </Typography>
        <AllTypographyVariants />

        <Typography variant="heading5Black">
          {'Responsive Typography'}
        </Typography>
        <Typography
          variant={responsiveFont[breakPoint] || responsiveFont.default}
        >
          {`Break Point: ${breakPoint} | Font: ${responsiveFont[breakPoint]}`}
        </Typography>

        <Typography variant="heading5Black">{'Buttons 1 - 100'}</Typography>

        <View style={styles.buttonContainer}>
          {[...Array(1)].map((_, index) => (
            <Button
              id={index + 1}
              key={index + 1}
              size={'large'}
              variant={'primary'}
              buttonStyle={{ margin: 10 }}
            >
              Button
            </Button>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
});
