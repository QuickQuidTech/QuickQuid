import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import AdminTabSwitcher from '../../components/admin/AdminTabSwitcher';
import AdminQueueCard from '../../components/cards/AdminQueueCard';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface AdminDashboardScreenProps {
  onApprove?: (itemId: string, type: string) => void;
  onReject?: (itemId: string, type: string) => void;
  onViewDetails?: (itemId: string, type: string) => void;
}

export default function AdminDashboardScreen({
  onApprove,
  onReject,
  onViewDetails,
}: AdminDashboardScreenProps) {
  const [activeTab, setActiveTab] = useState('Verification');

  const tabs = ['Verification', 'Orders', 'Disputes'];

  const verificationQueue = [
    {
      id: '1',
      userName: 'Rajesh Kumar',
      itemType: 'verification' as const,
      description: 'Student verification request',
      submittedAt: '2024-01-15',
      priority: 'high' as const,
    },
    {
      id: '2',
      userName: 'Priya Sharma',
      itemType: 'verification' as const,
      description: 'Seller verification request',
      submittedAt: '2024-01-14',
      priority: 'medium' as const,
    },
  ];

  const orderQueue = [
    {
      id: '3',
      userName: 'Amit Patel',
      itemType: 'order' as const,
      description: 'Order dispute - Quality issue',
      submittedAt: '2024-01-16',
      priority: 'high' as const,
    },
  ];

  const disputeQueue = [
    {
      id: '4',
      userName: 'Sneha Reddy',
      itemType: 'dispute' as const,
      description: 'Payment dispute - Service not delivered',
      submittedAt: '2024-01-17',
      priority: 'high' as const,
    },
  ];

  type QueueItem = {
    id: string;
    userName: string;
    itemType: 'verification' | 'order' | 'dispute';
    description: string;
    submittedAt: string;
    priority: 'low' | 'medium' | 'high';
  };

  const getQueueData = (): QueueItem[] => {
    switch (activeTab) {
      case 'Verification':
        return verificationQueue;
      case 'Orders':
        return orderQueue;
      case 'Disputes':
        return disputeQueue;
      default:
        return [];
    }
  };

  return (
    <AppContainer>
      <ScreenWrapper>
        <View style={styles.container}>
          <Text style={styles.title}>Admin Dashboard</Text>
          <AdminTabSwitcher
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <FlatList
            data={getQueueData()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <AdminQueueCard
                itemId={item.id}
                userName={item.userName}
                itemType={item.itemType}
                description={item.description}
                submittedAt={item.submittedAt}
                priority={item.priority}
                onApprove={() => onApprove?.(item.id, item.itemType)}
                onReject={() => onReject?.(item.id, item.itemType)}
                onViewDetails={() => onViewDetails?.(item.id, item.itemType)}
              />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No items in queue</Text>
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
  title: {
    ...typography.h1,
    color: colors.text,
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.screenPadding,
    paddingTop: spacing.md,
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
