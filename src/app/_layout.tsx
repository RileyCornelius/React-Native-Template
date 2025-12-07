import React from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';

function App() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: styles.headerTint.color,
        }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

export default function Layout() {
  const theme = useTheme();

  return (
    <ThemeProvider value={theme.dark ? DarkTheme : DefaultTheme}>
      <App />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create((theme) => ({
  header: {
    backgroundColor: theme.colors.background,
  },
  headerTitle: {
    color: theme.colors.typography,
  },
  headerTint: {
    color: theme.colors.typography,
  },
}));
