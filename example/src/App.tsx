import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Typo from './Typo';
import Home from './Home';
import Icon from './Icon';
import { SliceThemeProvider } from 'react-native-saj-test';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SliceThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Typo" component={Typo} />
          <Stack.Screen name="Icon" component={Icon} />
        </Stack.Navigator>
      </NavigationContainer>
    </SliceThemeProvider>
  );
}
