import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface ChipProps {
  label: string;
  onPress?: () => void;
  selected?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function Chip({
  label,
  onPress,
  selected = false,
  variant = 'outline',
}: ChipProps) {
  const isPressable = !!onPress;

  const content = (
    <Text
      style={[
        styles.text,
        variant === 'primary' && styles.primaryText,
        variant === 'secondary' && styles.secondaryText,
        variant === 'outline' && selected && styles.selectedText,
      ]}
    >
      {label}
    </Text>
  );

  if (isPressable) {
    return (
      <TouchableOpacity
        style={[
          styles.chip,
          variant === 'primary' && styles.primaryChip,
          variant === 'secondary' && styles.secondaryChip,
          variant === 'outline' && selected && styles.selectedChip,
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[
        styles.chip,
        variant === 'primary' && styles.primaryChip,
        variant === 'secondary' && styles.secondaryChip,
        variant === 'outline' && selected && styles.selectedChip,
      ]}
    >
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: spacing.chipPadding,
    paddingVertical: spacing.xs,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignSelf: 'flex-start',
  },
  primaryChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  secondaryChip: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  selectedChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    ...typography.chip,
    color: colors.textSecondary,
  },
  primaryText: {
    color: colors.text,
  },
  secondaryText: {
    color: colors.background,
  },
  selectedText: {
    color: colors.text,
  },
});
