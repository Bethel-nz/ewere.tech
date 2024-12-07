'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ImageSlider } from './image-slider';
import { SocialLinks } from './social-links';

export function Bio() {
	return (
		<motion.div
			style={{ width: '100%' }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="flex gap-4 items-start mb-4">
				<ImageSlider />
				<div className="pt-2 self-end">
					<h1 className="font-sans text-xl mb-1 font-bold">Hey, I&apos;m Ewere.</h1>
					<p className="text-base text-muted-foreground">Cloud & DevOps Expert.</p>
					<SocialLinks />
				</div>
			</div>

			<div className="space-y-2 text-base">
				<p className="text-muted-foreground leading-relaxed">
					First AWS Community Hero in Africa and AWS Community Leader in Nigeria. Author of{' '}
					<Link
						href="https://www.packtpub.com/en-us/product/infrastructure-monitoring-with-amazon-cloudwatch-9781800566057"
						className="text-primary hover:underline inline-flex items-center gap-0.5"
						target="_blank"
						rel="noopener noreferrer"
					>
						Infrastructure Monitoring with Amazon CloudWatch
						<span className="text-xs">↗</span>
					</Link>
					{' '}and{' '}
					<Link
						href="https://www.amazon.co.uk/Techtionary-dictionary-simplified-meaning-words-ebook/dp/B0BTJDWKRF"
						className="text-primary hover:underline inline-flex items-center gap-0.5"
						target="_blank"
						rel="noopener noreferrer"
					>
						Techtionary
						<span className="text-xs">↗</span>
					</Link>
				</p>

				<p className="text-muted-foreground leading-relaxed">
					I help organizations build and scale their cloud infrastructure, with a focus on AWS services and DevOps practices.
				</p>
			</div>
		</motion.div>
	);
} 