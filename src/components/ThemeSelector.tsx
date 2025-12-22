import { Pressable, useColorScheme, View } from 'react-native';
import Animated, { LayoutAnimationConfig, ZoomInRotate } from 'react-native-reanimated';
import { themeAtom, useTheme } from '@/store/theme';
import { useAtom } from 'jotai';
import React from 'react';
import { Card } from './craft-ui/Card';
import { Radio } from './craft-ui/Radio';
import { PressableScale } from './craft-ui/PressableScale';
import { XView } from './ui/XView';
import { Text } from './craft-ui/Text';
import { UnistylesRuntime } from 'react-native-unistyles';
import { Divider } from './craft-ui/Divider';
// import { Text } from 'react-native';

function ThemeRadioOption({ value: theme }: { value: 'light' | 'dark' | 'system' }) {
  const { storedTheme, setTheme } = useTheme();

  return (
    <Pressable
      onPress={() => {
        setTheme(theme);
      }}>
      <XView style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        <Text>{theme}</Text>
        <View pointerEvents="none">
          <Radio checked={storedTheme === theme} />
        </View>
      </XView>
    </Pressable>
  );
}

export function ThemeSelector() {
  return (
    <Card style={{ padding: 16, marginHorizontal: 12, gap: 12 }}>
      <Text variant="heading3">Select Theme</Text>
      <Divider />
      <ThemeRadioOption value="light" />
      <ThemeRadioOption value="dark" />
      <ThemeRadioOption value="system" />
    </Card>
  );
}
