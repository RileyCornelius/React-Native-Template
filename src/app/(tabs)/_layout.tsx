import React, { use, useEffect } from 'react';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { StyleSheet, UnistylesRuntime, useUnistyles } from 'react-native-unistyles';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { router, Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { colors } from '@/theme/colors';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
	return <FontAwesome size={28} style={{ marginBottom: -1 }} {...props} />;
}

export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				headerRight: ({ tintColor }) => (
					<Pressable style={{ margin: 12 }} onPress={() => router.push('/settings')}>
						<Ionicons name="settings" size={24} color={tintColor} />
					</Pressable>
				),
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="inbox"
				options={{
					title: 'Inbox',
					tabBarIcon: ({ color }) => <TabBarIcon name="envelope" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="example"
				options={{
					title: 'Showcase',
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
				}}
			/>
		</Tabs>
	);
}
