import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		removeConsole: process.env.NODE_ENV !== 'development',
	},
};

const withPWAConfig = withPWA({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	register: true,
	skipWaiting: true,
});

export default withPWAConfig(nextConfig);
