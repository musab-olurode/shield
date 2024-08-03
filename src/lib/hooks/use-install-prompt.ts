import { useState, useEffect } from 'react';

function useInstallPrompt() {
	const [deferredPrompt, setDeferredPrompt] =
		useState<BeforeInstallPromptEvent | null>(null);
	const [installPromptOutcome, setInstallPromptOutcome] = useState<
		'accepted' | 'dismissed' | null
	>('dismissed');

	useEffect(() => {
		const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault();
			// Stash the event so it can be triggered later
			setDeferredPrompt(e);
		};

		window.addEventListener(
			'beforeinstallprompt',
			handleBeforeInstallPrompt as (e: Event) => void
		);

		const installed = localStorage.getItem('installPromptOutcome');
		if (installed) {
			setInstallPromptOutcome(installed as 'accepted' | 'dismissed');
		}

		return () => {
			window.removeEventListener(
				'beforeinstallprompt',
				handleBeforeInstallPrompt as (e: Event) => void
			);
		};
	}, []);

	const handleInstallClick = async () => {
		if (deferredPrompt) {
			// Show the install prompt
			deferredPrompt.prompt();
			// Wait for the user to respond to the prompt
			const { outcome } = await deferredPrompt.userChoice;
			localStorage.setItem('installPromptOutcome', outcome);
			setInstallPromptOutcome(outcome);
			// Clear the deferredPrompt
			setDeferredPrompt(null);
		}
	};

	return { deferredPrompt, installPromptOutcome, handleInstallClick };
}

export default useInstallPrompt;
