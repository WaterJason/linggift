export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  maker?: string;
  artist?: string;
  type: 'product' | 'design';
  likes?: number;
  badge?: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface Maker {
  id: string;
  name: string;
  image: string;
}

export interface Review {
  id: string;
  userName: string;
  userType: string;
  avatar: string;
  productImage: string;
  rating: number;
  text: string;
  title: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CreateOption {
  id: string;
  name: string;
  category: 'Home' | 'Jewelry' | 'Accessories';
  image: string;
}

export interface DesignStyle {
  id: string;
  name: string;
  image: string;
}

export interface GeneratedResult {
  id: string;
  title: string;
  image: string;
  price: number;
  makerName: string;
  makerLogo: string;
  rating: number;
  deliveryDate: string;
  variantCount: number;
}
