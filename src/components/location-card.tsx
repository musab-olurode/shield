import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const LocationCard = () => {
	return (
		<div className='flex items-center'>
			<MapPin className='size-8 shrink-0 text-primary' />
			<div className='px-2'>
				<p className='text-sm text-muted-foreground'>Your Location</p>
				<p className='text-sm font-medium'>Ilorin, Kwara</p>
			</div>
			<Button
				variant='outline'
				size='sm'
				className='text-primary border-primary/50 text-sm'
				shadowed={false}
			>
				Change
			</Button>
		</div>
	);
};

export default LocationCard;
