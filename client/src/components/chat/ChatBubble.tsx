import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface ChatBubbleProps {
  message: string;
  isOwn: boolean;
  timestamp?: string;
  senderName?: string;
}

export default function ChatBubble({
  message,
  isOwn,
  timestamp,
  senderName,
}: ChatBubbleProps) {
  return (
    <View style={[styles.container, isOwn ? styles.ownContainer : styles.otherContainer]}>
      {!isOwn && senderName && (
        <Text style={styles.senderName}>{senderName}</Text>
      )}
      <View
        style={[
          styles.bubble,
          isOwn ? styles.ownBubble : styles.otherBubble,
        ]}
      >
        <Text
          style={[
            styles.message,
            isOwn ? styles.ownMessage : styles.otherMessage,
          ]}
        >
          {message}
        </Text>
      </View>
      {timestamp && (
        <Text
          style={[
            styles.timestamp,
            isOwn ? styles.ownTimestamp : styles.otherTimestamp,
          ]}
        >
          {timestamp}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
    maxWidth: '80%',
  },
  ownContainer: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  otherContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  senderName: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  bubble: {
    borderRadius: 16,
    padding: spacing.md,
  },
  ownBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 4,
  },
  otherBubble: {
    backgroundColor: colors.surfaceElevated,
    borderBottomLeftRadius: 4,
  },
  message: {
    ...typography.body,
  },
  ownMessage: {
    color: colors.text,
  },
  otherMessage: {
    color: colors.text,
  },
  timestamp: {
    ...typography.caption,
    marginTop: spacing.xs,
    paddingHorizontal: spacing.xs,
  },
  ownTimestamp: {
    color: colors.textTertiary,
  },
  otherTimestamp: {
    color: colors.textTertiary,
  },
});
