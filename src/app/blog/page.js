import Link from 'next/link';
import { getAllBlogPosts, formatDate } from '../../lib/blog';

export default async function BlogPage() {
  try {
    const posts = await getAllBlogPosts();

    if (posts.length === 0) {
      return (
        <div className="min-h-screen bg-[#13161B] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Blog</h1>
            <p className="text-gray-400">Henüz blog yazısı yok.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-[#13161B] text-white py-8 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Blog</h1>
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
          
          <div className="space-y-6 sm:space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-[#1A1D23] rounded-lg p-4 sm:p-8 border border-gray-800 hover:border-gray-600 transition-colors">
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <span className="text-gray-400 text-xs sm:text-sm robotoMono">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-gray-400 text-xs sm:text-sm robotoMono">
                      {post.author}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    {post.description}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors robotoMono text-sm"
                  >
                    <span>Devamını oku</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-4 w-4">
                      <path fill="none" d="M0 0H256V256H0z"></path>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        d="M64 192L192 64"
                      ></path>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        d="M88 64L192 64 192 168"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Blog sayfası hatası:', error);
    return (
      <div className="min-h-screen bg-[#13161B] text-white py-8 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Blog</h1>
          <p className="text-red-400">Hata: Blog yazıları yüklenirken bir sorun oluştu.</p>
          <p className="text-gray-500 text-sm mt-4">Lütfen daha sonra tekrar deneyin.</p>
        </div>
      </div>
    );
  }
} 