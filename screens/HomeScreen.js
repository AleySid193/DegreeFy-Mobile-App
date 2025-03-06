import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#00FF00', '#006400']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.greenHeader}
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Welcome to DegreeFy</Text>
          <Text style={styles.subtitleText}>
            Get your degrees attested{'\n'}and verified online.
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.buttonContainer}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  greenHeader: {
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {
    width: 250,
    height: 250,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
    gap: 25,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: 150,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontWeight: '900',
  },
}); 