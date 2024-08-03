import ActionItem from '@/components/action-item';
import Nav from '@/components/nav';
import { CloudRain, Droplet, Shell, Tornado, Waves, Wind } from 'lucide-react';

const DISASTER_TYPES = [
	{
		title: 'Flood',
		link: '/disaster/recovery/service-request',
		icon: <Droplet className='size-6 shrink-0' />,
	},
	{
		title: 'Cyclone',
		link: '/disaster/recovery/service-request',
		icon: <Wind className='size-6 shrink-0' />,
	},
	{
		title: 'Tornado',
		link: '/disaster/recovery/service-request',
		icon: <Tornado className='size-6 shrink-0' />,
	},
	{
		title: 'Hurricane',
		link: '/disaster/recovery/service-request',
		icon: <Shell className='size-6 shrink-0' />,
	},
	{
		title: 'Cloudburst',
		link: '/disaster/recovery/service-request',
		icon: <CloudRain className='size-6 shrink-0' />,
	},
	{
		title: 'Tsunami',
		link: '/disaster/recovery/service-request',
		icon: <Waves className='size-6 shrink-0' />,
	},
];

export default function Page() {
	return (
		<>
			<Nav leftIcon='back' />
			<main className='container pt-[4.5rem]'>
				<section>
					<p>Your property was damaged due to</p>
					<div className='flex flex-col gap-y-2 pt-2'>
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
