'use client';

import { ThemeProvider } from 'next-themes';
import { TransitionProvider } from './transition-provider';
import { useEffect, useState } from 'react';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			storageKey='theme:'
			disableTransitionOnChange={false}
		>
			<TransitionProvider>{children}</TransitionProvider>
		</ThemeProvider>
	);
} 