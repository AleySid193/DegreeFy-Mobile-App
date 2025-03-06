import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VerificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a5f1a',
  },
});

export default VerificationScreen; 