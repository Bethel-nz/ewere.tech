'use client';

import { ArticlePreview } from '@/components/article-preview';
import { allArticles } from 'content-collections';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';

const ITEMS_PER_PAGE = 10;

export default function ArticlesPage() {
	const [currentPage, setCurrentPage] = useState(1);
	const sortedArticles = allArticles.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	const totalPages = Math.ceil(sortedArticles.length / ITEMS_PER_PAGE);
	const currentArticles = sortedArticles.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
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

			<LayoutGroup>
				<motion.div layout>
					<div className="space-y-8">
					<AnimatePresence mode="wait">
						{currentArticles.map((article) => (
							<ArticlePreview
								key={article.slug}
								title={article.title}
								date={article.formattedDate}
								slug={article.slug}
								content={article.content}
								image="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d"
							/>
						))}
					</AnimatePresence>
					</div>
				</motion.div>

				{totalPages > 1 && (
					<motion.div
						layout
					>
						<div className="flex justify-center gap-2 mt-12">
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<button
								key={page}
								onClick={() => setCurrentPage(page)}
								className={`px-4 py-2 rounded-lg transition-colors ${currentPage === page
										? 'bg-primary text-primary-foreground'
										: 'text-muted-foreground hover:text-primary'
									}`}
							>
								{page}
							</button>
						))}
						</div>
					</motion.div>
				)}
			</LayoutGroup>
		</div>
	);
} 