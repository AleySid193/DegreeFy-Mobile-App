import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={['#00C400', '#005400']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.topSection}>
            <Text style={styles.welcomeText}>Welcome to DegreeFy</Text>
            <Text style={styles.subheadingText}>
              Get your degrees attested{'\n'}and verified online.
            </Text>
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.logoContainer}>
              <Image 
                source={require('../assets/images/degreefy-logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <View style={styles.buttonSection}>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => router.push('/scanner')}
              >
                <Text style={styles.buttonText}>Scan QR Code</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.button}
                onPress={() => router.push('/verification')}
              >
                <Text style={styles.buttonText}>Verification</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.button}
                onPress={() => router.push('/attestation')}
              >
                <Text style={styles.buttonText}>Attestation</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 40,
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
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 20,
    color: '#00A651',
    fontWeight: 'bold',
  },
  buttonSection: {
    gap: 15,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00A651',
  },
  buttonText: {
    color: '#00A651',
    fontSize: 16,
    fontWeight: '600',
  },
});