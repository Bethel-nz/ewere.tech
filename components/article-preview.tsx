'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

interface ArticlePreviewProps {
	title: string;
	date: string;
	slug: string;
	content: string;
	image: string;
	showArrow?: boolean;
}

export function ArticlePreview({ title, date, slug, content, image, showArrow = true }: ArticlePreviewProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="group">
				<Link href={`/articles/${slug}`} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
					<div className="relative w-full sm:w-48 h-48 sm:h-32 rounded-lg overflow-hidden shrink-0">
						<Image
							src={image}
							alt={title}
							fill
							className="object-cover transition-transform group-hover:scale-105"
						/>
					</div>
					<div className="flex-1 min-w-0">
						<div className="flex items-center flex-row justify-between md:flex-row ">

							<h3 className="font-sans text-lg font-medium mb-1 group-hover:text-primary transition-colors">
								{title}
							</h3>
							<p className="text-sm text-muted-foreground mb-2">{date}</p>

						</div>
						<p className="text-muted-foreground line-clamp-2">
							{content.substring(0, 150)}...
						</p>
						{showArrow && (
							<div className="mt-2 text-primary opacity-100 sm:opacity-0 sm:-translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
								Read more →
							</div>
						)}
					</div>
				</Link>
			</div>
		</motion.div>
	);
} 