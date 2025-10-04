import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export const metadata = { title: 'Projects · Young' }

export default function ProjectsPage(){
  return (
    <main>
      <Header />
      <section className="section">
        <h1 className="text-2xl font-semibold mb-6">Projects</h1>
        <div className="grid gap-6">
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}