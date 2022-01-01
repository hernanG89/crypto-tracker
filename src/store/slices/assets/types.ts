export type Asset = {
  id: string;
  name: string;
  slug: string;
  symbol: string;
  marketData?: {
    priceUSD: number;
    percentageChangeLast24HoursUSD: number;
  };
};
