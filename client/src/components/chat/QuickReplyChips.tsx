import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface QuickReplyChipsProps {
  replies: string[];
  onReplyPress: (reply: string) => void;
}

export default function QuickReplyChips({
  replies,
  onReplyPress,
}: QuickReplyChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {replies.map((reply, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.chip, index < replies.length - 1 && { marginRight: spacing.sm }]}
          onPress={() => onReplyPress(reply)}
          activeOpacity={0.7}
        >
          <Text style={styles.chipText}>{reply}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  chip: {
    backgroundColor: colors.surfaceElevated,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipText: {
    ...typography.bodySmall,
    color: colors.text,
  },
});
