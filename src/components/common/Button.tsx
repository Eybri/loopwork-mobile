import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>Common Button Component</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { padding: 10, backgroundColor: '#4f46e5', borderRadius: 8 },
  text: { color: 'white', fontWeight: 'bold' }
});
