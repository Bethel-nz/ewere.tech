'use client';

import { useEffect, useState } from 'react';

export function TransitionProvider({ children }: { children: React.ReactNode }) {
	const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsTransitionEnabled(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return <div className={isTransitionEnabled ? '' : 'transition-preload'}>{children}</div>;
} 