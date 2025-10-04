import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomePage(){
  return (
    <main>
      <Header />
      <section className="section">
        <div className="card">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hi, I’m Young 👋</h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            CS @ UW–Madison. I build trading tools, full‑stack web apps, and ML experiments.
            Here you’ll find selected projects, notes, and how to reach me.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects" className="btn btn-primary">View Projects</Link>
            <Link href="/contact" className="btn btn-outline">Contact</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h2 className="font-semibold mb-2">Order‑Flow & SMC</h2>
            <p className="text-white/80">VPVR/POC, taker/maker analytics, liquidity sweeps, and strategy backtests.</p>
          </div>
          <div className="card">
            <h2 className="font-semibold mb-2">Full‑Stack</h2>
            <p className="text-white/80">Next.js APIs, Telegram bots, dashboards, and serverless functions.</p>
          </div>
          <div className="card">
            <h2 className="font-semibold mb-2">LeetCode × 4 Langs</h2>
            <p className="text-white/80">Python → Java → C++ → JS with clean patterns and tests.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}