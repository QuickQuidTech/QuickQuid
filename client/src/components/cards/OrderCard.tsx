import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import Badge from '../ui/Badge';

interface OrderCardProps {
  orderId: string;
  serviceName: string;
  sellerName: string;
  amount: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  createdAt: string;
  onPress?: () => void;
}       

export default function OrderCard({
  orderId,
  serviceName,
  sellerName,
  amount,
  status,
  createdAt,
  onPress,
}: OrderCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'active':
        return 'info';
      case 'cancelled':
        return 'error';
      default:
        return 'warning';
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <Text style={styles.orderId}>Order #{orderId.slice(0, 8)}</Text>
        <Badge label={status.toUpperCase()} variant={getStatusColor() as any} />
      </View>
      <Text style={styles.serviceName} numberOfLines={1}>
        {serviceName}
      </Text>
      <Text style={styles.sellerName}>Seller: {sellerName}</Text>
      <View style={styles.footer}>
        <Text style={styles.date}>{createdAt}</Text>
        <Text style={styles.amount}>₹{amount}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.cardPadding,
    marginBottom: spacing.cardMargin,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  orderId: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  serviceName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  sellerName: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    ...typography.caption,
    color: colors.textTertiary,
  },
  amount: {
    ...typography.h4,
    color: colors.primary,
    fontWeight: '600',
  },
});
