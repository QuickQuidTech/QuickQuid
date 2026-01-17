import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface CapacityIndicatorProps {
  current: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
}

export default function CapacityIndicator({
  current,
  max,
  label = 'Capacity',
  showPercentage = true,
}: CapacityIndicatorProps) {
  const percentage = Math.min((current / max) * 100, 100);
  const getCapacityColor = () => {
    if (percentage >= 90) return colors.error;
    if (percentage >= 70) return colors.warning;
    return colors.success;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        {showPercentage && (
          <Text style={[styles.percentage, { color: getCapacityColor() }]}>
            {Math.round(percentage)}%
          </Text>
        )}
      </View>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.bar,
            { width: `${percentage}%`, backgroundColor: getCapacityColor() },
          ]}
        />
      </View>
      <Text style={styles.capacityText}>
        {current} / {max} active orders
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.cardPadding,
    marginBottom: spacing.sectionGap,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  label: {
    ...typography.h4,
    color: colors.text,
  },
  percentage: {
    ...typography.h4,
    fontWeight: '700',
  },
  barContainer: {
    height: 12,
    backgroundColor: colors.surfaceElevated,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  bar: {
    height: '100%',
    borderRadius: 6,
  },
  capacityText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
});
