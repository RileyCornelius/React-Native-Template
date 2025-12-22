import { View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Stack, useRouter } from 'expo-router';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/components/craft-ui/Button';
import { ScreenContent } from '@/components/ScreenContent';
import { margin } from '@/themes/spacing';
import React from 'react';
import { ThemeSelector } from '@/components/ThemeSelector';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Settings' }} />
      <ThemeSelector />
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    paddingBottom: rt.insets.bottom,
    backgroundColor: theme.colors.background,
  },
}));
