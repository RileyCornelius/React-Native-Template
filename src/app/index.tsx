import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Stack, useRouter } from 'expo-router';
import { MotiView } from 'moti';

import { Container } from '@/components/Container';
import { Button } from '@/components/craft-ui/Button';
import { ScreenContent } from '@/components/ScreenContent';

export default function Home() {
  const router = useRouter();

  function handlePress() {
    router.push({
      pathname: '/details',
      params: { name: 'Dan' },
    });
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home"></ScreenContent>
        {/* <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" style={styles.button} />
        </Link> */}

        <View style={styles.button}>
          <Button onPress={handlePress} size="regular" variant="primary">
            Click me
          </Button>
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
  button: {
    marginHorizontal: theme.spacing.xlarge,
  },
}));
