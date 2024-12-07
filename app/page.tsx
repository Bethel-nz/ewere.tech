import { Bio } from '@/components/bio';
import { Awards } from '@/components/awards';
import { ArticlePreview } from '@/components/article-preview';
import { allArticles } from 'content-collections';
import Link from 'next/link';

export default function Home() {
  const latestArticles = allArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-12">
      <Bio />
      <Awards />
      <section className="space-y-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-sans text-2xl font-bold">Latest Articles</h2>
          <Link
            href="/articles"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            See all articles →
          </Link>
        </div>

        <div className="space-y-8">
          {latestArticles && latestArticles.map((article) => (
            <ArticlePreview
              key={article.slug}
              title={article.title}
              date={article.formattedDate}
              slug={article.slug}
              content={article.content}
              image="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
