import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface TrustScoreWidgetProps {
  score: number;
  maxScore?: number;
  completedOrders?: number;
  ratings?: number;
  responseTime?: string;
}

export default function TrustScoreWidget({
  score,
  maxScore = 100,
  completedOrders,
  ratings,
  responseTime,
}: TrustScoreWidgetProps) {
  const percentage = (score / maxScore) * 100;
  const getScoreColor = () => {
    if (percentage >= 80) return colors.success;
    if (percentage >= 60) return colors.warning;
    return colors.error;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trust Score</Text>
      <View style={styles.scoreContainer}>
        <View style={[styles.scoreCircle, { borderColor: getScoreColor() }]}>
          <Text style={[styles.scoreText, { color: getScoreColor() }]}>
            {score}
          </Text>
          <Text style={styles.scoreMax}>/ {maxScore}</Text>
        </View>
      </View>
      <View style={styles.metrics}>
        {completedOrders !== undefined && (
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Orders</Text>
            <Text style={styles.metricValue}>{completedOrders}</Text>
          </View>
        )}
        {ratings !== undefined && (
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Rating</Text>
            <Text style={styles.metricValue}>⭐ {ratings.toFixed(1)}</Text>
          </View>
        )}
        {responseTime && (
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Response</Text>
            <Text style={styles.metricValue}>{responseTime}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.cardPadding,
    marginBottom: spacing.sectionGap,
    alignItems: 'center',
  },
  title: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.md,
  },
  scoreContainer: {
    marginBottom: spacing.md,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceElevated,
  },
  scoreText: {
    ...typography.h1,
    fontWeight: '700',
  },
  scoreMax: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: spacing.md,
  },
  metricItem: {
    alignItems: 'center',
  },
  metricLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  metricValue: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
});
