import ActionItem from '@/components/action-item';
import Nav from '@/components/nav';
import { CloudRain, Droplet, Shell, Tornado, Waves, Wind } from 'lucide-react';

const DISASTER_TYPES = [
	{
		title: 'Flood',
		link: '/disaster/type/details',
		icon: <Droplet className='size-6 shrink-0' />,
	},
	{
		title: 'Cyclone',
		link: '',
		icon: <Wind className='size-6 shrink-0' />,
	},
	{
		title: 'Tornado',
		link: '',
		icon: <Tornado className='size-6 shrink-0' />,
	},
	{
		title: 'Hurricane',
		link: '',
		icon: <Shell className='size-6 shrink-0' />,
	},
	{
		title: 'Cloudburst',
		link: '',
		icon: <CloudRain className='size-6 shrink-0' />,
	},
	{
		title: 'Tsunami',
		link: '',
		icon: <Waves className='size-6 shrink-0' />,
	},
];

export default function Page() {
	return (
		<>
			<Nav leftIcon='back' />
			<main className='container pt-[4.5rem]'>
				<section>
					<p>Click on the type of disaster</p>
					<div className='space-y-2 pt-2'>
						{DISASTER_TYPES.map(({ title, icon, link }) => (
							<ActionItem
								key={title}
								leftIcon={icon}
								title={title}
								link={link}
								variant='primary'
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
}
