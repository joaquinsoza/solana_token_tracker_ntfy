import dotenv from 'dotenv';
dotenv.config();

export const SOLANA_ADDRESS = process.env.SOLANA_ADDRESS as string;
export const NTFY_TOPIC = process.env.NTFY_TOPIC as string; 
export const BIRDEYE_API_KEY = process.env.BIRDEYE_API_KEY as string;
export const NTFY_URL = process.env.NTFY_URL as string;