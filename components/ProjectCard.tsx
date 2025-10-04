import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ title, description, tags, href, image }:{
  title: string
  description: string
  tags: string[]
  href: string
  image?: string
}){
  return (
    <article className="card">
      <div className="flex flex-col md:flex-row gap-6">
        {image && (
          <div className="relative w-full md:w-56 h-40 md:h-32 rounded-xl overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-white/80 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(t => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
          <Link href={href} className="btn btn-primary">View Project</Link>
        </div>
      </div>
    </article>
  )}