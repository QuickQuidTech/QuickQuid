import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import Badge from '../ui/Badge';

interface CommunityPostCardProps {
  authorName: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
  category?: string;
  onPress?: () => void;
}

export default function CommunityPostCard({
  authorName,
  title,
  content,
  likes,
  comments,
  timestamp,
  category,
  onPress,
}: CommunityPostCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <Text style={styles.authorName}>{authorName}</Text>
        {category && <Badge label={category} variant="info" />}
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.content} numberOfLines={3}>
        {content}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.timestamp}>{timestamp}</Text>
          <View style={styles.engagement}>
            <Text style={[styles.engagementText, { marginRight: spacing.md }]}>👍 {likes}</Text>
            <Text style={styles.engagementText}>💬 {comments}</Text>
          </View>
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
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  authorName: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
  title: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  content: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timestamp: {
    ...typography.caption,
    color: colors.textTertiary,
  },
  engagement: {
    flexDirection: 'row',
  },
  engagementText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
