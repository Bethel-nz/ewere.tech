'use client';

import { motion } from 'motion/react';
import { SocialLinks } from './social-links';

export function Footer() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2 }}
		>
			<footer className="mt-24 pb-8 border-t">
				<div className="max-w-screen-md mx-auto px-4 pt-8">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="order-2 sm:order-1">
							<SocialLinks />
						</div>
						<div className="order-1 sm:order-2 text-sm text-muted-foreground">
							&copy; 2024 Ewere Diagboya
						</div>
					</div>
				</div>
			</footer>
		</motion.div>
	);
}
