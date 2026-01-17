export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  phone?: string;
  avatar?: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    role: 'buyer',
    phone: '+91 98765 43210',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    role: 'seller',
    phone: '+91 98765 43211',
  },
  {
    id: '3',
    name: 'Amit Patel',
    email: 'amit.patel@example.com',
    role: 'buyer',
    phone: '+91 98765 43212',
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    role: 'seller',
    phone: '+91 98765 43213',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    role: 'admin',
    phone: '+91 98765 43214',
  },
];
