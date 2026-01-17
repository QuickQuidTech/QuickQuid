import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import OrderCard from '../cards/OrderCard';

interface OrderOverviewWidgetProps {
  orders: Array<{
    id: string;
    serviceName: string;
    sellerName: string;
    amount: number;
    status: 'pending' | 'active' | 'completed' | 'cancelled';
    createdAt: string;
  }>;
  onViewAll?: () => void;
  onOrderPress?: (orderId: string) => void;
}

export default function OrderOverviewWidget({
  orders,
  onViewAll,
  onOrderPress,
}: OrderOverviewWidgetProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Orders</Text>
        {onViewAll && (
          <TouchableOpacity onPress={onViewAll} activeOpacity={0.7}>
            <Text style={styles.viewAll}>View All →</Text>
          </TouchableOpacity>
        )}
      </View>
      {orders.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No orders yet</Text>
        </View>
      ) : (
        <View>
          {orders.slice(0, 3).map((order) => (
            <OrderCard
              key={order.id}
              orderId={order.id}
              serviceName={order.serviceName}
              sellerName={order.sellerName}
              amount={order.amount}
              status={order.status}
              createdAt={order.createdAt}
              onPress={() => onOrderPress?.(order.id)}
            />
          ))}
        </View>
      )}
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
    marginBottom: spacing.md,
  },
  title: {
    ...typography.h3,
    color: colors.text,
  },
  viewAll: {
    ...typography.bodySmall,
    color: colors.primary,
    fontWeight: '600',
  },
  emptyState: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  emptyText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
});
