import { forwardRef } from 'react';
import { StyleSheet as RNStyleSheet, View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export type Props = {
  gap?: number;
} & ViewProps;

export const YView = forwardRef<View, Props>(({ children, gap, ...viewProps }, ref) => {
  return (
    <View ref={ref} {...viewProps} style={[styles.container, viewProps.style, gap !== undefined && { rowGap: gap }]}>
      {children}
    </View>
  );
});

YView.displayName = 'YView';

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'column',
  },
}));
