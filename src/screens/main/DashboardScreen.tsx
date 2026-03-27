import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DashboardScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Dashboard Screen Placeholder</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#020617' },
  text: { color: 'white', fontSize: 20 }
});
