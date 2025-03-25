import {
  SliceThemeProvider,
  Typography,
  useDeviceBreakpoint,
} from 'react-native-saj-test';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
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
  xs: 'body2Regular', // small mobile
  sm: 'body1Medium', // mobile
  md: 'heading4Bold', // tablet
  lg: 'heading2Bold', // small desktop
  xl: 'display3Bold', // large desktop
  xxl: 'display2Bold', // large screens / TV
  default: 'body1Regular', // fallback
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
      <SliceThemeProvider>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Typography variant="heading5Black">
            {'ALL Typography variants'}
          </Typography>
          <AllTypographyVariants />
          <Typography variant="heading5Black">
            {'Responsive Typography'}
          </Typography>
          <Typography variant={responsiveFont[breakPoint] || responsiveFont.default}>
            {`Break Point: ${breakPoint} | Font: ${responsiveFont[breakPoint]}`}
          </Typography>
        </ScrollView>
      </SliceThemeProvider>
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
});
