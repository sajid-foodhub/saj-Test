import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation =
    useNavigation<
      import('@react-navigation/native').NavigationProp<
        Record<string, object | undefined>
      >
    >();

  return (
    <View style={styles.container}>
      {/* Button with the name "Typo" */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Typo')}
      >
        <Text style={styles.text}>Typo</Text>
      </TouchableOpacity>

      {/* Button with an icon */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Icon')}
      >
        <Text style={styles.text}>Icon</Text>
      </TouchableOpacity>

      {/* Button with the text "Button" */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Button')}
      >
        <Text style={styles.text}>Button</Text>
      </TouchableOpacity>
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

export default HomePage;
