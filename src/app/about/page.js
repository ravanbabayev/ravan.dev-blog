import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-[#13161B] text-white py-8 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors robotoMono text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-4 w-4 rotate-180">
              <path fill="none" d="M0 0H256V256H0z"></path>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M64 192L192 64"></path>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M88 64L192 64 192 168"></path>
            </svg>
            <span>Ana Sayfa</span>
          </Link>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <img src="/avatar.png" alt="Ravan Babayev" className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-6 sm:mb-8"/>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Hakkımda</h1>
          <p className="text-lg sm:text-xl text-gray-300 robotoMono">Software Engineer</p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Kişisel Bilgiler */}
          <section className="bg-[#1A1D23] rounded-lg p-6 sm:p-8 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">Kişisel Bilgiler</h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <p><strong className="text-white">Ad:</strong> <span className="text-gray-300">Ravan Babayev</span></p>
              <p><strong className="text-white">Doğum Yılı:</strong> <span className="text-gray-300">2003</span></p>
              <p><strong className="text-white">Doğum Yeri:</strong> <span className="text-gray-300">Gence, Azerbaycan</span></p>
              <p><strong className="text-white">Yaşadığı Yer:</strong> <span className="text-gray-300">Türkiye</span></p>
              <p><strong className="text-white">Deneyim:</strong> <span className="text-gray-300">~10 yıl yazılım geliştirme</span></p>
            </div>
          </section>

          {/* Hakkımda */}
          <section className="bg-[#1A1D23] rounded-lg p-6 sm:p-8 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">Hakkımda</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>
                Merhaba! Ben Ravan, 2003 yılında Azerbaycan'ın Gence şehrinde doğdum ve şu an Türkiye'de yaşıyorum. 
                Yazılım geliştirme yolculuğuma yaklaşık 10 yıl önce Minecraft sunucuları için Java eklentileri yazarak başladım.
              </p>
              <p>
                Modern web teknolojileriyle kullanıcı odaklı ve performanslı uygulamalar geliştiriyorum. 
                Full-stack geliştirme konusunda deneyimliyim ve özellikle React, Next.js, Node.js, Go ve Laravel 
                teknolojileriyle çalışmayı seviyorum.
              </p>
              <p>
                Takım çalışmasına yatkın, sürekli öğrenmeye açık bir yazılım geliştiricisiyim. 
                Yeni teknolojileri keşfetmek ve projelerimde en iyi uygulamaları hayata geçirmek beni motive ediyor.
              </p>
            </div>
          </section>

          {/* Teknik Yetenekler */}
          <section className="bg-[#1A1D23] rounded-lg p-6 sm:p-8 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">Teknik Yetenekler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Frontend</h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• React & Next.js</li>
                  <li>• JavaScript (ES6+)</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Backend</h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• Node.js & Express.js</li>
                  <li>• Go (Golang)</li>
                  <li>• Laravel (PHP)</li>
                  <li>• RESTful API Development</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Veritabanı</h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• MongoDB</li>
                  <li>• PostgreSQL</li>
                  <li>• MySQL</li>
                  <li>• Redis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">DevOps & Araçlar</h3>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• Docker</li>
                  <li>• Git & GitHub</li>
                  <li>• Nginx</li>
                  <li>• Ubuntu Server</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projelerim */}
          <section className="bg-[#1A1D23] rounded-lg p-6 sm:p-8 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">Öne Çıkan Projelerim</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                <h3 className="text-lg font-semibold mb-2 text-white">EPINCMS</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-2">
                  SaaS tipinde epin ve dijital ürün satış yazılımı. Kapsamlı e-ticaret çözümü.
                </p>
                <span className="text-xs text-gray-400 robotoMono">SaaS • E-commerce • Digital Products</span>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                <h3 className="text-lg font-semibold mb-2 text-white">RANKFINDER</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-2">
                  SaaS tipinde sıra takip uygulaması. Performans ve sıralama analizi araçları.
                </p>
                <span className="text-xs text-gray-400 robotoMono">SaaS • Analytics • Tracking</span>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                <h3 className="text-lg font-semibold mb-2 text-white">PLATICORN</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-2">
                  Epin & dijital ürün satışı platformu. Güvenli ve hızlı alışveriş deneyimi.
                </p>
                <span className="text-xs text-gray-400 robotoMono">E-commerce • Digital Sales • Web Platform</span>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <Link href="/projects" className="inline-block px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors robotoMono text-sm sm:text-base">
                Tüm Projeleri Gör
              </Link>
            </div>
          </section>

          {/* İletişim */}
          <section className="bg-[#1A1D23] rounded-lg p-6 sm:p-8 border border-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">İletişim</h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-300">
                Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="http://api.whatsapp.com/send?phone=908508886436" target="_blank" rel="noreferrer"
                   className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-center robotoMono text-sm sm:text-base">
                  WhatsApp
                </a>
                <a href="https://github.com/ravanbabayev" target="_blank" rel="noreferrer"
                   className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors text-center robotoMono text-sm sm:text-base">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ravanbabayev/" target="_blank" rel="noreferrer"
                   className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center robotoMono text-sm sm:text-base">
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 