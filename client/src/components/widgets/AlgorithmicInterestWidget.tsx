import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import Chip from '../ui/Chip';

interface AlgorithmicInterestWidgetProps {
  interests: string[];
  selectedInterests: string[];
  onInterestPress?: (interest: string) => void;
}

export default function AlgorithmicInterestWidget({
  interests,
  selectedInterests = [],
  onInterestPress,
}: AlgorithmicInterestWidgetProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interests for You</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {interests.map((interest, index) => {
          const isSelected = selectedInterests.includes(interest);
          return (
            <View key={index} style={{ marginRight: spacing.sm }}>
              <Chip
                label={interest}
                selected={isSelected}
                variant={isSelected ? 'primary' : 'outline'}
                onPress={() => onInterestPress?.(interest)}
              />
            </View>
          );
        })}
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
    paddingLeft: spacing.md,
  },
});
