import React, { use, useEffect } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { StyleSheet, UnistylesRuntime, useUnistyles } from 'react-native-unistyles';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useTheme } from '@/store/theme';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function Layout() {
  const { theme, rt } = useUnistyles();
  const { setTheme, storedTheme } = useTheme();

  return (
    <KeyboardProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleStyle: {
            color: theme.colors.typography,
          },
          headerTintColor: theme.colors.typography,
        }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
      </Stack>
      <StatusBar style={storedTheme === 'system' ? 'auto' : storedTheme === 'dark' ? 'light' : 'dark'} />
    </KeyboardProvider>
  );
}
