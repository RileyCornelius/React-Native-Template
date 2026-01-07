import React, { useState } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

import { Avatar } from '@/components/craft-ui/Avatar';
import { BottomSheet } from '@/components/craft-ui/BottomSheet';
import { Button } from '@/components/craft-ui/Button';
import { ButtonAnimationConfig } from '@/components/craft-ui/Button/Button';
import { ButtonRound } from '@/components/craft-ui/ButtonRound';
import { Card } from '@/components/craft-ui/Card';
import { Checkbox } from '@/components/craft-ui/Checkbox';
import { ContextMenu } from '@/components/craft-ui/ContextMenu';
import { Counter } from '@/components/craft-ui/Counter';
import { Divider } from '@/components/craft-ui/Divider';
import { HStack } from '@/components/craft-ui/HStack';
import { InputOTP } from '@/components/craft-ui/InputOTP';
import { InputSearch } from '@/components/craft-ui/InputSearch';
import { InputText } from '@/components/craft-ui/InputText';
import { ListItem } from '@/components/craft-ui/ListItem';
import { PasscodeEntry } from '@/components/craft-ui/PasscodeEntry';
import { PhotoCarousel } from '@/components/craft-ui/PhotoCarousel';
import { PressableScale } from '@/components/craft-ui/PressableScale';
import { Radio } from '@/components/craft-ui/Radio';
import { Slider } from '@/components/craft-ui/Slider';
import { SliderDual } from '@/components/craft-ui/SliderDual';
import { Switch } from '@/components/craft-ui/Switch';
import { Text } from '@/components/craft-ui/Text';
import { VStack } from '@/components/craft-ui/VStack';
import BottomSheetModal from '@/components/Modal';

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<Card style={{ padding: 16 }}>
			<Text variant="heading2" style={{ marginBottom: 8 }}>
				{title}
			</Text>
			<Divider style={{ marginBottom: 8 }} />
			{children}
		</Card>
	);
}

export default function Example() {
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
	const [checkboxChecked, setCheckboxChecked] = useState(false);
	const [counterValue, setCounterValue] = useState(0);
	const [otpValue, setOtpValue] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [textValue, setTextValue] = useState('');
	const [radioChecked, setRadioChecked] = useState(false);
	const [sliderValue, setSliderValue] = useState(50);
	const [sliderDualValues, setSliderDualValues] = useState({ min: 20, max: 80 });
	const [switchValue, setSwitchValue] = useState(false);

	function toggleBottomSheet() {
		setIsBottomSheetOpen((value) => !value);
	}

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
				{/* Text */}
				<SectionCard title="Text">
					<VStack gap={8}>
						<Text variant="body3">Body 3</Text>
						<Text variant="body2">Body 2</Text>
						<Text variant="body1">Body 1</Text>
						<Text variant="heading3">Heading 3</Text>
						<Text variant="heading2">Heading 2</Text>
						<Text variant="heading1">Heading 1</Text>
					</VStack>
				</SectionCard>

				{/* Avatar */}
				<SectionCard title="Avatar">
					<HStack gap={16}>
						<Avatar fallbackInitials="SM" size="small" />
						<Avatar fallbackInitials="MD" size="medium" showOnlineIndicator />
						<Avatar fallbackInitials="LG" size="large" fallbackColor={2} />
					</HStack>
				</SectionCard>

				{/* Buttons */}
				<SectionCard title="Buttons">
					<VStack gap={8}>
						<VStack gap={8}>
							<Button onPress={() => {}} variant="primary" animationConfig={ButtonAnimationConfig}>
								Primary
							</Button>
							<Button onPress={() => {}} variant="secondary" animationConfig={ButtonAnimationConfig}>
								Secondary
							</Button>
							<Button onPress={() => {}} variant="neutral" animationConfig={ButtonAnimationConfig}>
								Neutral
							</Button>
							<Button onPress={() => {}} variant="negative" animationConfig={ButtonAnimationConfig}>
								Negative
							</Button>
							<Button onPress={() => {}} disabled>
								Disabled
							</Button>
						</VStack>
						<Text variant="heading3">Icon Buttons</Text>
						<HStack gap={16}>
							<ButtonRound
								onPress={() => {}}
								renderContent={({ iconColor, iconSize }) => <Ionicons name="add" size={iconSize} color={iconColor} />}
							/>
							<ButtonRound
								variant="secondary"
								onPress={() => {}}
								renderContent={({ iconColor, iconSize }) => <Ionicons name="scan" size={iconSize} color={iconColor} />}
							/>
						</HStack>
					</VStack>
				</SectionCard>

				{/* Inputs */}
				<SectionCard title="Inputs">
					<VStack gap={8}>
						<InputText placeholder="Regular Input" value={textValue} onChangeText={setTextValue} />
						<InputSearch
							placeholder="Search..."
							value={searchValue}
							itemRight={<ButtonRound renderContent={({ iconColor, iconSize }) => <Ionicons name="send" size={iconSize} color={iconColor} />} />}
							onChangeText={setSearchValue}
						/>
					</VStack>
				</SectionCard>

				{/* Selection Controls */}
				<SectionCard title="Selection Controls">
					<VStack gap={8}>
						<HStack gap={16} style={{ alignItems: 'center' }}>
							<Text>Checkbox:</Text>
							<Checkbox checked={checkboxChecked} onPress={setCheckboxChecked} />
						</HStack>
						<HStack gap={16} style={{ alignItems: 'center' }}>
							<Text>Radio:</Text>
							<Radio checked={radioChecked} onPress={setRadioChecked} />
						</HStack>
						<HStack gap={16} style={{ alignItems: 'center' }}>
							<Text>Switch:</Text>
							<Switch value={switchValue} onValueChange={setSwitchValue} />
						</HStack>
					</VStack>
				</SectionCard>

				{/* Sliders & Counter */}
				<SectionCard title="Sliders & Counter">
					<VStack gap={8} style={{ alignItems: 'center' }}>
						<Text variant="heading2">Sliders & Counter</Text>
						<Text>Slider: {Math.round(sliderValue)}</Text>
						<Slider min={0} max={100} initialValue={sliderValue} onValueChange={setSliderValue} />
						<Text>
							Dual Slider: {Math.round(sliderDualValues.min)} - {Math.round(sliderDualValues.max)}
						</Text>
						<SliderDual min={0} max={100} minInitialValue={20} maxInitialValue={80} onValuesChange={setSliderDualValues} />
						<View style={{ marginTop: 6, width: 120, backgroundColor: '#faf9f7', padding: 8, borderRadius: 12 }}>
							<Counter value={counterValue} onValueChange={setCounterValue} />
						</View>
					</VStack>
				</SectionCard>

				{/* List Items & Card */}
				<SectionCard title="List Items & Card">
					<VStack gap={8}>
						<ListItem text="List Item 1" textBelow="Description" itemRight={<Ionicons name="chevron-forward" size={20} />} />
						<Divider />
						<ListItem text="List Item 1" textBelow="Description" itemRight={<Ionicons name="chevron-forward" size={20} />} />
						<Divider />

						<Card style={{ marginTop: 6, padding: 16, backgroundColor: '#faf9f7' }}>
							<ListItem text="List Item 2" itemLeft={<Avatar fallbackInitials="AB" size="small" />} />
						</Card>
					</VStack>
				</SectionCard>

				{/* Context Menu */}
				<SectionCard title="Context Menu">
					<VStack gap={8} style={{ alignItems: 'center' }}>
						<ContextMenu
							items={[
								{ type: 'item', id: '1', label: 'Option 1', onPress: () => Alert.alert('Option 1') },
								{ type: 'divider', id: '2' },
								{ type: 'item', id: '3', label: 'Option 2', onPress: () => Alert.alert('Option 2') },
							]}
							trigger={(onPress) => (
								<View style={{ width: 150 }}>
									<Button onPress={onPress}>Open Menu</Button>
								</View>
							)}
						/>
					</VStack>
				</SectionCard>

				{/* Photo Carousel */}
				<SectionCard title="Photo Carousel">
					<View style={{ borderRadius: 12, overflow: 'hidden' }}>
						<PhotoCarousel
							photos={[
								{ id: '1', uri: 'https://picsum.photos/id/10/400/300' },
								{ id: '2', uri: 'https://picsum.photos/id/20/400/300' },
								{ id: '3', uri: 'https://picsum.photos/id/30/400/300' },
							]}
						/>
					</View>
				</SectionCard>

				{/* Pressable Scale */}
				<VStack gap={8}>
					<Text variant="heading2">Pressable Scale</Text>
					<PressableScale
						style={{ padding: 20, backgroundColor: '#faf9f7', borderRadius: 16 }}
						onPress={() => console.log('Pressed')}
						animationConfig={ButtonAnimationConfig}>
						<Text>Press me!</Text>
					</PressableScale>
				</VStack>
				{/* Bottom Sheet */}
				<SectionCard title="Bottom Sheet">
					<VStack gap={8}>
						<Button onPress={toggleBottomSheet}>Open Bottom Sheet</Button>
					</VStack>
				</SectionCard>

				<BottomSheet visible={isBottomSheetOpen} onRequestClose={toggleBottomSheet} onClose={() => {}} enableSwipeToClose={true} showHandleBar={true}>
					<BottomSheetModal />
				</BottomSheet>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.backgroundScreen,
	},
	scrollContent: {
		padding: theme.spacing.medium,
		paddingBottom: rt.insets.bottom + 20,
		gap: 12,
	},
}));
