import { View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Stack, useRouter } from 'expo-router';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/components/craft-ui/Button';
import { ScreenContent } from '@/components/ScreenContent';
import { margin } from '@/themes/spacing';
import React from 'react';

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

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <ScreenContent path="app/index.tsx" title="Home"></ScreenContent>
        {/* <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" style={styles.button} />
        </Link> */}

        <View style={styles.button}>
          <Button onPress={detailsRoute} size="regular" variant="primary">
            {'Details Page'}
          </Button>
        </View>
        <View style={styles.button}>
          <Button onPress={exampleRoute} size="regular" variant="primary">
            {'Example Page'}
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    paddingBottom: rt.insets.bottom,
    backgroundColor: theme.colors.background,
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  // } satisfies ViewStyle,
  button: {
    marginHorizontal: theme.spacing.xlarge,
    marginVertical: theme.spacing.small,
  },
}));
