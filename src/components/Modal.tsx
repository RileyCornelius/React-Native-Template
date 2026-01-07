import { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Button } from '@/components/craft-ui/Button';
import { Counter } from '@/components/craft-ui/Counter';
import { Divider } from '@/components/craft-ui/Divider';
import { HStack } from '@/components/craft-ui/HStack';
import { Switch } from '@/components/craft-ui/Switch';
import { Text } from '@/components/craft-ui/Text';
import { VStack } from '@/components/craft-ui/VStack';

export default function ExampleModal() {
	const [value, setValue] = useState(0);
	const [notificationsEnabled, setNotificationsEnabled] = useState(true);

	return (
		<VStack style={styles.container} gap={20}>
			<VStack gap={8}>
				<Text variant="heading2">Example Modal</Text>
				<Text variant="body2" style={styles.description}>
					This is an example of a modal content. You can use it to display settings, confirmations, or any other interactive content.
				</Text>
			</VStack>

			<Divider />

			<VStack gap={16}>
				<HStack style={styles.row} gap={12}>
					<VStack style={{ flex: 1 }} gap={4}>
						<Text variant="heading3">Notifications</Text>
						<Text variant="body3">Receive updates about your activity</Text>
					</VStack>
					<Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
				</HStack>

				<HStack style={styles.row} gap={12}>
					<VStack style={{ flex: 1 }} gap={4}>
						<Text variant="heading3">Quantity</Text>
						<Text variant="body3">Adjust the number of items</Text>
					</VStack>
					<View style={styles.counterWrapper}>
						<Counter value={value} onValueChange={setValue} />
					</View>
				</HStack>
			</VStack>

			<Divider />

			<HStack gap={12}>
				<View style={{ flex: 1 }}>
					<Button onPress={() => {}} variant="secondary">
						Cancel
					</Button>
				</View>
				<View style={{ flex: 1 }}>
					<Button onPress={() => {}} variant="primary">
						Confirm
					</Button>
				</View>
			</HStack>
		</VStack>
	);
}

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		padding: 24,
		paddingBottom: rt.insets.bottom + 24,
	},
	description: {
		color: theme.colors.contentSecondary,
	},
	row: {
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	counterWrapper: {
		width: 120,
		backgroundColor: theme.colors.backgroundScreenSecondary,
		padding: 8,
		borderRadius: theme.borderRadius.medium,
	},
}));
