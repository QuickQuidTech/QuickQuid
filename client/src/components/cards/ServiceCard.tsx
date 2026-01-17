import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import Badge from '../ui/Badge';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  sellerName: string;
  imageUrl?: string;
  rating?: number;
  onPress?: () => void;
}

export default function ServiceCard({
  title,
  description,
  price,
  sellerName,
  imageUrl,
  rating,
  onPress,
}: ServiceCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>📦</Text>
        </View>
        {rating && (
          <View style={styles.ratingBadge}>
            <Badge label={`⭐ ${rating.toFixed(1)}`} variant="warning" />
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.sellerName}>{sellerName}</Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: spacing.cardMargin,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: colors.surfaceElevated,
    position: 'relative',
  },
  imagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceElevated,
  },
  placeholderText: {
    fontSize: 64,
  },
  ratingBadge: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
  },
  content: {
    padding: spacing.cardPadding,
  },
  title: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sellerName: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  price: {
    ...typography.h4,
    color: colors.primary,
    fontWeight: '600',
  },
});
