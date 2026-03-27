import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { LogIn, UserPlus, Mail, Lock, Sparkles } from 'lucide-react-native';
import { styles } from './styles';

const LOGO_URI = require('../../../assets/images/logoloopwork.png');

/**
 * Login Screen
 * Premium dark-mode aesthetic with functional input handling
 */
export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Initialization animations
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

  const handleLogin = () => {
    console.log('Login attempt with:', email);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <StatusBar style="light" />

          <LinearGradient
            colors={['#020617', '#0f172a', '#1e1b4b']}
            style={styles.background}
          />

          <Animated.View style={[
            styles.content,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
          ]}>

            {/* Logo Section */}
            <View style={styles.logoContainer}>
              <View style={styles.logoBlur} />
              <View style={styles.logoPlaceholder}>
                <Image
                  source={LOGO_URI}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Branding Section */}
            <View style={styles.textContainer}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>Log</Text>
                <Text style={[styles.title, styles.titleHighlight]}>In page</Text>
              </View>
              <Text style={styles.subtitle}>Enter your credentials to access your workspace</Text>
            </View>

            {/* Input & Action Section */}
            <View style={styles.actionContainer}>
              <BlurView intensity={25} tint="dark" style={styles.glassCard}>

                {/* Email Input */}
                <View style={styles.inputWrapper}>
                  <Mail color="rgba(255, 255, 255, 0.4)" size={20} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Email or Username"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                  />
                </View>

                {/* Password Input */}
                <View style={styles.inputWrapper}>
                  <Lock color="rgba(255, 255, 255, 0.4)" size={20} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </View>

                {/* Main Action Button */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.primaryButton}
                  onPress={handleLogin}
                >
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
                  <Text style={styles.secondaryButtonText}>Create Account</Text>
                </TouchableOpacity>

              </BlurView>
            </View>

            <View style={styles.footer}>
              <Sparkles color="#6366f1" size={14} />
              <Text style={styles.footerText}>Optimized for Workspace • SDK 54</Text>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
