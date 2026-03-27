import React, { useEffect, useRef } from 'react';
import { 
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
import { styles } from './styles';

const { width } = Dimensions.get('window');

/**
 * Login Screen
 * Premium dark-mode aesthetic with glassmorphism
 */
export const LoginScreen = () => {
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
          {/* Placeholder for images/logo.png from assets */}
          <View style={styles.logoPlaceholder}>
             <Sparkles color="#6366f1" size={64} />
          </View>
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
};
