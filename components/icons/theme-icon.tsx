'use client';
import { motion } from 'motion/react';

export const ThemeIcon = ({ isDark }: { isDark: boolean }) => {
	return (
		<motion.svg
			width='1.25rem'
			height='1.25rem'
			viewBox='0 0 24 24'
			animate={{ rotate: isDark ? 40 : 90 }}
			transition={{ duration: 0.7, ease: 'easeInOut' }}
			className='text-gray-800 dark:text-white'
		>
			{/* Base circle */}
			<motion.circle
				cx='12'
				cy='12'
				r='6'
				fill='currentColor'
				animate={{
					r: isDark ? 6 : 4,
				}}
			/>

			{/* Sun dots */}
			<g>
				{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
					<motion.circle
						key={`dot-${i}`}
						cx={12 + 8 * Math.cos((Math.PI / 4) * i)}
						cy={12 + 8 * Math.sin((Math.PI / 4) * i)}
						r='1.5'
						fill='currentColor'
						initial={{ scale: 0, opacity: 0 }}
						animate={{
							scale: isDark ? 0 : 1,
							opacity: isDark ? 0 : 1,
						}}
						transition={{
							duration: 0.4,
							delay: isDark ? (7 - i) * 0.05 : i * 0.05,
							ease: 'easeInOut',
						}}
					/>
				))}
			</g>

			{/* Moon overlay - positioned at 45 degrees */}
			<motion.circle
				cx='14'
				cy='6'
				r='6'
				fill='var(--bg-color, #fff)'
				animate={{
					cx: isDark ? 14 : 24,
					opacity: isDark ? 1 : 0,
				}}
				transition={{ duration: 0.7, ease: 'easeInOut' }}
				style={
					{
						'--bg-color': isDark
							? 'var(--bg-nav, rgba(0,0,0,0.5))'
							: 'var(--bg-nav, rgba(255,255,255,0.5))',
					} as React.CSSProperties
				}
			/>
		</motion.svg>
	);
}; 