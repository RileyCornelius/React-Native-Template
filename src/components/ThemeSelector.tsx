import React from 'react';
import { Pressable, StyleProp, useColorScheme, View, ViewStyle } from 'react-native';
import Animated, { LayoutAnimationConfig, ZoomInRotate } from 'react-native-reanimated';
import { UnistylesRuntime } from 'react-native-unistyles';

import { useAtom } from 'jotai';

import { useTheme } from '@/hooks/use-theme';

import { Card } from './ui/Card';
import { Divider } from './ui/Divider';
import { HStack } from './ui/HStack';
import { Radio } from './ui/Radio';
import { Text } from './ui/Text';

function ThemeRadioOption({ value: theme }: { value: 'light' | 'dark' | 'system' }) {
	const { storedTheme, setStoredTheme } = useTheme();

	return (
		<Pressable onPress={() => setStoredTheme(theme)}>
			<HStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
				<Text>{theme}</Text>
				<View pointerEvents="none">
					<Radio checked={storedTheme === theme} />
				</View>
			</HStack>
		</Pressable>
	);
}

export function ThemeSelector({ style }: { style?: StyleProp<ViewStyle> }) {
	return (
		<Card style={[{ padding: 16, marginHorizontal: 12, gap: 12 }, style]}>
			<Text variant="heading3">Select Theme</Text>
			<Divider />
			<ThemeRadioOption value="light" />
			<ThemeRadioOption value="dark" />
			<ThemeRadioOption value="system" />
		</Card>
	);
}
