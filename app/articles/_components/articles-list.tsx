'use client';

import { ArticlePreview } from '@/components/article-preview';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { useState } from 'react';

interface ArticlesListProps {
	articles: Array<{
		title: string;
		date: string;
		formattedDate: string;
		slug: string;
		content: string;
	}>;
}

const ITEMS_PER_PAGE = 10;

export function ArticlesList({ articles }: ArticlesListProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
	const currentArticles = articles.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	return (
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
				<motion.div layout>
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
	);
} 