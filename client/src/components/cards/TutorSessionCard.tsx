import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import Badge from '../ui/Badge';

interface TutorSessionCardProps {
  tutorName: string;
  subject: string;
  duration: string;
  price: number;
  rating?: number;
  availableSlots?: string[];
  onPress?: () => void;
}

export default function TutorSessionCard({
  tutorName,
  subject,
  duration,
  price,
  rating,
  availableSlots,
  onPress,
}: TutorSessionCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <View style={styles.tutorInfo}>
          <Text style={styles.tutorName}>{tutorName}</Text>
          {rating && (
            <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
          )}
        </View>
        <Badge label={subject} variant="info" />
      </View>
      <Text style={styles.duration}>Duration: {duration}</Text>
      {availableSlots && availableSlots.length > 0 && (
        <View style={styles.slotsContainer}>
          <Text style={styles.slotsLabel}>Available:</Text>
          <View style={styles.slots}>
            {availableSlots.slice(0, 3).map((slot, index) => (
              <View key={index} style={[styles.slotChip, { marginHorizontal: spacing.xs / 2, marginVertical: spacing.xs / 2 }]}>
                <Text style={styles.slotText}>{slot}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
      <View style={styles.footer}>
        <Text style={styles.price}>₹{price}/session</Text>
        <Text style={styles.bookText}>Book Now →</Text>
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
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  tutorInfo: {
    flex: 1,
  },
  tutorName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  rating: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  duration: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  slotsContainer: {
    marginBottom: spacing.md,
  },
  slotsLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  slots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -spacing.xs / 2,
  },
  slotChip: {
    backgroundColor: colors.surfaceElevated,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  slotText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  price: {
    ...typography.h4,
    color: colors.primary,
    fontWeight: '600',
  },
  bookText: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
});
