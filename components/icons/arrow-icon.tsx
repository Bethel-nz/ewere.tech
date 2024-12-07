'use client';

import { motion } from 'motion/react';

export function ArrowIcon() {
	return (
		<motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
			<motion.path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" initial={{ x: 0 }} animate={{ x: 2 }} transition={{ duration: 0.2 }} />
		</motion.svg>

	);
} 