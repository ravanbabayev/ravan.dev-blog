import Link from 'next/link';
import { getBlogPost, getAllBlogPosts, formatDate } from '../../../lib/blog';
import { notFound } from 'next/navigation';

// Statik yolları oluştur
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Metadata oluştur
export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog yazısı bulunamadı - Ravan Babayev',
    };
  }

  return {
    title: `${post.frontmatter.title} - Ravan Babayev`,
    description: post.frontmatter.description,
  };
}

export default async function BlogDetailPage({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#13161B] text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto py-6 sm:py-8 px-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors robotoMono text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-4 w-4 rotate-180">
                <path fill="none" d="M0 0H256V256H0z"></path>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M64 192L192 64"></path>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M88 64L192 64 192 168"></path>
              </svg>
              <span>Ana Sayfa</span>
            </Link>

            <Link href="/blog" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors robotoMono text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-4 w-4 rotate-180">
                <path fill="none" d="M0 0H256V256H0z"></path>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M64 192L192 64"></path>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M88 64L192 64 192 168"></path>
              </svg>
              <span>Blog'a dön</span>
            </Link>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-gray-400 text-xs sm:text-sm robotoMono">
              <span>{formatDate(post.frontmatter.date)}</span>
              <span>{post.frontmatter.author}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              {post.frontmatter.title}
            </h1>
            
            {post.frontmatter.description && (
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {post.frontmatter.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-8 sm:py-16 px-4">
        <div className="mdx-content">
          {post.content}
        </div>
      </article>

      {/* Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto py-6 sm:py-8 px-4 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors robotoMono text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-4 w-4 rotate-180">
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
            <span>Diğer yazıları oku</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 