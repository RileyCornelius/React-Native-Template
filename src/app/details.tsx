import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Stack, useLocalSearchParams } from 'expo-router';

import { Container } from '@/components/Container';
import { ListItem } from '@/components/craft-ui/ListItem';
import { ScreenContent } from '@/components/ScreenContent';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
        <View style={styles.listContainer}>
          <ListItem
            text="Item 1"
            textBelow="Item 1 description"
            onPress={() => console.log('Item 1 pressed')}
            divider={true}
            style={styles.listItem}
          />
          <ListItem
            text="Item 2"
            textBelow="Item 2 description"
            onPress={() => console.log('Item 2 pressed')}
            style={styles.listItem}
          />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundScreen,
  },
  listContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 10,
    backgroundColor: theme.colors.backgroundNeutral,
    overflow: 'hidden',
  },
  listItem: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
}));
