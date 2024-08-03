'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

type BackButtonProps = {
	show?: boolean;
	variant?: undefined | 'default' | 'link' | 'ghost' | 'outline';
	className?: string | undefined;
};

const BackButton = ({ show = true, variant, className }: BackButtonProps) => {
	const router = useRouter();

	return show ? (
		<Button
			variant={variant || 'ghost'}
			size='icon'
			onClick={router.back}
			className={cn(className, variant === 'outline' && 'bg-gray-50/20')}
			shadowed={false}
		>
			<ArrowLeft className='size-8' />
		</Button>
	) : (
		<div className='size-6'></div>
	);
};

export default BackButton;
