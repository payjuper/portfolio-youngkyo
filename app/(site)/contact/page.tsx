'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export const metadata = { title: 'Contact · Young' }

export default function ContactPage(){
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', { method: 'POST', body: data })
      if(!res.ok) throw new Error('Request failed')
      setStatus('ok')
      form.reset()
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <main>
      <Header />
      <section className="section">
        <div className="card max-w-xl">
          <h1 className="text-2xl font-semibold mb-4">Contact</h1>
          <p className="text-white/80 mb-6">Send me a message — this form emails me via Resend or AWS SES (configured by env).</p>
          <form onSubmit={onSubmit} className="grid gap-4">
            <input name="name" required placeholder="Your name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2" />
            <input type="email" name="email" required placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2" />
            <textarea name="message" required placeholder="Message" rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2" />
            <button className="btn btn-primary w-fit" type="submit" disabled={status==='sending'}>
              {status==='sending' ? 'Sending…' : 'Send'}
            </button>
            {status==='ok' && <p className="text-green-400 text-sm">Message sent! I’ll get back soon.</p>}
            {status==='error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}