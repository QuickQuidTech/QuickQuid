import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface EarningsSummaryWidgetProps {
  totalEarnings: number;
  thisMonth: number;
  pendingPayouts: number;
  completedOrders: number;
}

export default function EarningsSummaryWidget({
  totalEarnings,
  thisMonth,
  pendingPayouts,
  completedOrders,
}: EarningsSummaryWidgetProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Earnings Summary</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total Earnings</Text>
          <Text style={styles.statValue}>₹{totalEarnings.toLocaleString()}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>This Month</Text>
          <Text style={styles.statValue}>₹{thisMonth.toLocaleString()}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text style={styles.footerLabel}>Pending Payouts</Text>
          <Text style={styles.footerValue}>₹{pendingPayouts.toLocaleString()}</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerLabel}>Completed Orders</Text>
          <Text style={styles.footerValue}>{completedOrders}</Text>
        </View>
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
  },
  title: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  statValue: {
    ...typography.h2,
    color: colors.primary,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    flex: 1,
  },
  footerLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  footerValue: {
    ...typography.h4,
    color: colors.text,
    fontWeight: '600',
  },
});
