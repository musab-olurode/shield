import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Metadata, Viewport } from 'next';
import InstallBanner from '@/components/install-banner';
import IOSInstallInstructions from '@/components/ios-install-instructions';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

type RootLayoutProps = {
	children: React.ReactNode;
};

export const metadata: Metadata = {
	title: 'Shield',
	description: 'The Disaster Management App',
	generator: 'Next.js',
	manifest: '/manifest.json',
	keywords: [
		'shield',
		'disaster',
		'management',
		'disaster management',
		'natural disaster',
		'natural disaster management',
	],
	authors: [
		{ name: "Olurode Mus'ab" },
		{
			name: "Olurode Mus'ab",
			url: 'https://www.linkedin.com/in/musab-olurode',
		},
	],
	icons: [
		{ rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
		{ rel: 'icon', url: 'icons/icon-128x128.png' },
	],
};

export const viewport: Viewport = {
	themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
	minimumScale: 1,
	initialScale: 1,
	width: 'device-width',
	userScalable: false,
	maximumScale: 1,
	viewportFit: 'cover',
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<IOSInstallInstructions />
				<InstallBanner />
				{children}
			</body>
		</html>
	);
}
