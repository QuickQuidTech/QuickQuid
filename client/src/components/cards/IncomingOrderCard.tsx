import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import PrimaryButton from '../ui/PrimaryButton';
import SecondaryButton from '../ui/SecondaryButton';

interface IncomingOrderCardProps {
  orderId: string;
  buyerName: string;
  serviceName: string;
  amount: number;
  deadline: string;
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function IncomingOrderCard({
  orderId,
  buyerName,
  serviceName,
  amount,
  deadline,
  onAccept,
  onDecline,
}: IncomingOrderCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.label}>New Order</Text>
          <Text style={styles.orderId}>#{orderId.slice(0, 8)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>₹{amount}</Text>
        </View>
      </View>
      <Text style={styles.serviceName}>{serviceName}</Text>
      <Text style={styles.buyerName}>From: {buyerName}</Text>
      <Text style={styles.deadline}>Deadline: {deadline}</Text>
      <View style={styles.actions}>
        <View style={[styles.buttonContainer, { marginRight: spacing.sm }]}>
          <SecondaryButton
            title="Decline"
            onPress={onDecline || (() => {})}
            fullWidth={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Accept"
            onPress={onAccept || (() => {})}
            fullWidth={true}
          />
        </View>
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
    borderWidth: 2,
    borderColor: colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  label: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  orderId: {
    ...typography.bodySmall,
    color: colors.text,
    fontWeight: '600',
  },
  amountContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 8,
  },
  amount: {
    ...typography.h4,
    color: colors.text,
    fontWeight: '700',
  },
  serviceName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  buyerName: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  deadline: {
    ...typography.bodySmall,
    color: colors.warning,
    marginBottom: spacing.md,
  },
  actions: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
