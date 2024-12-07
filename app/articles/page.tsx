import { allArticles } from 'content-collections';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArticlesList } from './_components/articles-list';

export const generateMetadata = (): Metadata => {
	return {
		title: "Articles",
		description: "Thoughts on Cloud Computing, DevOps, and AWS from Ewere Diagboya, AWS Community Hero and Cloud Expert.",
		openGraph: {
			title: "Articles | Ewere Diagboya",
			description: "Thoughts on Cloud Computing, DevOps, and AWS from Ewere Diagboya, AWS Community Hero and Cloud Expert.",
		},
	};
};

export default function ArticlesPage() {
	const sortedArticles = allArticles.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return (
		<div className="space-y-8">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="font-sans text-3xl font-bold mb-2">Articles</h1>
					<p className="text-muted-foreground">
						My thoughts on software development, cloud computing, and more.
					</p>
				</div>
				<Link
					href="/"
					className="text-sm text-muted-foreground hover:text-primary transition-colors"
				>
					← Back home
				</Link>
			</div>

			<ArticlesList articles={sortedArticles} />
		</div>
	);
} 