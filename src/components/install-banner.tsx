'use client';

import { Button } from '@/components/ui/button';
import useInstallPrompt from '@/lib/hooks/use-install-prompt';

const InstallBanner = () => {
	const { deferredPrompt, installPromptOutcome, handleInstallClick } =
		useInstallPrompt();

	if (!deferredPrompt || installPromptOutcome === 'accepted') {
		return null; // Don't show the button if installation is not available
	}

	return (
		<div className='fixed bottom-0 z-10 w-full'>
			<div className='container flex gap-x-2 p-2 justify-between items-center bg-background border-t border-gray-100'>
				<p className='text-sm text-gray-400'>
					Install Shield as a Progressive Web App (PWA)
				</p>
				<Button onClick={handleInstallClick}>Install App</Button>
			</div>
		</div>
	);
};

export default InstallBanner;
