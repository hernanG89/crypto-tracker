export type Asset = {
  id: string;
  name: string;
  symbol: string;
  marketData?: {
    price: number;
    percentageChangeLast24Hours: number;
  };
};
