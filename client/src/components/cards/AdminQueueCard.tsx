import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import Badge from '../ui/Badge';
import PrimaryButton from '../ui/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton';

interface AdminQueueCardProps {
  itemId: string;
  userName: string;
  itemType: 'verification' | 'order' | 'dispute';
  description: string;
  submittedAt: string;
  priority?: 'low' | 'medium' | 'high';
  onApprove?: () => void;
  onReject?: () => void;
  onViewDetails?: () => void;
}

export default function AdminQueueCard({
  itemId,
  userName,
  itemType,
  description,
  submittedAt,
  priority = 'medium',
  onApprove,
  onReject,
  onViewDetails,
}: AdminQueueCardProps) {
  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.label}>{itemType.toUpperCase()}</Text>
          <Text style={styles.itemId}>#{itemId.slice(0, 8)}</Text>
        </View>
        <Badge label={priority.toUpperCase()} variant={getPriorityColor() as any} />
      </View>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <Text style={styles.date}>Submitted: {submittedAt}</Text>
      <View style={styles.actions}>
        {onViewDetails && (
          <View style={[styles.buttonWrapper, { marginHorizontal: spacing.xs }]}>
            <SecondaryButton
              title="Details"
              onPress={onViewDetails}
              fullWidth={true}
            />
          </View>
        )}
        {onReject && (
          <View style={[styles.buttonWrapper, { marginHorizontal: spacing.xs }]}>
            <SecondaryButton
              title="Reject"
              onPress={onReject}
              fullWidth={true}
            />
          </View>
        )}
        {onApprove && (
          <View style={[styles.buttonWrapper, { marginHorizontal: spacing.xs }]}>
            <PrimaryButton
              title="Approve"
              onPress={onApprove}
              fullWidth={true}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.cardPadding,
    marginBottom: spacing.cardMargin,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  label: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  itemId: {
    ...typography.bodySmall,
    color: colors.text,
    fontWeight: '600',
  },
  userName: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  date: {
    ...typography.caption,
    color: colors.textTertiary,
    marginBottom: spacing.md,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -spacing.xs,
  },
  buttonWrapper: {
    flex: 1,
    minWidth: '30%',
  },
});
