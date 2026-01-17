export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: string;
  isSystem?: boolean;
}

export interface Chat {
  id: string;
  orderId: string;
  buyerId: string;
  buyerName: string;
  sellerId: string;
  sellerName: string;
  messages: Message[];
}

export const mockChats: Chat[] = [
  {
    id: '1',
    orderId: '1',
    buyerId: '1',
    buyerName: 'Rajesh Kumar',
    sellerId: '2',
    sellerName: 'Priya Sharma',
    messages: [
      {
        id: '1',
        senderId: '1',
        senderName: 'Rajesh Kumar',
        message: 'Hello! I need a website for my business.',
        timestamp: '2024-01-15 10:00',
      },
      {
        id: '2',
        senderId: '2',
        senderName: 'Priya Sharma',
        message: 'Hi Rajesh! I can help you with that. What kind of website are you looking for?',
        timestamp: '2024-01-15 10:05',
      },
      {
        id: '3',
        senderId: '1',
        senderName: 'Rajesh Kumar',
        message: 'A simple e-commerce website with product listings.',
        timestamp: '2024-01-15 10:10',
      },
      {
        id: '4',
        senderId: '2',
        senderName: 'Priya Sharma',
        message: 'Perfect! I can create that for you. Let me start working on it.',
        timestamp: '2024-01-15 10:15',
      },
    ],
  },
  {
    id: '2',
    orderId: '2',
    buyerId: '3',
    buyerName: 'Amit Patel',
    sellerId: '4',
    sellerName: 'Sneha Reddy',
    messages: [
      {
        id: '5',
        senderId: '3',
        senderName: 'Amit Patel',
        message: 'Hi! I need help with calculus.',
        timestamp: '2024-01-10 14:00',
      },
      {
        id: '6',
        senderId: '4',
        senderName: 'Sneha Reddy',
        message: 'Hello Amit! I specialize in mathematics. What topics do you need help with?',
        timestamp: '2024-01-10 14:05',
      },
    ],
  },
];

export const quickReplies = [
  "Yes, that works for me",
  "I'll get back to you",
  "Thanks for your help",
  "Can we discuss this further?",
  "Perfect!",
];
