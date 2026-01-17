import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import ChatBubble from '../../components/chat/ChatBubble';
import ChatInputBar from '../../components/chat/ChatInputBar';
import QuickReplyChips from '../../components/chat/QuickReplyChips';
import SystemWarningMessage from '../../components/chat/SystemWarningMessage';
import { mockChats, quickReplies } from '../../mock/chats';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface ChatScreenProps {
  chatId?: string;
  onSendMessage?: (message: string) => void;
}

export default function ChatScreen({ chatId, onSendMessage }: ChatScreenProps) {
  const [messages, setMessages] = useState(
    mockChats[0]?.messages || []
  );

  const currentUser = { id: '1', name: 'Rajesh Kumar' };

  const handleSend = (message: string) => {
    const newMessage = {
      id: Date.now().toString(),
      senderId: currentUser.id,
      senderName: currentUser.name,
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    onSendMessage?.(message);
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  return (
    <AppContainer>
      <View style={styles.container}>
        <ScreenWrapper scrollable={false}>
          <View style={styles.content}>
            <SystemWarningMessage
              message="Please complete your order within 48 hours to avoid cancellation"
              type="warning"
            />
            <FlatList
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ChatBubble
                  message={item.message}
                  isOwn={item.senderId === currentUser.id}
                  timestamp={item.timestamp}
                  senderName={
                    item.senderId !== currentUser.id ? item.senderName : undefined
                  }
                />
              )}
              contentContainerStyle={styles.messagesContent}
              inverted={false}
            />
            <QuickReplyChips
              replies={quickReplies}
              onReplyPress={handleQuickReply}
            />
          </View>
        </ScreenWrapper>
        <ChatInputBar onSend={handleSend} />
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  messagesContent: {
    padding: spacing.screenPadding,
  },
});
