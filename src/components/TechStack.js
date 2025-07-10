import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaUbuntu } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiSocketdotio, SiGo, SiLaravel, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiNginx, SiRedis, SiPostman } from 'react-icons/si';

const techs = [
  // Frontend
  { icon: <FaReact size={40} color="#61DAFB" />, label: 'React' },
  { icon: <SiNextdotjs size={40} color="#fff" />, label: 'Next.js' },
  { icon: <SiJavascript size={40} color="#F7DF1E" />, label: 'JavaScript' },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, label: 'Tailwind CSS' },
  
  // Backend
  { icon: <FaNodeJs size={40} color="#3C873A" />, label: 'Node.js' },
  { icon: <SiExpress size={40} color="#fff" />, label: 'Express.js' },
  { icon: <SiGo size={40} color="#00ADD8" />, label: 'Go' },
  { icon: <SiLaravel size={40} color="#FF2D20" />, label: 'Laravel' },
  { icon: <SiSocketdotio size={40} color="#fff" />, label: 'Socket.io' },
  
  // Database
  { icon: <SiMongodb size={40} color="#4DB33D" />, label: 'MongoDB' },
  { icon: <SiPostgresql size={40} color="#336791" />, label: 'PostgreSQL' },
  { icon: <SiMysql size={40} color="#4479A1" />, label: 'MySQL' },
  { icon: <SiRedis size={40} color="#DC382D" />, label: 'Redis' },
  
  // DevOps & Tools
  { icon: <FaDocker size={40} color="#2496ED" />, label: 'Docker' },
  { icon: <FaGitAlt size={40} color="#F05032" />, label: 'Git' },
  { icon: <SiNginx size={40} color="#009639" />, label: 'Nginx' },
  { icon: <FaUbuntu size={40} color="#E95420" />, label: 'Ubuntu' },
  { icon: <SiPostman size={40} color="#FF6C37" />, label: 'Postman' },
];

export default function TechStack() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-6 py-8 max-w-4xl mx-auto">
      {techs.map((tech, idx) => (
        <div key={idx} className="relative group cursor-pointer">
          {tech.icon}
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-800 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
            {tech.label}
          </span>
        </div>
      ))}
    </div>
  );
} 