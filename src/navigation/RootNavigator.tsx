import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingScreen } from '../screens/landing';
import { LoginScreen } from '../screens/login';

// Type definition for Root Stack Navigation parameters
export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root Navigator configuration
 * Handles central app navigation flow starting from the Landing Screen.
 */
export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
