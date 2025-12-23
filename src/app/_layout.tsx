import React, { use, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { StyleSheet, UnistylesRuntime, useUnistyles } from 'react-native-unistyles';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useTheme } from '@/store/theme';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

export default function Layout() {
  const { theme, rt } = useUnistyles();
  const { storedTheme } = useTheme();

  const fonts = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fonts) {
    return null;
  }

  return (
    <GestureHandlerRootView>
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
    </GestureHandlerRootView>
  );
}
