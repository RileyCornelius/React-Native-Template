import { useUnistyles } from 'react-native-unistyles';
import { StatusBar } from 'expo-status-bar';

import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  const { theme } = useUnistyles();

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleStyle: {
            color: theme.colors.typography,
          },
          headerTintColor: theme.colors.typography,
        }}
      />
      <StatusBar style="auto" />
    </>
  );
}
