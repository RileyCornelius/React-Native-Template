import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useState } from 'react';

import { Text } from '@/components/craft-ui/Text';
import { Button } from '@/components/craft-ui/Button';
import { Counter } from '@/components/craft-ui/Counter';
import { Divider } from '@/components/craft-ui/Divider';
import { Switch } from '@/components/craft-ui/Switch';
import { YView } from '@/components/ui/YView';
import { XView } from '@/components/ui/XView';

export default function ExampleModal() {
  const [value, setValue] = useState(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <YView style={styles.container} gap={20}>
      <YView gap={8}>
        <Text variant="heading2">Example Modal</Text>
        <Text variant="body2" style={styles.description}>
          This is an example of a modal content. You can use it to display settings, confirmations, or any other interactive content.
        </Text>
      </YView>

      <Divider />

      <YView gap={16}>
        <XView style={styles.row} gap={12}>
          <YView style={{ flex: 1 }} gap={4}>
            <Text variant="heading3">Notifications</Text>
            <Text variant="body3">Receive updates about your activity</Text>
          </YView>
          <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
        </XView>

        <XView style={styles.row} gap={12}>
          <YView style={{ flex: 1 }} gap={4}>
            <Text variant="heading3">Quantity</Text>
            <Text variant="body3">Adjust the number of items</Text>
          </YView>
          <View style={styles.counterWrapper}>
            <Counter value={value} onValueChange={setValue} />
          </View>
        </XView>
      </YView>

      <Divider />

      <XView gap={12}>
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
      </XView>
    </YView>
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
