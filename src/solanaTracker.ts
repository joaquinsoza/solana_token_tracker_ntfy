import axios from "axios";
import { SOLANA_ADDRESS, BIRDEYE_API_KEY } from "./config.js";

export type SolanaEvent = {
  type: string;
  message: string;
  timestamp: string;
  title: string;
  priority?: string;
  tags?: string;
};

type TokenHolder = {
  amount: string;
  decimals: number;
  mint: string;
  owner: string;
  token_account: string;
  ui_amount: number;
};

type TokenOverview = {
  address: any;
  decimals: any;
  symbol: any;
  name: any;
  marketCap: number;
  fdv: any;
  extensions: {
    description: any;
  };
  logoURI: any;
  liquidity: any;
  lastTradeUnixTime: any;
  lastTradeHumanTime: any;
  price: number;
  history1mPrice: any;
  priceChange1mPercent: any;
  history5mPrice: any;
  priceChange5mPercent: any;
  history30mPrice: any;
  priceChange30mPercent: any;
  history1hPrice: any;
  priceChange1hPercent: any;
  history8hPrice: any;
  priceChange8hPercent: any;
  history24hPrice: any;
  priceChange24hPercent: number;
  uniqueWallet1m: any;
  uniqueWalletHistory1m: any;
  uniqueWallet1mChangePercent: any;
  uniqueWallet5m: any;
  uniqueWalletHistory5m: any;
  uniqueWallet5mChangePercent: any;
  uniqueWallet30m: any;
  uniqueWalletHistory30m: any;
  uniqueWallet30mChangePercent: any;
  uniqueWallet1h: any;
  uniqueWalletHistory1h: any;
  uniqueWallet1hChangePercent: any;
  uniqueWallet8h: any;
  uniqueWalletHistory8h: any;
  uniqueWallet8hChangePercent: any;
  uniqueWallet24h: any;
  uniqueWalletHistory24h: any;
  uniqueWallet24hChangePercent: any;
  totalSupply: any;
  circulatingSupply: any;
  holder: number;
  trade1m: any;
  tradeHistory1m: any;
  trade1mChangePercent: any;
  sell1m: any;
  sellHistory1m: any;
  sell1mChangePercent: any;
  buy1m: any;
  buyHistory1m: any;
  buy1mChangePercent: any;
  v1m: any;
  v1mUSD: any;
  vHistory1m: any;
  vHistory1mUSD: any;
  v1mChangePercent: any;
  vBuy1m: any;
  vBuy1mUSD: any;
  vBuyHistory1m: any;
  vBuyHistory1mUSD: any;
  vBuy1mChangePercent: any;
  vSell1m: any;
  vSell1mUSD: any;
  vSellHistory1m: any;
  vSellHistory1mUSD: any;
  vSell1mChangePercent: any;
  trade5m: any;
  tradeHistory5m: any;
  trade5mChangePercent: any;
  sell5m: any;
  sellHistory5m: any;
  sell5mChangePercent: any;
  buy5m: any;
  buyHistory5m: any;
  buy5mChangePercent: any;
  v5m: any;
  v5mUSD: any;
  vHistory5m: any;
  vHistory5mUSD: any;
  v5mChangePercent: any;
  vBuy5m: any;
  vBuy5mUSD: any;
  vBuyHistory5m: any;
  vBuyHistory5mUSD: any;
  vBuy5mChangePercent: any;
  vSell5m: any;
  vSell5mUSD: any;
  vSellHistory5m: any;
  vSellHistory5mUSD: any;
  vSell5mChangePercent: any;
  trade30m: any;
  tradeHistory30m: any;
  trade30mChangePercent: any;
  sell30m: any;
  sellHistory30m: any;
  sell30mChangePercent: any;
  buy30m: any;
  buyHistory30m: any;
  buy30mChangePercent: any;
  v30m: any;
  v30mUSD: any;
  vHistory30m: any;
  vHistory30mUSD: any;
  v30mChangePercent: any;
  vBuy30m: any;
  vBuy30mUSD: any;
  vBuyHistory30m: any;
  vBuyHistory30mUSD: any;
  vBuy30mChangePercent: any;
  vSell30m: any;
  vSell30mUSD: any;
  vSellHistory30m: any;
  vSellHistory30mUSD: any;
  vSell30mChangePercent: any;
  trade1h: any;
  tradeHistory1h: any;
  trade1hChangePercent: any;
  sell1h: any;
  sellHistory1h: any;
  sell1hChangePercent: any;
  buy1h: any;
  buyHistory1h: any;
  buy1hChangePercent: any;
  v1h: any;
  v1hUSD: any;
  vHistory1h: any;
  vHistory1hUSD: any;
  v1hChangePercent: any;
  vBuy1h: any;
  vBuy1hUSD: any;
  vBuyHistory1h: any;
  vBuyHistory1hUSD: any;
  vBuy1hChangePercent: any;
  vSell1h: any;
  vSell1hUSD: any;
  vSellHistory1h: any;
  vSellHistory1hUSD: any;
  vSell1hChangePercent: any;
  trade8h: any;
  tradeHistory8h: any;
  trade8hChangePercent: any;
  sell8h: any;
  sellHistory8h: any;
  sell8hChangePercent: any;
  buy8h: any;
  buyHistory8h: any;
  buy8hChangePercent: any;
  v8h: any;
  v8hUSD: any;
  vHistory8h: any;
  vHistory8hUSD: any;
  v8hChangePercent: any;
  vBuy8h: any;
  vBuy8hUSD: any;
  vBuyHistory8h: any;
  vBuyHistory8hUSD: any;
  vBuy8hChangePercent: any;
  vSell8h: any;
  vSell8hUSD: any;
  vSellHistory8h: any;
  vSellHistory8hUSD: any;
  vSell8hChangePercent: any;
  trade24h: number;
  tradeHistory24h: any;
  trade24hChangePercent: any;
  sell24h: any;
  sellHistory24h: any;
  sell24hChangePercent: any;
  buy24h: any;
  buyHistory24h: any;
  buy24hChangePercent: any;
  v24h: any;
  v24hUSD: number;
  vHistory24h: any;
  vHistory24hUSD: any;
  v24hChangePercent: any;
  vBuy24h: any;
  vBuy24hUSD: any;
  vBuyHistory24h: any;
  vBuyHistory24hUSD: any;
  vBuy24hChangePercent: any;
  vSell24h: any;
  vSell24hUSD: any;
  vSellHistory24h: any;
  vSellHistory24hUSD: any;
  vSell24hChangePercent: any;
  numberMarkets: any;
};

async function fetchTokenOverview(address: string): Promise<TokenOverview> {
  console.log(`[Birdeye] Fetching token overview for ${address}...`);
  const resp = await axios.get(
    `https://public-api.birdeye.so/defi/token_overview?address=${address}&frames=1m%2C5m%2C30m%2C1h%2C8h%2C24h`,
    {
      headers: {
        accept: "application/json",
        "x-chain": "solana",
        "X-API-KEY": BIRDEYE_API_KEY,
      },
    }
  );
  console.log("[Birdeye] Token overview data received.");
  return resp.data.data as TokenOverview;
}

async function fetchTopHolders(address: string, limit = 5): Promise<TokenHolder[]> {
  console.log(`[Birdeye] Fetching top ${limit} holders for ${address}...`);
  const resp = await axios.get(
    `https://public-api.birdeye.so/defi/v3/token/holder?address=${address}&offset=0&limit=${limit}`,
    {
      headers: {
        accept: "application/json",
        "x-chain": "solana",
        "X-API-KEY": BIRDEYE_API_KEY,
      },
    }
  );
  console.log("[Birdeye] Top holders data received.");
  return resp.data.data.items as TokenHolder[];
}

// --- Notification thresholds and state ---
const MCAP_THRESHOLDS = [100_000, 200_000, 300_000, 400_000, 500_000, 600_000, 800_000, 900_000, 1_000_000, 1_300_000, 1_500_000, 1_800_000, 2_000_000, 2_500_000, 3_000_000, 3_500_000, 4_000_000, 4_500_000, 5_000_000, 8_000_000, 10_000_000, 15_000_000, 20_000_000, 30_000_000, 40_000_000, 50_000_000];
const VOLUME_THRESHOLDS = [1_000, 5_000, 10_000, 20_000, 50_000, 100_000, 200_000, 500_000, 1_000_000, 1_500_000, 2_000_000, 2_500_000, 3_000_000, 3_500_000, 4_000_000, 4_500_000, 5_000_000];
const TRADES_THRESHOLDS = [10, 25, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000, 100000000, 200000000, 500000000, 1000000000];
const PRICE_CHANGE_THRESHOLDS = [10, 20, 30, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000, 100000000, 200000000, 500000000, 1000000000]; // percent
const HOLDERS_ABS_THRESHOLDS = [10, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000, 100000000, 200000000, 500000000, 1000000000];
const HOLDERS_PCT_THRESHOLDS = [10, 20, 30, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000, 100000000, 200000000, 500000000, 1000000000]; // percent

let lastMcap: number | undefined;
let lastMcapThreshold: number | undefined;
let lastMcapDirection: 'up' | 'down' | undefined;
let lastPriceChangeNotified: number | undefined;
let lastVolume24hNotified: number | undefined;
let lastTrades24hNotified: number | undefined;
let lastHoldersCount: number | undefined;
let lastHoldersAbsNotified: number | undefined;
let lastHoldersPctNotified: number | undefined;
let lastTopHolders: string[] | undefined;

function findThresholdCrossed(value: number, thresholds: number[], lastValue?: number): {threshold: number, direction: 'up'|'down'}|undefined {
  for (const t of thresholds) {
    if (lastValue !== undefined) {
      if (lastValue < t && value >= t) return {threshold: t, direction: 'up'};
      if (lastValue > t && value <= t) return {threshold: t, direction: 'down'};
    }
  }
  return undefined;
}

export async function monitorSolana(
  onEvent: (event: SolanaEvent) => Promise<void>
) {
  console.log("[Monitor] Starting Solana polling every 10 seconds...");
  setInterval(async () => {
    try {
      console.log("[Monitor] Polling Birdeye endpoints...");
      const [overview, holders] = await Promise.all([
        fetchTokenOverview(SOLANA_ADDRESS),
        fetchTopHolders(SOLANA_ADDRESS, 5),
      ]);
      const now = new Date().toISOString();
      const mcap = overview.marketCap;
      const priceChange24h = overview.priceChange24hPercent;
      const volume24h = overview.v24hUSD;
      const trades24h = overview.trade24h;
      const holdersCount = overview.holder;
      const symbol = overview.symbol;
      const price = overview.price;
      const currentTopHolders = holders.map(h => h.owner);

      // --- Top Holders Change Notification ---
      if (lastTopHolders === undefined) {
        lastTopHolders = currentTopHolders;
        console.log('[Monitor] Initial top holders stored:', lastTopHolders);
      } else if (currentTopHolders.join(',') !== lastTopHolders.join(',')) {
        const title = '👛 Top Holders Changed';
        const message = `👛 Top holders list has changed!\nNew top holders:\n${currentTopHolders.map((a, i) => `#${i+1}: ${a}`).join('\n')}`;
        console.log(`[Notify] ${title}: ${message}`);
        await onEvent({
          type: 'top_holders_change',
          message,
          timestamp: now,
          title,
          priority: 'high',
          tags: 'busts_in_silhouette',
        });
        lastTopHolders = currentTopHolders;
      }

      // --- Market Cap Thresholds ---
      const mcapCross = findThresholdCrossed(mcap, MCAP_THRESHOLDS, lastMcap);
      if (mcapCross && (lastMcapThreshold !== mcapCross.threshold || lastMcapDirection !== mcapCross.direction)) {
        const directionWord = mcapCross.direction === 'up' ? 'above' : 'below';
        const emoji = mcapCross.direction === 'up' ? '🚀' : '📉';
        const title = `${emoji} Market Cap ${directionWord} $${mcapCross.threshold.toLocaleString()}`;
        const priority = mcapCross.direction === 'up' ? 'high' : 'default';
        const message = `${emoji} Market cap is now ${directionWord} $${mcapCross.threshold.toLocaleString()} (${symbol})\nCurrent: $${mcap.toLocaleString()} | Price: $${price}`;
        console.log(`[Notify] ${title}: ${message}`);
        await onEvent({
          type: 'marketcap',
          message,
          timestamp: now,
          title,
          priority,
          tags: 'chart_with_upwards_trend',
        });
        lastMcapThreshold = mcapCross.threshold;
        lastMcapDirection = mcapCross.direction;
      }
      lastMcap = mcap;

      // --- Price Change 24h ---
      for (const pct of PRICE_CHANGE_THRESHOLDS) {
        if (
          Math.abs(priceChange24h) >= pct &&
          lastPriceChangeNotified !== pct
        ) {
          const direction = priceChange24h > 0 ? 'up' : 'down';
          const emoji = Math.abs(priceChange24h) >= 50 ? '⚡️' : (priceChange24h > 0 ? '📈' : '📉');
          const title = `${emoji} Price 24h change ${direction} ${pct}%`;
          const priority = pct >= 50 ? 'urgent' : 'high';
          const message = `${emoji} Price 24h change is now ${priceChange24h.toFixed(2)}% (${direction})\nCurrent: $${price} (${symbol})`;
          console.log(`[Notify] ${title}: ${message}`);
          await onEvent({
            type: 'price_change',
            message,
            timestamp: now,
            title,
            priority,
            tags: 'money_with_wings',
          });
          lastPriceChangeNotified = pct;
          break;
        }
      }

      // --- Volume 24h ---
      for (const v of VOLUME_THRESHOLDS) {
        if (volume24h >= v && lastVolume24hNotified !== v) {
          const emoji = '💰';
          const title = `${emoji} Volume 24h above $${v.toLocaleString()}`;
          const priority = v >= 100_000 ? 'high' : 'default';
          const message = `${emoji} 24h volume is now $${volume24h.toLocaleString()} (${symbol})`;
          console.log(`[Notify] ${title}: ${message}`);
          await onEvent({
            type: 'volume',
            message,
            timestamp: now,
            title,
            priority,
            tags: 'moneybag',
          });
          lastVolume24hNotified = v;
          break;
        }
      }

      // --- Trades 24h ---
      for (const t of TRADES_THRESHOLDS) {
        if (trades24h >= t && lastTrades24hNotified !== t) {
          const emoji = '🔄';
          const title = `${emoji} Trades 24h above ${t}`;
          const priority = t >= 100 ? 'high' : 'default';
          const message = `${emoji} 24h trades is now ${trades24h} (${symbol})`;
          console.log(`[Notify] ${title}: ${message}`);
          await onEvent({
            type: 'trades',
            message,
            timestamp: now,
            title,
            priority,
            tags: 'repeat',
          });
          lastTrades24hNotified = t;
          break;
        }
      }

      // --- Holders Count ---
      if (lastHoldersCount !== undefined) {
        // Absolute
        for (const abs of HOLDERS_ABS_THRESHOLDS) {
          if (holdersCount - lastHoldersCount >= abs && lastHoldersAbsNotified !== abs) {
            const emoji = '🦾';
            const title = `${emoji} Holders increased by ${abs}`;
            const priority = 'high';
            const message = `${emoji} Holders count is now ${holdersCount} (${symbol})`;
            console.log(`[Notify] ${title}: ${message}`);
            await onEvent({
              type: 'holders_count',
              message,
              timestamp: now,
              title,
              priority,
              tags: 'chart_with_upwards_trend',
            });
            lastHoldersAbsNotified = abs;
          }
        }
        // Percentage
        for (const pct of HOLDERS_PCT_THRESHOLDS) {
          if (holdersCount / lastHoldersCount >= pct && lastHoldersPctNotified !== pct) {
            const emoji = '🦾';
            const title = `${emoji} Holders percentage increased by ${pct}%`;
            const priority = 'high';
            const message = `${emoji} Holders percentage is now ${(holdersCount / lastHoldersCount * 100).toFixed(2)}% (${symbol})`;
            console.log(`[Notify] ${title}: ${message}`);
            await onEvent({
              type: 'holders_percentage',
              message,
              timestamp: now,
              title,
              priority,
              tags: 'chart_with_upwards_trend',
            });
            lastHoldersPctNotified = pct;
          }
        }
      }
      lastHoldersCount = holdersCount;
    } catch (err) {
      console.error("[Monitor] Solana polling error:", err);
    }
  }, 5000); // Poll every 10 seconds
}