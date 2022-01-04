export type Asset = {
  id: string;
  name: string;
  symbol: string;
  image?: string;
  marketData?: {
    price: number;
    percentageChangeLast24Hours: number;
  };
};
