export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  sellerId: string;
  sellerName: string;
  category: string;
  rating?: number;
  reviews?: number;
  imageUrl?: string;
}

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Website Development',
    description: 'Professional website development using React and Node.js. Modern, responsive design.',
    price: 5000,
    sellerId: '2',
    sellerName: 'Priya Sharma',
    category: 'Development',
    rating: 4.8,
    reviews: 24,
  },
  {
    id: '2',
    title: 'Mathematics Tutoring',
    description: 'Online tutoring for class 10-12 Mathematics. CBSE and ICSE syllabus.',
    price: 800,
    sellerId: '4',
    sellerName: 'Sneha Reddy',
    category: 'Education',
    rating: 4.9,
    reviews: 18,
  },
  {
    id: '3',
    title: 'Logo Design',
    description: 'Creative logo design for your business. Multiple revisions included.',
    price: 2000,
    sellerId: '2',
    sellerName: 'Priya Sharma',
    category: 'Design',
    rating: 4.7,
    reviews: 31,
  },
  {
    id: '4',
    title: 'Content Writing',
    description: 'SEO-optimized blog posts and articles. 1000 words per article.',
    price: 1500,
    sellerId: '4',
    sellerName: 'Sneha Reddy',
    category: 'Writing',
    rating: 4.6,
    reviews: 15,
  },
  {
    id: '5',
    title: 'Data Entry Services',
    description: 'Accurate and fast data entry services. Excel and Google Sheets.',
    price: 500,
    sellerId: '2',
    sellerName: 'Priya Sharma',
    category: 'Admin',
    rating: 4.5,
    reviews: 42,
  },
  {
    id: '6',
    title: 'Video Editing',
    description: 'Professional video editing for YouTube, Instagram. Color grading included.',
    price: 3000,
    sellerId: '4',
    sellerName: 'Sneha Reddy',
    category: 'Media',
    rating: 4.9,
    reviews: 27,
  },
];
