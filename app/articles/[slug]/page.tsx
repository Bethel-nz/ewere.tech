import { allArticles } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ArticlePageProps {
	params: Promise<{
		slug: string;
	}>
}

export async function generateStaticParams() {
	return allArticles.map((article) => ({
		slug: article.slug,
	}));
}

export async function generateMetadata({ params }: ArticlePageProps) {
	const { slug } = await params
	const article = allArticles.find((article) => article.slug === slug);

	if (!article) {
		return {};
	}

	return {
		title: article.title,
		description: article.description,
	};
}

export default async function ArticlePage({ params }: ArticlePageProps) {
	const { slug } = await params
	const article = allArticles.find((article) => article.slug === slug);

	if (!article) {
		notFound();
	}

	return (
		<article className="space-y-12">
			<div className="flex items-center justify-between">
				<header>
					<h1 className="font-sans text-3xl font-bold mb-2">{article.title}</h1>
					<p className="text-muted-foreground">{article.formattedDate}</p>
				</header>
				<Link
					href="/articles"
					className="text-sm text-muted-foreground hover:text-primary transition-colors"
				>
					← All articles
				</Link>
			</div>

			<div className="prose prose-neutral dark:prose-invert max-w-none">
				<div dangerouslySetInnerHTML={{ __html: article.content }} />
			</div>
		</article>
	);
}
