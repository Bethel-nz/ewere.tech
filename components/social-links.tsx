'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function SocialLinks() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			<div className="flex gap-3 items-center mt-4">
				<Link
					href="#"
					className="text-muted-foreground hover:text-primary transition-colors"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
							<path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0" />
							<path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
						</g>
					</svg>
				</Link>

				<Link
					href="#"
					className="text-muted-foreground hover:text-primary transition-colors"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
							<path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.612-1.614L17 17h-2.778l-3.028-4.193" />
							<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
						</g>
					</svg>
				</Link>

				<Link
					href="#"
					className="text-muted-foreground hover:text-primary transition-colors"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<g fill="none" fillRule="evenodd">
							<path d="M0 0h24v24H0z" />
							<path fill="currentColor" d="M8 6a6 6 0 1 1 0 12A6 6 0 0 1 8 6m9 1c1.5 0 2.5 2.239 2.5 5s-1 5-2.5 5s-2.5-2.239-2.5-5s1-5 2.5-5m4 .5c.38 0 .712.827.88 2.246l.047.443l.019.235l.03.494l.01.259l.012.541L22 12l-.002.282l-.012.541l-.01.26l-.03.493l-.02.235l-.045.443c-.169 1.42-.5 2.246-.881 2.246c-.38 0-.712-.827-.88-2.246l-.047-.443l-.019-.235l-.03-.494l-.01-.259l-.012-.541v-.564l.012-.541l.01-.26l.03-.493l.02-.235l.045-.443c.169-1.42.5-2.246.881-2.246M8 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m8.956 1.403c-.363.8-.456 1.731-.456 2.597s.092 1.798.456 2.597c.018.038.07.038.088 0c.363-.8.456-1.731.456-2.597s-.092-1.798-.456-2.597a.048.048 0 0 0-.088 0" />
						</g>
					</svg>
				</Link>
			</div>
		</motion.div>
	);
} 