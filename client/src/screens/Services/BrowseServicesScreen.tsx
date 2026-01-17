import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import ServiceCard from '../../components/cards/ServiceCard';
import { mockServices } from '../../mock/services';
import { spacing } from '../../theme/spacing';

interface BrowseServicesScreenProps {
  onServicePress?: (serviceId: string) => void;
}

export default function BrowseServicesScreen({
  onServicePress,
}: BrowseServicesScreenProps) {
  return (
    <AppContainer>
      <ScreenWrapper scrollable={false}>
        <FlatList
          data={mockServices}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ServiceCard
              title={item.title}
              description={item.description}
              price={item.price}
              sellerName={item.sellerName}
              rating={item.rating}
              onPress={() => onServicePress?.(item.id)}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </ScreenWrapper>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  listContent: {
    padding: spacing.screenPadding,
  },
});
