export type Project = {
  title: string
  description: string
  tags: string[]
  href: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Crypto Calc Bot',
    description: 'Binance Futures + Telegram alerts. Realtime USDC volume triggers & cooldown logic.',
    tags: ['Node', 'Binance API', 'Telegram Bot'],
    href: 'https://github.com/payjuper/crypto-calc-bot'
  },
  {
    title: 'BNBUSDC Long Alert Bot',
    description: '1‑minute OHLCV, drop‑threshold alerts, Telegram integration. Built for Binance Futures.',
    tags: ['Python', 'Binance', 'Telegram'],
    href: 'https://github.com/payjuper?tab=repositories&q=BNBUSDC'
  },
  {
    title: 'XRPUSDC Spoofing Detector',
    description: 'Detects large maker‑limit spoofing vs actual fills. Distinguishes cancellations vs consumption.',
    tags: ['Order‑Flow', 'WebSocket', 'Node'],
    href: 'https://github.com/payjuper?tab=repositories&q=spoof'
  },
  {
    title: 'Orderflow Dashboard',
    description: 'Taker buy/sell, maker snapshots, liquidity sweeps visualizations with VPVR/POC overlays.',
    tags: ['Python', 'Pandas', 'Plotly'],
    href: 'https://github.com/payjuper?tab=repositories&q=orderflow'
  }
]