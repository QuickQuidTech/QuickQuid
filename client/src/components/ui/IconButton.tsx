import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface IconButtonProps {
  onPress: () => void;
  icon?: React.ReactNode;
  size?: number;
  backgroundColor?: string;
  disabled?: boolean;
  label?: string;
}

export default function IconButton({
  onPress,
  icon,
  size = 48,
  backgroundColor = colors.surface,
  disabled = false,
  label,
}: IconButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { width: size, height: size, backgroundColor }]}>
        {icon}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: 12,
  },
});
