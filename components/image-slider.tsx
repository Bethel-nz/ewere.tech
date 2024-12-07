'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const images = [
	'/me/profile-1.webp',
	'/me/profile-2.webp',
	'/me/profile-3.webp',
	'/me/profile-4.webp',
];

export function ImageSlider() {
	const [/*currentIndex*/, setCurrentIndex] = useState(0);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!isDialogOpen) {
			const timer = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % images.length);
			}, 3000);

			return () => clearInterval(timer);
		}
	}, [isDialogOpen]);

	const handleImageClick = () => {
		setIsDialogOpen(true);
		dialogRef.current?.showModal();
	};

	const handleDialogClose = () => {
		setIsDialogOpen(false);
		dialogRef.current?.close();
	};

	return (
		<>
			<div className="relative w-[120px] h-[165px] cursor-pointer overflow-hidden" onClick={handleImageClick}>
				<AnimatePresence mode="wait" initial={false}>
					<div className="absolute inset-0">
						<motion.div
							initial={{ opacity: 0, scale: 1.1 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{
								duration: 0.7,
								ease: [0.4, 0, 0.2, 1] // Custom easing for smooth morphing effect
							}}
						>
							<Image
								src={images[1]}
								alt="Ewere Diagboya"
								width={140}
								height={140}

								className="rounded-lg object-cover w-full h-full"
								priority
							/>
						</motion.div>
					</div>
				</AnimatePresence>
			</div>

			<dialog
				ref={dialogRef}

				className="fixed inset-0 p-4 bg-transparent max-w-2xl w-full m-auto rounded-lg"
				onClick={handleDialogClose}
			>
				<div
					className="relative aspect-square max-h-[80vh] bg-background rounded-lg"
					onClick={(e) => e.stopPropagation()}
				>
					<Image
						src={images[1]}
						alt="Ewere Diagboya"
						fill
						className="object-contain rounded-lg"
						priority
					/>
					<button
						onClick={handleDialogClose}
						className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1.5 hover:bg-black/70 transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</dialog>
		</>
	);
} 