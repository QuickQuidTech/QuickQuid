import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import IncomingOrderCard from '../../components/cards/IncomingOrderCard';
import OrderCard from '../../components/cards/OrderCard';
import EarningsSummaryWidget from '../../components/widgets/EarningsSummaryWidget';
import TrustScoreWidget from '../../components/widgets/TrustScoreWidget';
import CapacityIndicator from '../../components/widgets/CapacityIndicator';
import { mockOrders } from '../../mock';

interface SellerHomeScreenProps {
  onAcceptOrder?: (orderId: string) => void;
  onDeclineOrder?: (orderId: string) => void;
  onViewOrder?: (orderId: string) => void;
}

export default function SellerHomeScreen({
  onAcceptOrder,
  onDeclineOrder,
  onViewOrder,
}: SellerHomeScreenProps) {
  const incomingOrders = mockOrders.filter((order) => order.status === 'pending');
  const activeOrders = mockOrders.filter((order) => order.status === 'active');
  const completedOrders = mockOrders.filter((order) => order.status === 'completed');

  return (
    <AppContainer>
      <ScreenWrapper>
        <View style={styles.container}>
          <TrustScoreWidget
            score={85}
            completedOrders={completedOrders.length}
            ratings={4.8}
            responseTime="< 2 hrs"
          />
          <CapacityIndicator
            current={activeOrders.length}
            max={10}
            label="Active Orders"
          />
          <EarningsSummaryWidget
            totalEarnings={25000}
            thisMonth={8000}
            pendingPayouts={5000}
            completedOrders={completedOrders.length}
          />
          {incomingOrders.length > 0 && (
            <View style={styles.section}>
              <IncomingOrderCard
                orderId={incomingOrders[0].id}
                buyerName={incomingOrders[0].buyerName}
                serviceName={incomingOrders[0].serviceName}
                amount={incomingOrders[0].amount}
                deadline={incomingOrders[0].deadline || '2024-01-30'}
                onAccept={() => onAcceptOrder?.(incomingOrders[0].id)}
                onDecline={() => onDeclineOrder?.(incomingOrders[0].id)}
              />
            </View>
          )}
          <View style={styles.section}>
            {activeOrders.map((order) => (
              <OrderCard
                key={order.id}
                orderId={order.id}
                serviceName={order.serviceName}
                sellerName={order.sellerName}
                amount={order.amount}
                status={order.status}
                createdAt={order.createdAt}
                onPress={() => onViewOrder?.(order.id)}
              />
            ))}
          </View>
        </View>
      </ScreenWrapper>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
});
