import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaUbuntu } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiSocketdotio, SiGo, SiLaravel, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiNginx, SiRedis, SiPostman } from 'react-icons/si';

const techs = [
  // Frontend
  { icon: <FaReact size={40} color="#61DAFB" />, iconSmall: <FaReact size={32} color="#61DAFB" />, label: 'React' },
  { icon: <SiNextdotjs size={40} color="#fff" />, iconSmall: <SiNextdotjs size={32} color="#fff" />, label: 'Next.js' },
  { icon: <SiJavascript size={40} color="#F7DF1E" />, iconSmall: <SiJavascript size={32} color="#F7DF1E" />, label: 'JavaScript' },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, iconSmall: <SiTailwindcss size={32} color="#38BDF8" />, label: 'Tailwind CSS' },
  
  // Backend
  { icon: <FaNodeJs size={40} color="#3C873A" />, iconSmall: <FaNodeJs size={32} color="#3C873A" />, label: 'Node.js' },
  { icon: <SiExpress size={40} color="#fff" />, iconSmall: <SiExpress size={32} color="#fff" />, label: 'Express.js' },
  { icon: <SiGo size={40} color="#00ADD8" />, iconSmall: <SiGo size={32} color="#00ADD8" />, label: 'Go' },
  { icon: <SiLaravel size={40} color="#FF2D20" />, iconSmall: <SiLaravel size={32} color="#FF2D20" />, label: 'Laravel' },
  { icon: <SiSocketdotio size={40} color="#fff" />, iconSmall: <SiSocketdotio size={32} color="#fff" />, label: 'Socket.io' },
  
  // Database
  { icon: <SiMongodb size={40} color="#4DB33D" />, iconSmall: <SiMongodb size={32} color="#4DB33D" />, label: 'MongoDB' },
  { icon: <SiPostgresql size={40} color="#336791" />, iconSmall: <SiPostgresql size={32} color="#336791" />, label: 'PostgreSQL' },
  { icon: <SiMysql size={40} color="#4479A1" />, iconSmall: <SiMysql size={32} color="#4479A1" />, label: 'MySQL' },
  { icon: <SiRedis size={40} color="#DC382D" />, iconSmall: <SiRedis size={32} color="#DC382D" />, label: 'Redis' },
  
  // DevOps & Tools
  { icon: <FaDocker size={40} color="#2496ED" />, iconSmall: <FaDocker size={32} color="#2496ED" />, label: 'Docker' },
  { icon: <FaGitAlt size={40} color="#F05032" />, iconSmall: <FaGitAlt size={32} color="#F05032" />, label: 'Git' },
  { icon: <SiNginx size={40} color="#009639" />, iconSmall: <SiNginx size={32} color="#009639" />, label: 'Nginx' },
  { icon: <FaUbuntu size={40} color="#E95420" />, iconSmall: <FaUbuntu size={32} color="#E95420" />, label: 'Ubuntu' },
  { icon: <SiPostman size={40} color="#FF6C37" />, iconSmall: <SiPostman size={32} color="#FF6C37" />, label: 'Postman' },
];

export default function TechStack() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-4 lg:gap-6 py-6 lg:py-8 max-w-4xl mx-auto px-2">
      {techs.map((tech, idx) => (
        <div key={idx} className="relative group cursor-pointer">
          {/* Desktop Icon */}
          <div className="hidden sm:block">
            {tech.icon}
          </div>
          
          {/* Mobile Icon */}
          <div className="block sm:hidden">
            {tech.iconSmall}
          </div>
          
          {/* Tooltip - Only show on hover for larger screens */}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap hidden sm:block">
            {tech.label}
          </span>
          
          {/* Mobile Label - Always visible on very small screens */}
          <span className="block sm:hidden text-xs text-gray-400 text-center mt-1 robotoMono">
            {tech.label.split(' ')[0]}
          </span>
        </div>
      ))}
    </div>
  );
} 