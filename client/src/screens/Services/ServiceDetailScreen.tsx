import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Badge from '../../components/ui/Badge';
import Divider from '../../components/ui/Divider';
import { mockServices } from '../../mock/services';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

type RootStackParamList = {
  ServiceDetail: { serviceId?: string };
  Payment: { order: any };
};

type ServiceDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ServiceDetail'
>;

export default function ServiceDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation<ServiceDetailScreenNavigationProp>();
  const { serviceId } = (route.params as any) || {};
  const service = serviceId
    ? mockServices.find((s) => s.id === serviceId) || mockServices[0]
    : mockServices[0];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const imagePlaceholders = ['📦', '💼', '🎨'];

  return (
    <AppContainer>
      <ScreenWrapper>
        <View style={styles.container}>
          <View style={styles.imageCarousel}>
            <View style={styles.imageContainer}>
              <Text style={styles.imagePlaceholder}>
                {imagePlaceholders[selectedImageIndex]}
              </Text>
            </View>
            <View style={styles.imageIndicators}>
              {imagePlaceholders.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    index === selectedImageIndex && styles.activeIndicator,
                    index < imagePlaceholders.length - 1 && { marginRight: spacing.xs },
                  ]}
                />
              ))}
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>{service.title}</Text>
              {service.rating && (
                <Badge label={`⭐ ${service.rating.toFixed(1)}`} variant="warning" />
              )}
            </View>
            <Text style={styles.category}>{service.category}</Text>
            <Text style={styles.seller}>Seller: {service.sellerName}</Text>
            <Divider />
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{service.description}</Text>
            <Divider />
            <Text style={styles.sectionTitle}>Proof of Work</Text>
            <View style={styles.proofContainer}>
              <Text style={styles.proofText}>
                ✅ 50+ completed projects
              </Text>
              <Text style={styles.proofText}>
                ✅ {service.reviews || 0} positive reviews
              </Text>
              <Text style={styles.proofText}>
                ✅ Verified seller
              </Text>
            </View>
            <Divider />
            <View style={styles.pricingContainer}>
              <Text style={styles.sectionTitle}>Pricing Breakdown</Text>
              <View style={styles.pricingRow}>
                <Text style={styles.pricingLabel}>Service Price</Text>
                <Text style={styles.pricingValue}>₹{service.price}</Text>
              </View>
              <View style={styles.pricingRow}>
                <Text style={styles.pricingLabel}>Platform Fee (10%)</Text>
                <Text style={styles.pricingValue}>
                  ₹{(service.price * 0.1).toFixed(2)}
                </Text>
              </View>
              <Divider />
              <View style={styles.pricingRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>
                  ₹{(service.price * 1.1).toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                title="Place Order"
                onPress={() => {
                  navigation.navigate('Payment', {
                    order: {
                      id: service.id,
                      serviceName: service.title,
                      amount: service.price,
                      platformFee: service.price * 0.1,
                      total: service.price * 1.1,
                    },
                  });
                }}
                fullWidth={true}
              />
            </View>
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
  imageCarousel: {
    width: '100%',
    height: 300,
    backgroundColor: colors.surfaceElevated,
    position: 'relative',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    fontSize: 96,
  },
  imageIndicators: {
    position: 'absolute',
    bottom: spacing.md,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  activeIndicator: {
    backgroundColor: colors.primary,
    width: 24,
  },
  content: {
    padding: spacing.screenPadding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    flex: 1,
    marginRight: spacing.md,
  },
  category: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  seller: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.md,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 24,
  },
  proofContainer: {
    marginBottom: spacing.md,
  },
  proofText: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  pricingContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.cardPadding,
    marginBottom: spacing.xl,
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  pricingLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },
  pricingValue: {
    ...typography.body,
    color: colors.text,
    fontWeight: '500',
  },
  totalLabel: {
    ...typography.h4,
    color: colors.text,
  },
  totalValue: {
    ...typography.h3,
    color: colors.primary,
    fontWeight: '700',
  },
  buttonContainer: {
    marginBottom: spacing.xl,
  },
});
