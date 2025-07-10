import React from 'react';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: "HabitUp",
    technologies: ["React Native", "Node.js", "MongoDB"],
    description: "Kullanıcıların alışkanlıklarını takip etmelerini sağlayan mobil uygulama. HabitUp ile günlük rutinlerinizi organize edin.",
    projectUrl: "https://github.com/ravanbabayev",
    logo: null
  },
  {
    title: "SanalSepet",
    technologies: ["Next.js", "Tailwind CSS", "Strapi"],
    description: "Bu proje, hem frontend hem de backend tarafında modern teknolojiler bir araya getiren e-ticaret platformu.",
    projectUrl: "https://github.com/ravanbabayev",
    logo: null
  },
  {
    title: "InfoMed",
    technologies: ["React Native", "Node.js", "Strapi"],
    description: "İlaç bilgisi ve yönetim uygulaması olarak geliştirdiğim aynı zamanda hasta bilme takip sistemem.",
    projectUrl: "https://github.com/ravanbabayev",
    logo: null
  },
  {
    title: "UI Tasarımlarım",
    technologies: ["Figma"],
    description: "Çeşitli uygulama için UI tasarım çalışmalarım.",
    projectUrl: "https://github.com/ravanbabayev",
    logo: null
  },
  {
    title: "Rota Rehberi",
    technologies: ["Node.js", "Tailwind CSS"],
    description: "Next.js ve Tailwind CSS becerilerimi geliştirmek amacıyla tasarladığım bu kullanış arayüzü.",
    projectUrl: "https://github.com/ravanbabayev",
    logo: null
  },
  {
    title: "CalDaily",
    technologies: ["React Native", "Node.js", "MongoDB"],
    description: "Kullanıcıların günlük içerisinde tüketiikleri besin miktarını kaydederk aldıkları kalori miktarını.",
    projectUrl: "https://github.com/ravanbabayev",
    logo: null
  },
  {
    title: "KitapHane",
    technologies: ["Figma"],
    description: "Kitap satış platformu mobil tasarımı.",
    projectUrl: "https://github.com/ravanbabayev",
    logo: null
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#13161B] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Projelerim</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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