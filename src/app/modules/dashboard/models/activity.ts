export interface Activity {
  id: number;
  title: string;
  price: number;
  creator?: string;
  avatar?: string;
  instant_price?: number;
  date?: string;
  time?: string;
  location?: string;
  image: string;
}
