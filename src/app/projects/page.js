import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import Link from 'next/link';

const projects = [
  {
    title: "EPINCMS",
    technologies: ["SaaS", "E-commerce", "Digital Products"],
    description: "SaaS tipinde epin ve dijital ürün satış yazılımı. Dijital ürün satışı için kapsamlı çözüm.",
    projectUrl: "https://epincms.com",
    logo: null
  },
  {
    title: "RANKFINDER",
    technologies: ["SaaS", "Analytics", "Tracking"],
    description: "SaaS tipinde sıra takip uygulaması. Performans ve sıralama analizi için gelişmiş araçlar.",
    projectUrl: "https://getrankfinder.com",
    logo: null
  },
  {
    title: "PLATICORN",
    technologies: ["E-commerce", "Digital Sales", "Web Platform"],
    description: "Epin & dijital ürün satışı yaptığım websitem. Güvenli ve hızlı dijital ürün alışverişi.",
    projectUrl: "https://platicorn.com",
    logo: null
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#13161B] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Ana Sayfadaki Projeler</h1>
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors robotoMono text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-4 w-4 rotate-180">
              <path fill="none" d="M0 0H256V256H0z"/>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M64 192L192 64"/>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M88 64L192 64 192 168"/>
            </svg>
            <span>Ana Sayfa</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              projectUrl={project.projectUrl}
              logo={project.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 