import React from 'react';
import { View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Stack, useRouter } from 'expo-router';

import { ThemeSelector } from '@/components/ThemeSelector';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Settings' }} />
      <ThemeSelector style={styles.card} />
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    paddingBottom: rt.insets.bottom,
    backgroundColor: theme.colors.backgroundScreen,
  },
  card: { padding: 16, borderRadius: 16, marginTop: 16 } satisfies ViewStyle,
}));
