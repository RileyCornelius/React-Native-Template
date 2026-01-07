import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useRouter } from 'expo-router';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/components/craft-ui/Button';
import { Text } from '@/components/craft-ui/Text';
import React from 'react';
import { Center } from '@/components/craft-ui/Center';

export default function Home() {
	const router = useRouter();

	function detailsRoute() {
		router.push({
			pathname: '/details',
			params: { name: 'Dan' },
		});
	}

	function exampleRoute() {
		router.push({
			pathname: '/example',
		});
	}

	function settingsRoute() {
		router.push({
			pathname: '/settings',
		});
	}

	return (
		<View style={styles.container}>
			<MotiView
				from={{ opacity: 0, translateY: 50 }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ type: 'timing', duration: 1000 }}
				style={styles.content}>
				<Ionicons name="rocket-outline" size={64} style={styles.icon} />
				<Text variant="heading1" style={styles.title}>
					Welcome!
				</Text>
				<Text variant="body1" style={styles.subtitle}>
					This is your new React Native app with Expo, Unistyles, and more.
				</Text>
				<Center>
					<Text>Hello</Text>
				</Center>
			</MotiView>
		</View>
	);
}

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		paddingTop: rt.insets.top,
		paddingBottom: rt.insets.bottom,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: theme.spacing.xlarge,
		gap: theme.spacing.large,
	},
	icon: {
		color: theme.colors.interactivePrimary,
		marginBottom: theme.spacing.medium,
	},
	title: {
		textAlign: 'center',
	},
	subtitle: {
		textAlign: 'center',
		color: theme.colors.contentSecondary,
		marginBottom: theme.spacing.xlarge,
	},
	buttonContainer: {
		width: '100%',
		gap: theme.spacing.medium,
	},
}));
