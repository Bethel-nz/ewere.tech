'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowIcon } from './icons/arrow-icon';

interface Award {
	title: string;
	description: string;
}

const awards: Award[] = [
	{
		title: "HACKERNOON CONTRIBUTOR OF THE YEAR - INTERNET",
		description: "The Internet is a mirror of the collective human psyche. And if we are anything, we are chaotic people. The internet, just like the..."
	},
	{
		title: "AWS Community Hero",
		description: "Recognized by Amazon Web Services for my speaking, blogging, and vlogging about AWS services as a community service in Lagos, Nigeria"
	},
	{
		title: "Nigerian Top Executives in IT & Software Industry",
		description: "Rated in the top 5 percent of all Nigerian executives based on company size and international business network strength"
	},
	{
		title: "Category Winner Samsung Apps Developer Contest",
		description: "First in the social network category with TextDeyGo, a Java mobile app for sending bulk SMS, among eighteen finalists in Nigeria"
	},
	{
		title: "Best Server Monitoring Book of All Time",
		description: "Recognition for my book, Infrastructure Monitoring with Amazon CloudWatch"
	}
];

export function Awards() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<section className="mt-8">
				<h2 className="font-sans text-base font-medium mb-4 text-muted-foreground">Awards</h2>
				<div className="space-y-3">
					{awards.map((award, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 * index }}
						>
							<article>
								<Link
									href="https://www.linkedin.com/in/ewere/details/honors/"
									target="_blank"
									rel="noopener noreferrer"
									className="group block hover:bg-muted/50 rounded-lg p-2 -mx-2 transition-colors"
								>
									<div className="flex items-start justify-between">
										<div>
											<h3 className="font-sans text-base font-medium mb-1 group-hover:text-primary transition-colors">
												{award.title}
											</h3>
											<p className="text-sm text-muted-foreground leading-relaxed">
												{award.description}
											</p>
										</div>
										<span className="text-muted-foreground group-hover:text-primary transition-colors pt-1">
											<ArrowIcon />
										</span>
									</div>
								</Link>
							</article>
						</motion.div>
					))}
				</div>
			</section>
		</motion.div>
	);
} 