import React from 'react';

export default function ProjectCard({ logo, title, technologies, description, projectUrl, logoColor = "#fff" }) {
  return (
    <div className="bg-[#1A1D23] rounded-lg p-6 flex flex-col h-full border border-gray-800 hover:border-gray-600 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
          {logo ? (
            <img src={logo} alt={title} className="w-10 h-10 object-contain" />
          ) : (
            <div className="w-10 h-10 rounded bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">{title.charAt(0)}</span>
            </div>
          )}
        </div>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-gray-700 text-gray-200 text-xs rounded robotoMono"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <p className="text-gray-300 text-sm mb-6 flex-grow">{description}</p>
      
      <a 
        href={projectUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-center font-medium transition-colors"
      >
        Proje Detayı
      </a>
    </div>
  );
} 