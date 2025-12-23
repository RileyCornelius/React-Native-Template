import { View, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Avatar } from '@/components/craft-ui/Avatar';
import { Text } from '@/components/craft-ui/Text';
import { XView } from '@/components/ui/XView';
import { YView } from '@/components/ui/YView';
import { Divider } from '@/components/craft-ui/Divider';

export default function Details() {
  const params = useLocalSearchParams();
  const { name, subject, time, snippet, avatarUrl } = params;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: '' }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text variant="heading2" style={styles.subject}>
          {subject}
        </Text>

        <XView style={styles.header}>
          <Avatar source={{ uri: avatarUrl as string }} fallbackInitials={(name as string)?.slice(0, 2)} size="medium" />
          <YView style={styles.senderInfo}>
            <Text variant="body1" style={styles.senderName}>
              {name}
            </Text>
            <Text variant="body3" color="contentTertiary">
              {time}
            </Text>
          </YView>
        </XView>

        <Divider style={styles.divider} />

        <Text variant="body1" style={styles.body}>
          {snippet}
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          {'\n\n'}
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.large,
  },
  subject: {
    marginBottom: theme.spacing.large,
  },
  header: {
    alignItems: 'center',
    gap: theme.spacing.medium,
    marginBottom: theme.spacing.large,
  },
  senderInfo: {
    gap: 2,
  },
  senderName: {
    fontWeight: '600',
  },
  divider: {
    marginBottom: theme.spacing.large,
  },
  body: {
    lineHeight: 24,
  },
}));
