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
				<div className="max-w-screen-md mx-auto px-4 pt-8 flex items-center justify-between">
					<span>
					<SocialLinks />
					</span>
					<span> &copy; 2024 Ewere Diagboya</span>
				</div>
			</footer>
		</motion.div>
	);
}