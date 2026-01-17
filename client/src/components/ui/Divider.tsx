import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface DividerProps {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function Divider({ label, orientation = 'horizontal' }: DividerProps) {
  if (orientation === 'vertical') {
    return <View style={styles.verticalDivider} />;
  }

  if (label) {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.line} />
        <Text style={styles.label}>{label}</Text>
        <View style={styles.line} />
      </View>
    );
  }

  return <View style={styles.horizontalDivider} />;
}

const styles = StyleSheet.create({
  horizontalDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  verticalDivider: {
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.md,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.md,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  label: {
    ...typography.caption,
    color: colors.textSecondary,
    marginHorizontal: spacing.md,
  },
});
