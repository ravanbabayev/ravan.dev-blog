import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#13161B] text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Hakkımda</h1>
      <p className="max-w-2xl text-lg mb-8 text-gray-300 text-center">
        Merhaba! Ben Ravan Babayev. Yazılım geliştirme konusunda tutkulu bir Software Engineer’ım. Modern web teknolojileriyle kullanıcı odaklı, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum. Takım çalışmasına yatkın, sürekli öğrenmeye açık ve yenilikçi çözümler üretmeyi seven biriyim.
      </p>
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold mb-2">Neler Yapıyorum?</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Web uygulamaları geliştiriyorum</li>
          <li>Frontend ve backend teknolojileriyle çalışıyorum</li>
          <li>Kullanıcı deneyimi ve performans odaklı çözümler üretiyorum</li>
        </ul>
      </div>
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">Kullandığım Teknolojiler</h2>
        <ul className="flex flex-wrap gap-4 text-gray-200">
          <li className="bg-[#22252B] px-4 py-2 rounded">JavaScript</li>
          <li className="bg-[#22252B] px-4 py-2 rounded">TypeScript</li>
          <li className="bg-[#22252B] px-4 py-2 rounded">React</li>
          <li className="bg-[#22252B] px-4 py-2 rounded">Next.js</li>
          <li className="bg-[#22252B] px-4 py-2 rounded">Node.js</li>
          <li className="bg-[#22252B] px-4 py-2 rounded">Tailwind CSS</li>
          <li className="bg-[#22252B] px-4 py-2 rounded">Docker</li>
        </ul>
      </div>
    </div>
  );
} 