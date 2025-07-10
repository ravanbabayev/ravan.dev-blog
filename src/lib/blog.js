import fs from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'src/data/blog');

// MDX için custom components
const components = {
  h1: (props) => <h1 className="text-3xl font-bold text-white mb-6 mt-8" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold text-white mb-4 mt-8" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold text-white mb-3 mt-6" {...props} />,
  h4: (props) => <h4 className="text-lg font-semibold text-white mb-2 mt-4" {...props} />,
  p: (props) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
  ul: (props) => <ul className="text-gray-300 mb-4 ml-6 list-disc" {...props} />,
  ol: (props) => <ol className="text-gray-300 mb-4 ml-6 list-decimal" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  strong: (props) => <strong className="text-white font-semibold" {...props} />,
  em: (props) => <em className="text-gray-200 italic" {...props} />,
  code: (props) => <code className="text-blue-300 bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} />,
  pre: (props) => <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-6 overflow-x-auto" {...props} />,
  blockquote: (props) => <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-300 mb-6" {...props} />,
  hr: (props) => <hr className="border-gray-700 my-8" {...props} />,
  a: (props) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
};

// Tüm blog yazılarını al
export async function getAllBlogPosts() {
  try {
    console.log('getAllBlogPosts çalışıyor...');
    const files = await fs.readdir(blogDirectory);
    console.log('Bulunan dosyalar:', files);
    
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));
    console.log('MDX dosyaları:', mdxFiles);
    
    const posts = [];
    
    for (const file of mdxFiles) {
      try {
        const filePath = path.join(blogDirectory, file);
        const source = await fs.readFile(filePath, 'utf8');
        
        // Gray-matter ile frontmatter'ı parse et
        const { data: frontmatter } = matter(source);
        console.log(`${file} frontmatter:`, frontmatter);
        
        posts.push({
          slug: frontmatter.slug || file.replace('.mdx', ''),
          ...frontmatter,
          fileName: file,
        });
      } catch (fileError) {
        console.error(`${file} dosyası okunurken hata:`, fileError);
      }
    }
    
    console.log('İşlenen yazılar:', posts);
    
    // Tarihe göre sırala (en yeni önce)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('getAllBlogPosts hatası:', error);
    return [];
  }
}

// Belirli bir blog yazısını al
export async function getBlogPost(slug) {
  try {
    console.log('getBlogPost çalışıyor, slug:', slug);
    
    const files = await fs.readdir(blogDirectory);
    let targetFile = null;
    
    // Önce dosya adı ile eşleşen dosyayı ara
    for (const file of files.filter(f => f.endsWith('.mdx'))) {
      const filePath = path.join(blogDirectory, file);
      const source = await fs.readFile(filePath, 'utf8');
      const { data: frontmatter } = matter(source);
      
      if (frontmatter.slug === slug || file.replace('.mdx', '') === slug) {
        targetFile = file;
        break;
      }
    }
    
    if (!targetFile) {
      console.log('Dosya bulunamadı:', slug);
      return null;
    }
    
    const filePath = path.join(blogDirectory, targetFile);
    const source = await fs.readFile(filePath, 'utf8');
    const { content: rawContent, data: frontmatter } = matter(source);
    
    // MDX içeriğini compile et - custom components ile
    const { content } = await compileMDX({
      source: rawContent,
      components,
      options: { parseFrontmatter: false }, // Gray-matter ile zaten parse ettik
    });
    
    return {
      content,
      frontmatter,
      slug: frontmatter.slug || targetFile.replace('.mdx', ''),
    };
  } catch (error) {
    console.error('getBlogPost hatası:', error);
    return null;
  }
}

// Formatlanmış tarih
export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
} 