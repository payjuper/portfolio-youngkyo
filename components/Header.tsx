'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Header(){
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 rounded-b-2xl border-b border-white/10">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="ml-4 font-semibold tracking-tight text-xl">Youngkyo Kim</Link>
        <nav className="flex gap-2 text-sm">
          {links.map(l => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`btn ${active ? 'bg-white/10' : 'btn-outline'}`}
              >{l.label}</Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}