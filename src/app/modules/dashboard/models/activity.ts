export interface Activity {
  id: number;
  title: string;
  last_bid?: number;
  price: number;
  creator?: string;
  avatar?: string;
  instant_price?: number;
  date?: string;
  location?: string;
  image: string;
}
