export interface Order {
  id: string;
  serviceId: string;
  serviceName: string;
  buyerId: string;
  buyerName: string;
  sellerId: string;
  sellerName: string;
  amount: number;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  createdAt: string;
  deadline?: string;
  completedAt?: string;
}

export const mockOrders: Order[] = [
  {
    id: '1',
    serviceId: '1',
    serviceName: 'Website Development',
    buyerId: '1',
    buyerName: 'Rajesh Kumar',
    sellerId: '2',
    sellerName: 'Priya Sharma',
    amount: 5000,
    status: 'active',
    createdAt: '2024-01-15',
    deadline: '2024-01-30',
  },
  {
    id: '2',
    serviceId: '2',
    serviceName: 'Mathematics Tutoring',
    buyerId: '3',
    buyerName: 'Amit Patel',
    sellerId: '4',
    sellerName: 'Sneha Reddy',
    amount: 800,
    status: 'completed',
    createdAt: '2024-01-10',
    completedAt: '2024-01-20',
  },
  {
    id: '3',
    serviceId: '3',
    serviceName: 'Logo Design',
    buyerId: '1',
    buyerName: 'Rajesh Kumar',
    sellerId: '2',
    sellerName: 'Priya Sharma',
    amount: 2000,
    status: 'pending',
    createdAt: '2024-01-18',
  },
  {
    id: '4',
    serviceId: '4',
    serviceName: 'Content Writing',
    buyerId: '3',
    buyerName: 'Amit Patel',
    sellerId: '4',
    sellerName: 'Sneha Reddy',
    amount: 1500,
    status: 'active',
    createdAt: '2024-01-12',
    deadline: '2024-01-25',
  },
];
