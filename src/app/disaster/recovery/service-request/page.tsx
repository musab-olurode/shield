import ActionItem from '@/components/action-item';
import DisasterDamageSelector from '@/components/disaster-damage-selector';
import Nav from '@/components/nav';
import LocationCard from '@/components/location-card';
import { Button } from '@/components/ui/button';
import {
	Banknote,
	Camera,
	Gavel,
	HandCoins,
	HeartHandshake,
	House,
	HousePlus,
	Upload,
} from 'lucide-react';

const DISASTER_TYPES = [
	{
		title: 'Claim Insurance',
		link: '',
		icon: <House className='size-6 shrink-0' />,
		dropdownChildren: <ClaimInsurance />,
	},
	{
		title: 'Legal Services',
		link: '',
		icon: <Gavel className='size-6 shrink-0' />,
	},
	{
		title: 'Housing Assistance',
		link: '',
		icon: <HousePlus className='size-6 shrink-0' />,
	},
	{
		title: 'Raise Funds',
		link: '',
		icon: <Banknote className='size-6 shrink-0' />,
	},
	{
		title: 'Donate',
		link: '',
		icon: <HandCoins className='size-6 shrink-0' />,
	},
	{
		title: 'Volunteer',
		link: '',
		icon: <HeartHandshake className='size-6 shrink-0' />,
	},
];

function ClaimInsurance() {
	return (
		<div>
			<LocationCard />
			<p className='text-xs pt-6 pb-4'>
				What type of water disaster damaged your property?
			</p>
			<DisasterDamageSelector />
			<p className='text-xs pt-6 pb-4'>Upload your estimate</p>
			<Button
				variant='outline'
				className='w-full border-primary/50 justify-start items-center'
			>
				<Upload className='size-5 mr-2' />
				<div className='flex flex-col items-start'>
					<span className='text-xs font-bold'>Upload a PDF</span>
					<span className='text-xs text-gray-400'>
						Import your estimate from system
					</span>
				</div>
			</Button>
			<p className='text-gray-400 text-center text-xs py-4 font-bold'>OR</p>
			<Button
				variant='outline'
				className='w-full border-primary/50 justify-start items-center'
			>
				<Camera className='size-5 mr-2' />
				<div className='flex flex-col items-start'>
					<span className='text-xs font-bold'>Click a picture</span>
					<span className='text-xs text-gray-400'>
						Printed estimate? Click a picture
					</span>
				</div>
			</Button>
			<div className='flex justify-center pt-6'>
				<Button size='sm' shadowed={false}>
					Submit Claim
				</Button>
			</div>
		</div>
	);
}

export default function Page() {
	return (
		<>
			<Nav leftIcon='back' />
			<main className='container pt-[4.5rem]'>
				<section>
					<p>Service Request</p>
					<div className='space-y-2 pt-2'>
						{DISASTER_TYPES.map(({ title, icon, dropdownChildren }) => (
							<ActionItem
								key={title}
								leftIcon={icon}
								title={title}
								variant='primary'
								dropdownChildren={dropdownChildren}
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
}
