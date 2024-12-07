'use client';

import { useTheme } from 'next-themes';
import { ThemeIcon } from '../icons/theme-icon';
import { useCallback } from 'react';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark';

	const toggleTheme = useCallback(() => {
		setTheme(isDark ? 'light' : 'dark');
	}, [isDark, setTheme]);

	return (
		<button
			onClick={toggleTheme}
			className='w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500'
			data-magnetic='true'
			aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
		>
			<ThemeIcon isDark={!isDark} />
		</button>
	);
} 