import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

import { InputOTP } from '@/components/craft-ui/InputOTP';
import { ListItem } from '@/components/craft-ui/ListItem';
import { BottomSheet } from '@/components/craft-ui/BottomSheet';
import { Text } from '@/components/craft-ui/Text';
import { Button } from '@/components/craft-ui/Button';
import { Counter } from '@/components/craft-ui/Counter';
import { Card } from '@/components/craft-ui/Card';
import { ScreenContent } from '@/components/ScreenContent';
import { XView } from '@/components/ui/XView';
import { IconButton, AnimatedIcon } from '@/components/ui/IconButton';
import Animated from 'react-native-reanimated';

import BottomSheetModal from '@/components/Modal';
import { YView } from '@/components/ui/YView';

export default function Example() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  function toggleBottomSheet() {
    setIsBottomSheetOpen((value) => {
      return !value;
    });
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Example' }} />
      <BottomSheet visible={isBottomSheetOpen} onRequestClose={toggleBottomSheet} onClose={() => {}} enableSwipeToClose={true} showHandleBar={true}>
        {/* Modal */}
        <BottomSheetModal />
      </BottomSheet>
      <Button onPress={toggleBottomSheet} variant="neutral-secondary" size="large">
        Open Bottom Sheet
      </Button>
      <XView gap={16}>
        <IconButton
          variant="secondary"
          renderIcon={({ iconSize, animatedStyle }) => <AnimatedIcon name="add-circle" size={iconSize} color={'white'} style={animatedStyle} />}
          onPress={() => {}}>
          Add
        </IconButton>
        <IconButton
          variant="secondary"
          renderIcon={({ iconSize, iconColor, animatedStyle }) => (
            <AnimatedIcon name="heart" size={iconSize} color={iconColor} style={animatedStyle} />
          )}
          onPress={() => {}}>
          Like
        </IconButton>
      </XView>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    gap: theme.spacing.small,
    maring: rt.insets.bottom,
    backgroundColor: theme.colors.backgroundScreen,
  },
}));
