import React, { use, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { StyleSheet, UnistylesRuntime, useUnistyles } from 'react-native-unistyles';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { useTheme } from '@/hooks/use-theme';

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

	const navigationTheme = {
		...(rt.themeName === 'dark' ? DarkTheme : DefaultTheme),
		colors: {
			...(rt.themeName === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
			primary: theme.colors.interactivePrimary,
			background: theme.colors.backgroundScreen,
			text: theme.colors.typography,
			border: theme.colors.borderNeutral,
		},
	};

	return (
		<GestureHandlerRootView>
			<KeyboardProvider>
				<ThemeProvider value={navigationTheme}>
					<Stack>
						<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					</Stack>
					<StatusBar style={storedTheme === 'system' ? 'auto' : storedTheme === 'dark' ? 'light' : 'dark'} />
				</ThemeProvider>
			</KeyboardProvider>
		</GestureHandlerRootView>
	);
}
