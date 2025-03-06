import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <Text style={styles.welcomeText}>Welcome to DegreeFy</Text>
          <Text style={styles.subheadingText}>
            Get your degrees attested{'\n'}and verified online.
          </Text>
        </View>

        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons name="cube-outline" size={32} color="#00B300" />
            <Text style={styles.logoText}>DEGREEFY</Text>
          </View>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Verification')}
          >
            <Text style={styles.buttonText}>Verification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Attestation')}
          >
            <Text style={styles.buttonText}>Attestation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B300',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subheadingText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    lineHeight: 22,
  },
  logoSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonSection: {
    paddingBottom: 40,
    gap: 15,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#00B300',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen; 