import DisasterAlert from '@/components/disaster-alert';
import Nav from '@/components/nav';
import LocationCard from '@/components/location-card';
import CustomMap from '@/components/custom-map';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Emergency() {
	return (
		<main className='container pt-[4.5rem]'>
			<Nav leftIcon='back' />
			<section>
				<LocationCard />
				<div className='w-[calc(100%+2rem)] -ml-4 pt-2 pb-6'>
					<CustomMap />
				</div>
				<DisasterAlert
					link='/disaster'
					title='Earthquake occurred nearby'
					description='Estimated magnitude 5.0 about 10 kilometers away. Tap to know more.'
				/>
				<p className='pt-4'>Do you have an emergency situation?</p>
				<p className='pb-2'>Select the type</p>
				<Select>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Type of Disaster' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='water'>Water</SelectItem>
						<SelectItem value='biological'>Biological</SelectItem>
						<SelectItem value='geological'>Geological</SelectItem>
						<SelectItem value='manmade'>Manmade</SelectItem>
						<SelectItem value='industrial'>Industrial</SelectItem>
						<SelectItem value='nuclear'>Nuclear</SelectItem>
					</SelectContent>
				</Select>
				<div className='flex justify-end pt-4'>
					<Link href='/disaster/type'>
						<Button>
							Next
							<ChevronRight className='size-5 ml-2' />
						</Button>
					</Link>
				</div>
			</section>
		</main>
	);
}
