import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = { title: 'About · Youngkyo' }

export default function AboutPage(){
  return (
    <main>
      <Header />
      <section className="section">
        <div className="card">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border border-white/20">
              <Image src="/profile.jpg" alt="Young" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">About Me</h1>
              <p className="mt-3 text-white/80">
                I’m a CS student at UW–Madison focusing on trading systems, data structures,
                and ML engineering. I enjoy building tools that connect markets data with practical
                decision‑making.
              </p>
              <ul className="mt-4 list-disc list-inside text-white/70">
                <li>Languages: Python, Java, C++, JavaScript/TypeScript</li>
                <li>Tools: Next.js, Node, Pandas, Plotly, Tailwind</li>
                <li>Interests: Order‑flow analytics, backtesting, dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}