import { Category, Product, Review, Maker, CreateOption, DesignStyle, GeneratedResult } from './types';

// Only Jewelry Categories
export const CATEGORIES: Category[] = [
  {
    id: '1',
    title: 'Rings',
    subtitle: 'Gold, Silver, & Gemstones',
    image: 'https://picsum.photos/seed/rings_cat/400/500'
  },
  {
    id: '2',
    title: 'Necklaces',
    subtitle: 'Chains, Pendants, & Pearls',
    image: 'https://picsum.photos/seed/necklaces_cat/400/500'
  },
  {
    id: '3',
    title: 'Earrings',
    subtitle: 'Studs, Hoops, & Drops',
    image: 'https://picsum.photos/seed/earrings_cat/400/500'
  },
  {
    id: '4',
    title: 'Bracelets',
    subtitle: 'Bangles & Tennis Bracelets',
    image: 'https://picsum.photos/seed/bracelets_cat/400/500'
  },
  {
    id: '5',
    title: 'Charms',
    subtitle: 'Personalized Add-ons',
    image: 'https://picsum.photos/seed/charms_cat/400/500'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'f1',
    title: 'Solitaire Diamond Ring',
    maker: 'Linghua',
    artist: 'Signature Collection',
    price: 1250,
    image: 'https://picsum.photos/seed/ring_gold/300/300',
    type: 'product',
    likes: 12
  },
  {
    id: 'f2',
    title: 'Emerald Pendant Necklace',
    maker: 'Linghua',
    artist: 'Signature Collection',
    price: 890,
    image: 'https://picsum.photos/seed/necklace_emerald/300/300',
    type: 'product',
    likes: 8
  },
  {
    id: 'f3',
    title: 'Pearl Drop Earrings',
    maker: 'Linghua',
    artist: 'Signature Collection',
    price: 450,
    image: 'https://picsum.photos/seed/earrings_pearl/300/300',
    type: 'product',
    likes: 15
  },
  {
    id: 'f4',
    title: 'Gold Tennis Bracelet',
    maker: 'Linghua',
    artist: 'Signature Collection',
    price: 2100,
    image: 'https://picsum.photos/seed/bracelet_gold/300/300',
    type: 'product',
    likes: 9
  }
];

export const MAKERS: Maker[] = [
  {
    id: 'm1',
    name: 'Linghua',
    image: 'https://picsum.photos/seed/linghua_maker/400/500'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'Sophie',
    userType: 'Verified Buyer',
    avatar: 'https://picsum.photos/seed/user1/100/100',
    productImage: 'https://picsum.photos/seed/review_ring/400/400',
    title: 'Custom Gold Band',
    text: "I changed the color to Rose Gold and it looks absolutely stunning. The classic shape is exactly what I wanted from Linghua.",
    rating: 5
  },
  {
    id: 'r2',
    userName: 'Michael',
    userType: 'Verified Buyer',
    avatar: 'https://picsum.photos/seed/user2/100/100',
    productImage: 'https://picsum.photos/seed/review_cufflinks/400/400',
    title: 'Silver Cufflinks',
    text: "The silver finish is perfect. Simple, elegant, and timeless craftsmanship.",
    rating: 5
  },
  {
    id: 'r3',
    userName: 'Elena',
    userType: 'VIP Member',
    avatar: 'https://picsum.photos/seed/user3/100/100',
    productImage: 'https://picsum.photos/seed/review_necklace/400/400',
    title: 'Sapphire Pendant',
    text: "I requested a deep blue sapphire instead of the standard diamond, and it's beautiful.",
    rating: 5
  }
];

export const EXPLORE_FILTERS = ['New Arrivals', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Men\'s Jewelry'];

export const EXPLORE_PRODUCTS: Product[] = [
  {
    id: 'e1',
    title: 'Classic Gold Band',
    artist: 'Classic Series',
    maker: 'Linghua',
    price: 550,
    image: 'https://picsum.photos/seed/band_ring/400/400',
    type: 'product',
    likes: 22
  },
  {
    id: 'e2',
    title: 'Silver Hoop Earrings',
    artist: 'Classic Series',
    maker: 'Linghua',
    price: 120,
    image: 'https://picsum.photos/seed/hoops/400/400',
    type: 'product',
    likes: 18
  },
  {
    id: 'e3',
    title: 'Diamond Studs',
    artist: 'Classic Series',
    maker: 'Linghua',
    price: 800,
    image: 'https://picsum.photos/seed/studs/400/400',
    type: 'product',
    likes: 45
  },
  {
    id: 'e4',
    title: 'Chain Necklace',
    artist: 'Classic Series',
    maker: 'Linghua',
    price: 350,
    image: 'https://picsum.photos/seed/chain/400/400',
    type: 'product',
    likes: 12
  }
];

export const CREATE_OPTS: CreateOption[] = [
  { id: 'j1', name: 'Ring', category: 'Jewelry', image: 'https://picsum.photos/seed/ring_opt/300/300' },
  { id: 'j2', name: 'Necklace', category: 'Jewelry', image: 'https://picsum.photos/seed/necklace_opt/300/300' },
  { id: 'j3', name: 'Earrings', category: 'Jewelry', image: 'https://picsum.photos/seed/earrings_opt/300/300' },
  { id: 'j4', name: 'Bracelet', category: 'Jewelry', image: 'https://picsum.photos/seed/bracelet_opt/300/300' },
  { id: 'j5', name: 'Charm', category: 'Jewelry', image: 'https://picsum.photos/seed/charm_opt/300/300' },
  { id: 'j6', name: 'Cufflinks', category: 'Jewelry', image: 'https://picsum.photos/seed/cufflinks_opt/300/300' },
];

export const DESIGN_STYLES: DesignStyle[] = [
  { id: 'c1', name: 'Yellow Gold', image: 'https://picsum.photos/seed/gold_tex/200/200' },
  { id: 'c2', name: 'White Gold', image: 'https://picsum.photos/seed/silver_tex/200/200' },
  { id: 'c3', name: 'Rose Gold', image: 'https://picsum.photos/seed/rosegold_tex/200/200' },
  { id: 'c4', name: 'Platinum', image: 'https://picsum.photos/seed/platinum_tex/200/200' },
  { id: 'c5', name: 'Ruby Red', image: 'https://picsum.photos/seed/ruby_tex/200/200' },
  { id: 'c6', name: 'Sapphire Blue', image: 'https://picsum.photos/seed/sapphire_tex/200/200' },
  { id: 'c7', name: 'Emerald Green', image: 'https://picsum.photos/seed/emerald_tex/200/200' },
  { id: 'c8', name: 'Onyx Black', image: 'https://picsum.photos/seed/onyx_tex/200/200' },
  { id: 'c9', name: 'Pearl White', image: 'https://picsum.photos/seed/pearl_tex/200/200' },
  { id: 'c10', name: 'Turquoise', image: 'https://picsum.photos/seed/turquoise_tex/200/200' },
];

export const GENERATED_RESULTS: GeneratedResult[] = [
  { 
    id: 'g1', 
    title: 'Classic Ring in Gold', 
    image: 'https://picsum.photos/seed/res_ring_gold/500/500', 
    price: 450, 
    makerName: 'Linghua', 
    makerLogo: 'https://picsum.photos/seed/logo1/50/50',
    rating: 5,
    deliveryDate: 'Dec 25',
    variantCount: 0
  }
];