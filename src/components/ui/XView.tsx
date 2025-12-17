import { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export type Props = {
  gap?: number;
} & ViewProps;

export const XView = forwardRef<View, Props>(({ children, gap, ...viewProps }, ref) => {
  return (
    <View ref={ref} {...viewProps} style={[styles.container, viewProps.style, gap !== undefined && { columnGap: gap }]}>
      {children}
    </View>
  );
});

XView.displayName = 'XView';

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
  },
}));
