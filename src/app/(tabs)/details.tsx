import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Stack, useLocalSearchParams } from 'expo-router';

import { ListItem } from '@/components/craft-ui/ListItem';
import { ScreenContent } from '@/components/ScreenContent';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Details' }} />
      <View style={styles.content}>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
        <ListItem text="Item 1" textBelow="Item 1 description" onPress={() => console.log('Item 1 pressed')} divider={true} style={styles.listItem} />
        <ListItem text="Item 2" textBelow="Item 2 description" onPress={() => console.log('Item 2 pressed')} style={styles.listItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.xlarge,
  },
  listContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 10,
    backgroundColor: theme.colors.backgroundScreen,
    overflow: 'hidden',
  },
  listItem: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
}));
