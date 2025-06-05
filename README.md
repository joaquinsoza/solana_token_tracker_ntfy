# MMD Monitor

A modular TypeScript script to monitor real-time activity on a Solana token, sending NTFY push notifications when specific conditions are met.

## Features
- Tracks Solana token address for price spikes, market cap, volume, trades, holders, and top holders changes
- Sends push notifications via NTFY
- Modular, configurable, and uses modern TypeScript best practices

## Setup

1. **Clone the repository and install dependencies:**
   ```sh
   pnpm install
   ```

2. **Configure environment variables:**
   Create a `.env` file in the root directory with the following content:
   ```env
   SOLANA_ADDRESS=SAMPLE_SOLANA_ADDRESS
   NTFY_TOPIC=mmd-alerts
   BIRDEYE_API_KEY=YOUR_BIRDEYE_API_KEY_HERE
   NTFY_URL=YOUR_NTFY_SERVER_URL
   ```
   - `SOLANA_ADDRESS`: Solana token address to track
   - `NTFY_TOPIC`: NTFY topic for push notifications
   - `BIRDEYE_API_KEY`: Your Birdeye API key (required, paid version for real-time data)
   - `NTFY_URL`: You ntfy server url, for notifications

3. **Run the monitor:**
   ```sh
   pnpm start
   ```

## Notes
- Solana data is fetched from the paid version of the Birdeye API for real-time accuracy.
- All modules are async and use modern ESM imports.

---
MIT License 