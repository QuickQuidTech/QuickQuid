import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import OrderOverviewWidget from '../../components/widgets/OrderOverviewWidget';
import AlgorithmicInterestWidget from '../../components/widgets/AlgorithmicInterestWidget';
import SuggestedServicesCarousel from '../../components/widgets/SuggestedServicesCarousel';
import { mockOrders, mockServices } from '../../mock';

interface BuyerHomeScreenProps {
  onViewOrder?: (orderId: string) => void;
  onViewService?: (serviceId: string) => void;
  onViewAllOrders?: () => void;
}

export default function BuyerHomeScreen({
  onViewOrder,
  onViewService,
  onViewAllOrders,
}: BuyerHomeScreenProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    'Web Development',
    'Design',
    'Writing',
    'Tutoring',
    'Video Editing',
    'Marketing',
  ];

  const buyerOrders = mockOrders.filter((order) => order.status !== 'cancelled');

  const handleInterestPress = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <AppContainer>
      <ScreenWrapper>
        <View style={styles.container}>
          <OrderOverviewWidget
            orders={buyerOrders}
            onViewAll={onViewAllOrders}
            onOrderPress={onViewOrder}
          />
          <AlgorithmicInterestWidget
            interests={interests}
            selectedInterests={selectedInterests}
            onInterestPress={handleInterestPress}
          />
          <SuggestedServicesCarousel
            services={mockServices}
            onServicePress={onViewService}
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
});
