export interface OhlcvLast1Hour {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface OhlcvLast24Hour {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface MarketData {
  price_usd: number;
  price_btc: number;
  price_eth: number;
  volume_last_24_hours: number;
  real_volume_last_24_hours: number;
  volume_last_24_hours_overstatement_multiple: number;
  percent_change_usd_last_1_hour: number;
  percent_change_btc_last_1_hour: number;
  percent_change_eth_last_1_hour: number;
  percent_change_usd_last_24_hours: number;
  percent_change_btc_last_24_hours: number;
  percent_change_eth_last_24_hours: number;
  ohlcv_last_1_hour: OhlcvLast1Hour;
  ohlcv_last_24_hour: OhlcvLast24Hour;
  last_trade_at: string;
}

export interface Data {
  id: string;
  symbol: string;
  name: string;
  slug: string;
  contract_addresses?: any;
  _internal_temp_agora_id: string;
  market_data: MarketData;
}
