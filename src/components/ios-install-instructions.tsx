'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const IOSInstallInstructions = () => {
	const [isDismissed, setIsDismissed] = useState(false);

	useEffect(() => {
		if (typeof window == 'undefined') return;

		const dismissed = localStorage.getItem('ios-install-dismissed');
		if (dismissed) {
			setIsDismissed(true);
		}
	}, []);

	if (typeof window == 'undefined') return null;

	const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

	if (!isIOS || isDismissed) return null;

	const handleOnClickDismiss = () => {
		localStorage.setItem('ios-install-dismissed', 'true');
		setIsDismissed(true);
	};

	return (
		<div className='fixed bottom-0 z-10 w-full'>
			<div className='container p-2 bg-background border-t border-gray-100'>
				<p className='text-sm'>To install this app on your iOS device:</p>
				<ol className='list-disc list-inside text-sm text-gray-400'>
					<li>Tap the Share button</li>
					<li>Scroll down and tap &quot;Add to Home Screen&quot;</li>
					<li>Tap &quot;Add&quot; in the top right corner</li>
				</ol>
				<div className='flex justify-end'>
					<Button size='sm' onClick={handleOnClickDismiss}>
						Dismiss
					</Button>
				</div>
			</div>
		</div>
	);
};

export default IOSInstallInstructions;
