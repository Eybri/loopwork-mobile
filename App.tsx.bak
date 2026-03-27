import React, { useEffect, useRef } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Animated, 
  Dimensions 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { LogIn, UserPlus, Sparkles } from 'lucide-react-native';

const { width } = Dimensions.get('window');

/**
 * LoopWork Mobile App Main Component
 * Designed with a premium dark-mode aesthetic featuring:
 * - Complex gradients for visual depth
 * - Glassmorphism effects using BlurView
 * - Subtle micro-animations for engagement
 * - High-end typography and spacing
 */
export default function App() {
  // Initialization animations: fade in and slide up
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <View style={styles.container}>
      {/* Set status bar to light because of dark background */}
      <StatusBar style="light" />
      
      {/* Premium Gradient Background */}
      <LinearGradient
        colors={['#020617', '#0f172a', '#1e1b4b']}
        style={styles.background}
      />
      
      <Animated.View style={[
        styles.content, 
        { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
      ]}>
        
        {/* Logo Section with Glow Effect */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBlur} />
          <Image 
            source={require('./assets/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Branding Text Section */}
        <View style={styles.textContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Loop</Text>
            <Text style={[styles.title, styles.titleHighlight]}>Work</Text>
          </View>
          <Text style={styles.subtitle}>
            Streamline your productivity in an endless loop of professional excellence.
          </Text>
        </View>

        {/* Action Buttons Section with Glassmorphism */}
        <View style={styles.actionContainer}>
          <BlurView intensity={25} tint="dark" style={styles.glassCard}>
            <TouchableOpacity activeOpacity={0.8} style={styles.primaryButton}>
              <LinearGradient
                colors={['#4f46e5', '#7c3aed']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientButton}
              >
                <LogIn color="#fff" size={20} />
                <Text style={styles.primaryButtonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.secondaryButton}>
              <UserPlus color="#a5b4fc" size={20} />
              <Text style={styles.secondaryButtonText}>Join the Loop</Text>
            </TouchableOpacity>
          </BlurView>
        </View>

        {/* Dynamic Footer with SDK metadata */}
        <View style={styles.footer}>
          <Sparkles color="#6366f1" size={14} />
          <Text style={styles.footerText}>Optimized for Workspace • SDK 54</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 48,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBlur: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 36,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 64,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -1.5,
  },
  titleHighlight: {
    color: '#818cf8',
  },
  subtitle: {
    fontSize: 18,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: 300,
    fontWeight: '400',
  },
  actionContainer: {
    width: '100%',
    borderRadius: 36,
    overflow: 'hidden',
  },
  glassCard: {
    padding: 28,
    width: '100%',
    borderRadius: 36,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  primaryButton: {
    width: '100%',
    height: 60,
    marginBottom: 16,
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
  },
  gradientButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  secondaryButton: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1.5,
    borderColor: 'rgba(165, 180, 252, 0.2)',
  },
  secondaryButtonText: {
    color: '#a5b4fc',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    opacity: 0.5,
  },
  footerText: {
    color: '#64748b',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});
