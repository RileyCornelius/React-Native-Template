import { StyleSheet } from 'react-native-unistyles';
import { View } from 'react-native';

import { Stack, useLocalSearchParams } from 'expo-router';

import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';
import { ListItem } from '@/components/craft-ui/ListItem';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
        <View
          style={{
            marginHorizontal: 24,
            backgroundColor: '#f0f0f0',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <ListItem
            text="Item 1"
            textBelow="Item 1 description"
            onPress={() => console.log('Item 1 pressed')}
            divider={true}
            style={{ paddingHorizontal: 24, paddingVertical: 10 }}
          />
          <ListItem
            text="Item 2"
            textBelow="Item 2 description"
            onPress={() => console.log('Item 2 pressed')}
            // divider={true}
            style={{ paddingHorizontal: 24, paddingVertical: 10 }}
          />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
}));
