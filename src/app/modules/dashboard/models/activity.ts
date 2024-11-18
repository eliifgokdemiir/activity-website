export interface Activity {
  id: number;
  title: string;
  type: string;
  price: number;
  creator: string;
  creatorDescription?: string;
  avatar?: string;
  instant_price?: number;
  date?: string;
  time?: string;
  location?: string;
  image: string;
  seatingType?: 'numbered' | 'free';
  rules?: string[];
  ticketTypes?: {
    type: string;
    price: number;
    available: boolean;
  }[];
}
