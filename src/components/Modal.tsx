import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import { Text } from '@/components/craft-ui/Text';
import { Button } from '@/components/craft-ui/Button';
import { Counter } from '@/components/craft-ui/Counter';
import { Card } from '@/components/craft-ui/Card';
import { Divider } from './craft-ui/Divider';

export default function BottomSheetModal() {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          console.log('Press Me');
        }}
        variant="primary"
        size="small">
        Press Me
      </Button>

      <Card
        style={{
          //   justifyContent: 'center',
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
          gap: 6,
          padding: 6,
        }}>
        <Text variant="heading3">Counter</Text>
        <Counter
          value={value}
          onValueChange={(val) => {
            setValue(val);
          }}></Counter>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    gap: 6,
    margin: 24,
    paddingBottom: 12,
    // backgroundColor: theme.colors.backgroundScreen,
  },
}));
