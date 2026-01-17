import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface BadgeProps {
  label: string | number;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
}

export default function Badge({
  label,
  variant = 'default',
  size = 'small',
}: BadgeProps) {
  return (
    <View
      style={[
        styles.badge,
        variant === 'success' && styles.successBadge,
        variant === 'warning' && styles.warningBadge,
        variant === 'error' && styles.errorBadge,
        variant === 'info' && styles.infoBadge,
        size === 'medium' && styles.mediumBadge,
        size === 'large' && styles.largeBadge,
      ]}
    >
      <Text
        style={[
          styles.text,
          size === 'medium' && styles.mediumText,
          size === 'large' && styles.largeText,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.surfaceElevated,
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  successBadge: {
    backgroundColor: colors.success,
  },
  warningBadge: {
    backgroundColor: colors.warning,
  },
  errorBadge: {
    backgroundColor: colors.error,
  },
  infoBadge: {
    backgroundColor: colors.info,
  },
  mediumBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
  },
  largeBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
  },
  text: {
    ...typography.caption,
    color: colors.text,
    fontWeight: '600',
  },
  mediumText: {
    fontSize: 13,
  },
  largeText: {
    fontSize: 14,
  },
});
