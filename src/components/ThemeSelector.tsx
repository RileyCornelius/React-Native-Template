import React from 'react';
import { Pressable, StyleProp, useColorScheme, View, ViewStyle } from 'react-native';
import Animated, { LayoutAnimationConfig, ZoomInRotate } from 'react-native-reanimated';
import { UnistylesRuntime } from 'react-native-unistyles';

import { useAtom } from 'jotai';

import { themeAtom, useTheme } from '@/store/theme';

import { Card } from './craft-ui/Card';
import { Divider } from './craft-ui/Divider';
import { PressableScale } from './craft-ui/PressableScale';
import { Radio } from './craft-ui/Radio';
import { Text } from './craft-ui/Text';
import { XView } from './ui/XView';

// import { Text } from 'react-native';

function ThemeRadioOption({ value: theme }: { value: 'light' | 'dark' | 'system' }) {
	const { storedTheme, setStoredTheme } = useTheme();

	return (
		<Pressable onPress={() => setStoredTheme(theme)}>
			<XView style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
				<Text>{theme}</Text>
				<View pointerEvents="none">
					<Radio checked={storedTheme === theme} />
				</View>
			</XView>
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
