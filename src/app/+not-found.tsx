import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.content}>
        <Text style={styles.title}>{"This screen doesn't exist."}</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.xlarge,
    paddingVertical: theme.spacing.large,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.typography,
  },
  link: {
    marginTop: 16,
    paddingVertical: 16,
  },
  linkText: {
    fontSize: 14,
    color: theme.colors.astral,
  },
}));
