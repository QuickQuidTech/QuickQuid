import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface SystemWarningMessageProps {
  message: string;
  type?: 'warning' | 'error' | 'info';
}

export default function SystemWarningMessage({
  message,
  type = 'warning',
}: SystemWarningMessageProps) {
  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return colors.error;
      case 'info':
        return colors.info;
      default:
        return colors.warning;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={[styles.icon, { marginRight: spacing.sm }]}>
        {type === 'error' ? '⚠️' : type === 'info' ? 'ℹ️' : '⚠️'}
      </Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacing.md,
    borderRadius: 12,
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  message: {
    ...typography.bodySmall,
    color: colors.background,
    flex: 1,
    fontWeight: '500',
  },
});
