import React, { useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { Avatar } from '@/components/craft-ui/Avatar';
import { Badge, BadgeText } from '@/components/craft-ui/Badge';
import { Button } from '@/components/craft-ui/Button';
import { HStack } from '@/components/craft-ui/HStack';
import { InputSearch } from '@/components/craft-ui/InputSearch';
import { Text } from '@/components/craft-ui/Text';
import { VStack } from '@/components/craft-ui/VStack';

type EmailData = {
	id: string;
	name: string;
	subject: string;
	snippet: string;
	time: string;
	tags: string[];
	avatarUrl: string;
	unread: boolean;
};

const EMAIL_DATA: EmailData[] = [
	{
		id: '1',
		name: 'William Smith',
		subject: 'Meeting Tomorrow',
		snippet:
			"Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's...",
		time: '1d ago',
		tags: ['meeting', 'work', 'important'],
		avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
		unread: true,
	},
	{
		id: '2',
		name: 'Alice Smith',
		subject: 'Re: Project Update',
		snippet:
			"Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic jo...",
		time: '4d ago',
		tags: ['work', 'important'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
		unread: false,
	},
	{
		id: '3',
		name: 'Bob Johnson',
		subject: 'Weekend Plans',
		snippet:
			"Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun. If you're...",
		time: '1y ago',
		tags: ['personal'],
		avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
		unread: false,
	},
	{
		id: '4',
		name: 'Emily Davis',
		subject: 'Re: Question about Budget',
		snippet:
			"I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the...",
		time: '2y ago',
		tags: ['work', 'budget'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
		unread: false,
	},
	{
		id: '5',
		name: 'Michael Wilson',
		subject: 'Important Announcement',
		snippet:
			'I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product...',
		time: '3y ago',
		tags: [],
		avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
		unread: false,
	},
	{
		id: '6',
		name: 'Sarah Jones',
		subject: 'Design Mockups Feedback',
		snippet: 'I just reviewed the latest design mockups. They look fantastic! I have a few minor suggestions regarding the color palette...',
		time: '3y ago',
		tags: ['design', 'feedback'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
		unread: true,
	},
	{
		id: '7',
		name: 'David Brown',
		subject: 'Quarterly Report Review',
		snippet:
			'Can we schedule a time to go over the quarterly report? I have some questions about the marketing metrics and user acquisition numbers...',
		time: '3y ago',
		tags: ['work', 'report'],
		avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
		unread: false,
	},
	{
		id: '8',
		name: 'Jessica Taylor',
		subject: 'Team Lunch',
		snippet: 'Hey everyone, are we still on for the team lunch this Friday? I was thinking we could try that new Italian place downtown...',
		time: '3y ago',
		tags: ['social'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
		unread: false,
	},
	{
		id: '9',
		name: 'Mark Anderson',
		subject: 'New Client Onboarding',
		snippet:
			"We have a new client starting next week. I'll need help setting up their account and preparing the welcome package. Let me know if you...",
		time: '3y ago',
		tags: ['work', 'client'],
		avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
		unread: true,
	},
	{
		id: '10',
		name: 'Laura Martinez',
		subject: 'Conference Registration',
		snippet: 'Just a reminder to register for the upcoming tech conference. The early bird deadline is approaching fast. Let me know if you need...',
		time: '3y ago',
		tags: ['conference', 'event'],
		avatarUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
		unread: false,
	},
];

const EmailItem = ({ item }: { item: EmailData }) => {
	return (
		<Pressable
			style={styles.emailItem}
			onPress={() =>
				router.push({
					pathname: '/details',
					params: { ...item, tags: item.tags.join(','), unread: String(item.unread) },
				})
			}>
			<HStack style={styles.emailContent}>
				<Avatar source={{ uri: item.avatarUrl }} fallbackInitials={item.name.slice(0, 2)} size="medium" />
				<VStack style={styles.emailDetails}>
					<HStack style={styles.emailHeader}>
						<Text variant="body2" color="contentPrimary" style={styles.emailName}>
							{item.name}
						</Text>
						<Text variant="body3" color="contentTertiary">
							{item.time}
						</Text>
					</HStack>
					<Text variant="body2" color="contentPrimary" style={styles.emailSubject} numberOfLines={1}>
						{item.subject}
					</Text>
					<Text variant="body3" color="contentSecondary" numberOfLines={2}>
						{item.snippet}
					</Text>
					{item.tags.length > 0 && (
						<HStack style={styles.tagsContainer}>
							{item.tags.map((tag, index) => (
								<View key={index} style={styles.tag}>
									<Text variant="body3" color="contentSecondary" style={styles.tagText}>
										{tag}
									</Text>
								</View>
							))}
						</HStack>
					)}
				</VStack>
				{item.unread && <View style={styles.unreadIndicator} />}
			</HStack>
		</Pressable>
	);
};

export default function Inbox() {
	const [searchQuery, setSearchQuery] = useState('');
	const [filter, setFilter] = useState<'all' | 'unread'>('all');

	const filteredEmails = filter === 'unread' ? EMAIL_DATA.filter((email) => email.unread) : EMAIL_DATA;

	return (
		<VStack style={styles.container}>
			{/* Header Section */}
			<View style={styles.header}>
				{/* Search Input */}
				<InputSearch
					placeholder="Search"
					value={searchQuery}
					onChangeText={setSearchQuery}
					itemLeft={<Ionicons name="search" size={20} style={styles.searchIcon} />}
					style={styles.searchInput}
				/>

				{/* Filter Tabs */}
				<HStack style={styles.filterTabs}>
					<Pressable onPress={() => setFilter('all')}>
						<Badge variant={filter === 'all' ? 'solid' : 'outline'} action={filter === 'all' ? 'info' : 'muted'}>
							<BadgeText>All mail</BadgeText>
						</Badge>
					</Pressable>
					<Pressable onPress={() => setFilter('unread')}>
						<Badge variant={filter === 'unread' ? 'solid' : 'outline'} action={filter === 'unread' ? 'info' : 'muted'}>
							<BadgeText>Unread</BadgeText>
						</Badge>
					</Pressable>
				</HStack>
			</View>

			{/* Email List */}
			<FlatList
				data={filteredEmails}
				renderItem={({ item }) => <EmailItem item={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.listContent}
			/>
		</VStack>
	);
}

const styles = StyleSheet.create((theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.backgroundScreen,
	},
	header: {
		paddingHorizontal: theme.spacing.medium,
		paddingTop: theme.spacing.small,
		paddingBottom: theme.spacing.medium,
		backgroundColor: theme.colors.background,
	},
	title: {
		marginBottom: theme.spacing.medium,
		fontWeight: '700',
	},
	searchInput: {},
	searchIcon: {
		marginRight: theme.spacing.small,
		color: theme.colors.contentTertiary,
	},
	filterTabs: {
		gap: theme.spacing.small,
		paddingTop: theme.spacing.small,
	},
	listContent: {
		// paddingBottom: theme.spacing.large,
	},
	emailItem: {
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: theme.spacing.medium,
		borderBottomWidth: 1,
		borderBottomColor: theme.colors.background,
		backgroundColor: theme.colors.background,
	},
	emailContent: {
		gap: theme.spacing.medium,
		alignItems: 'flex-start',
	},
	emailDetails: {
		flex: 1,
		gap: theme.spacing.xsmall,
	},
	emailHeader: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	emailName: {
		fontWeight: '600',
		flex: 1,
	},
	emailSubject: {
		fontWeight: '700',
	},
	tagsContainer: {
		flexWrap: 'wrap',
		gap: theme.spacing.xsmall,
		marginTop: theme.spacing.xsmall,
	},
	tag: {
		backgroundColor: theme.colors.backgroundElevated,
		paddingHorizontal: theme.spacing.small,
		paddingVertical: 2,
		borderRadius: theme.borderRadius.medium,
	},
	tagText: {
		textTransform: 'capitalize',
	},
	unreadIndicator: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: theme.colors.contentAccent,
		marginTop: 6,
	},
}));
