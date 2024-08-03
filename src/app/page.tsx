import ActionItem from '@/components/action-item';
import DisasterAlert from '@/components/disaster-alert';
import Nav from '@/components/nav';
import { BriefcaseMedical, HandHelping, Siren } from 'lucide-react';

export default function Home() {
	return (
		<main className='container pt-[4.5rem] h-screen flex flex-col'>
			<Nav />
			<section className='grow'>
				<DisasterAlert
					link='/disaster'
					title='Earthquake occurred nearby'
					description='Estimated magnitude 5.0 about 10 kilometers away. Tap to know more.'
				/>
			</section>
			<section className='flex flex-col gap-y-2 pb-4'>
				<ActionItem
					link='/emergency'
					leftIcon={<Siren className='size-6 shrink-0' />}
					title='Emergency'
					variant='accent'
				/>
				<ActionItem
					link='/disaster/prepare'
					leftIcon={<BriefcaseMedical className='size-6 shrink-0' />}
					title='Prepare for disaster'
					variant='primary'
				/>
				<ActionItem
					link='/disaster/recovery'
					leftIcon={<HandHelping className='size-6 shrink-0' />}
					title='Disaster Recovery'
					variant='primary'
				/>
			</section>
		</main>
	);
}
