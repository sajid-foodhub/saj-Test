import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  type Theme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Typo from './Typo';
import Home from './Home';
import Icon from './Icon';
import {
  SliceThemeProvider,
  LightColorTokens,
  colors,
  theme,
} from 'react-native-saj-test';

const Stack = createNativeStackNavigator();

const appColors = LightColorTokens(colors);

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...appColors,
  },
};

export default function App() {
  return (
    <SliceThemeProvider theme={theme}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Typo" component={Typo} />
          <Stack.Screen name="Icon" component={Icon} />
        </Stack.Navigator>
      </NavigationContainer>
    </SliceThemeProvider>
  );
}
