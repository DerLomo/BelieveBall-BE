# BelieveBall Backend

Backend service for BelieveBall, a Powerball-style lottery system built on top of Believe's bonding-curve token.

## Overview

BelieveBall overlays a Powerball-style, ever-growing jackpot on top of Believe's bonding-curve token. Every buy or sell of $BB mints a non-transferable ticket; a nightly draw decides the winner. A fee of 1.1% is skimmed from each trade, with 88.88888888% going to the jackpot and 11.11% to a marketing wallet.

This service is part of the Iteration 0 (Off-Chain MVP) phase, where:
- Trade/Fee Hook uses the Believe bonding-curve (on-chain)
- Backend API is built with Node.js, Express, and Supabase Postgres
- Ticket Service listens to Helius webhook for $BB trades
- Draw Scheduler uses SHA-256 of the last Solana blockhash as VRF seed
- Jackpot is stored in a PDA controlled by a multisig
- Winner claims are validated off-chain

## Getting Started

### Prerequisites

- Node.js 16.x
- Docker and Docker Compose
- Supabase account for database
- Helius API key for Solana webhooks

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BelieveBall-BE.git
   cd BelieveBall-BE
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=3000
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   HELIUS_API_KEY=your_helius_api_key
   ```

4. Build the TypeScript project:
   ```bash
   npm run build
   ```

5. Start the server:
   ```bash
   npm start
   ```

### Docker Deployment

1. Build and start containers:
   ```bash
   SUPABASE_URL=your_supabase_url SUPABASE_KEY=your_supabase_key docker-compose up -d
   ```

2. View logs:
   ```bash
   docker-compose logs -f
   ```

## API Endpoints

### Tickets

- `GET /api/tickets` - Get all tickets
- `GET /api/tickets/:walletAddress` - Get tickets by wallet address

### Draws

- `GET /api/draws` - Get all draws
- `GET /api/draws/latest` - Get latest draw information
- `GET /api/draws/:drawId` - Get specific draw by ID

### Jackpot

- `GET /api/jackpot` - Get current jackpot information
- `GET /api/jackpot/history` - Get jackpot history

## Ticket & Draw Mechanics

### Constants
- Number Range: 1-69 (five distinct white-ball numbers)
- Power Range: 1-26 (single Powerball number)
- Draw Time: 03:00 UTC (20:00 PST) nightly
- Claim Window: 7 days (604,800 seconds)
- Minimum Trade: $88.88 USD

### Ticket Generation
Tickets are generated deterministically based on transaction signature and buyer's public key.

### Draw Process
1. Randomness seed: SHA-256 of the last Solana blockhash before 03:00 UTC
2. Generate winning set using the same deterministic algorithm
3. Persist result to database and post via Solana Memo
4. Match tickets against winning numbers

## Development

### Project Structure
```
/src
  /config       - Configuration settings
  /controllers  - Route controllers
  /models       - Database models
  /routes       - API routes
  /services     - Business logic
  /utils        - Helper functions
  server.ts     - Main application file
```

### Running Tests
```bash
npm test
```

## Transparency Features

- Open-source repository
- Published Docker image checksums
- Hourly ticket snapshots
- On-chain verification of draw seeds
- Public spending tracker

## License

[MIT License](LICENSE)# BelieveBall-BE
