import React, { useEffect, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
  Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight } from 'lucide-react-native';
import { styles } from './styles';

// Reference to the official application logo
const LOGO_URI = require('../../../assets/images/logoloopwork.png');

const { width } = Dimensions.get('window');

/**
 * Landing Screen
 * High-performance, premium introductory interface for team workspace alignment.
 */
export const LandingScreen = ({ navigation }: any) => {
  // Initialization animations: fade in and gentle slide up
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim, scaleAnim]);

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Dynamic Background Gradient */}
      <LinearGradient
        colors={['#020617', '#0f172a', '#1e1b4b']}
        style={styles.background}
      />

      <Animated.View style={[
        styles.content,
        {
          opacity: fadeAnim,
          transform: [
            { translateY: slideAnim },
            { scale: scaleAnim }
          ]
        }
      ]}>

        {/* Visual Identity Section */}
        <View style={styles.heroContainer}>
          <View style={styles.logoPlaceholder}>
            <Image
              source={LOGO_URI}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.heroTitle}>Landing</Text>
            <Text style={[styles.heroTitle, styles.heroTitleHighlight]}>page</Text>
          </View>

          <Text style={styles.heroSubtitle}>
            A premium workspace designed for maximum team collaboration and endless productivity.
          </Text>
        </View>

        {/* Primary CTA Section */}
        <View style={styles.ctaContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleGetStarted}
            style={styles.primaryButton}
          >
            <LinearGradient
              colors={['#4f46e5', '#7c3aed']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>Get Started</Text>
              <ArrowRight color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Dynamic Metadata Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Optimized for Workspace • SDK 54</Text>
        </View>
      </Animated.View>
    </View>
  );
};
