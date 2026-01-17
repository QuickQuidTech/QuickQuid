import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import ServiceCard from '../cards/ServiceCard';

interface SuggestedServicesCarouselProps {
  services: Array<{
    id: string;
    title: string;
    description: string;
    price: number;
    sellerName: string;
    rating?: number;
  }>;
  onServicePress?: (serviceId: string) => void;
}

export default function SuggestedServicesCarousel({
  services,
  onServicePress,
}: SuggestedServicesCarouselProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggested Services</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {services.map((service) => (
          <View key={service.id} style={styles.cardWrapper}>
            <ServiceCard
              title={service.title}
              description={service.description}
              price={service.price}
              sellerName={service.sellerName}
              rating={service.rating}
              onPress={() => onServicePress?.(service.id)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.sectionGap,
  },
  title: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.md,
  },
  scrollContent: {
    paddingRight: spacing.md,
  },
  cardWrapper: {
    width: 320,
    marginRight: spacing.md,
  },
});
