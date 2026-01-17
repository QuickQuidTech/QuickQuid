import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import OrderCard from '../../components/cards/OrderCard';
import { mockOrders } from '../../mock';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface OrdersScreenProps {
  onOrderPress?: (orderId: string) => void;
}

type OrderStatus = 'all' | 'pending' | 'active' | 'completed' | 'cancelled';

export default function OrdersScreen({ onOrderPress }: OrdersScreenProps) {
  const [selectedFilter, setSelectedFilter] = useState<OrderStatus>('all');

  const filters: OrderStatus[] = ['all', 'pending', 'active', 'completed', 'cancelled'];

  const filteredOrders =
    selectedFilter === 'all'
      ? mockOrders
      : mockOrders.filter((order) => order.status === selectedFilter);

  return (
    <AppContainer>
      <ScreenWrapper scrollable={false}>
        <View style={styles.container}>
          <View style={styles.filterContainer}>
            <FlatList
              horizontal
              data={filters}
              keyExtractor={(item) => item}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[
                    styles.filterChip,
                    selectedFilter === item && styles.activeFilterChip,
                    index < filters.length - 1 && { marginRight: spacing.sm },
                  ]}
                  onPress={() => setSelectedFilter(item)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.filterText,
                      selectedFilter === item && styles.activeFilterText,
                    ]}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Text>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterContent}
            />
          </View>
          <FlatList
            data={filteredOrders}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <OrderCard
                orderId={item.id}
                serviceName={item.serviceName}
                sellerName={item.sellerName}
                amount={item.amount}
                status={item.status}
                createdAt={item.createdAt}
                onPress={() => onOrderPress?.(item.id)}
              />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No orders found</Text>
              </View>
            }
          />
        </View>
      </ScreenWrapper>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    backgroundColor: colors.surface,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  filterContent: {
    paddingHorizontal: spacing.screenPadding,
  },
  filterChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activeFilterChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  activeFilterText: {
    color: colors.text,
    fontWeight: '600',
  },
  listContent: {
    padding: spacing.screenPadding,
  },
  emptyState: {
    padding: spacing.xxl,
    alignItems: 'center',
  },
  emptyText: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
