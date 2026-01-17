import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Divider from '../../components/ui/Divider';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export default function PaymentScreen() {
  const route = useRoute();
  const { order } = (route.params as any) || {
    order: {
      id: '1',
      serviceName: 'Sample Service',
      amount: 1000,
      platformFee: 100,
      total: 1100,
    },
  };
  return (
    <AppContainer>
      <ScreenWrapper>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Order Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Service</Text>
              <Text style={styles.summaryValue}>{order.serviceName}</Text>
            </View>
            <Divider />
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Service Price</Text>
              <Text style={styles.summaryValue}>₹{order.amount}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Platform Fee (10%)</Text>
              <Text style={styles.summaryValue}>₹{order.platformFee}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Processing Fee</Text>
              <Text style={styles.summaryValue}>₹0</Text>
            </View>
            <Divider />
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalValue}>₹{order.total}</Text>
            </View>
          </View>
          <View style={styles.paymentMethodSection}>
            <Text style={styles.sectionTitle}>Payment Method</Text>
            <TouchableOpacity style={styles.paymentMethodCard} activeOpacity={0.7}>
              <View style={styles.paymentMethodContent}>
                <Text style={styles.paymentIcon}>📱</Text>
                <View style={styles.paymentMethodInfo}>
                  <Text style={styles.paymentMethodName}>PhonePe</Text>
                  <Text style={styles.paymentMethodDesc}>
                    Pay securely with PhonePe
                  </Text>
                </View>
                <Text style={styles.radio}>✓</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={`Pay ₹${order.total.toFixed(2)}`}
              onPress={() => {
                // Payment logic would go here
                console.log('Payment processed');
              }}
              fullWidth={true}
            />
          </View>
          <Text style={styles.note}>
            By proceeding, you agree to our terms and conditions
          </Text>
        </View>
      </ScreenWrapper>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.screenPadding,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.cardPadding,
    marginBottom: spacing.sectionGap,
  },
  cardTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  summaryLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },
  summaryValue: {
    ...typography.body,
    color: colors.text,
    fontWeight: '500',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  totalLabel: {
    ...typography.h4,
    color: colors.text,
  },
  totalValue: {
    ...typography.h2,
    color: colors.primary,
    fontWeight: '700',
  },
  paymentMethodSection: {
    marginBottom: spacing.sectionGap,
  },
  sectionTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.md,
  },
  paymentMethodCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.cardPadding,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  paymentMethodContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  paymentMethodInfo: {
    flex: 1,
  },
  paymentMethodName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  paymentMethodDesc: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  radio: {
    fontSize: 24,
    color: colors.primary,
  },
  buttonContainer: {
    marginBottom: spacing.md,
  },
  note: {
    ...typography.caption,
    color: colors.textTertiary,
    textAlign: 'center',
  },
});
