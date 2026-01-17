import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl?: string;
  category?: string;
  stock?: number;
  onPress?: () => void;
}

export default function ProductCard({
  name,
  price,
  imageUrl,
  category,
  stock,
  onPress,
}: ProductCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>🛍️</Text>
        </View>
        {category && (
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>₹{price}</Text>
          {stock !== undefined && (
            <Text
              style={[
                styles.stock,
                stock < 10 && styles.lowStock,
              ]}
            >
              {stock > 0 ? `${stock} left` : 'Out of stock'}
            </Text>
          )}
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
    width: '48%',
  },
  imageContainer: {
    width: '100%',
    height: 160,
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
    fontSize: 48,
  },
  categoryBadge: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: colors.overlay,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 8,
  },
  categoryText: {
    ...typography.caption,
    color: colors.text,
  },
  content: {
    padding: spacing.cardPadding,
  },
  name: {
    ...typography.body,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    ...typography.h4,
    color: colors.primary,
    fontWeight: '600',
  },
  stock: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  lowStock: {
    color: colors.error,
  },
});
