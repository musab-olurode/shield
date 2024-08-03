import ActionItem from '@/components/action-item';
import DisasterCategory from '@/components/disaster-category';
import Nav from '@/components/nav';
import {
	Biohazard,
	Flame,
	Mountain,
	Radiation,
	TestTube,
	Waves,
} from 'lucide-react';

const DISASTER_CATEGORY = [
	{
		title: 'Water',
		link: '/disaster/type',
		icon: <Waves className='size-16 shrink-0 text-primary' />,
	},
	{
		title: 'Biological',
		link: '/disaster/type',
		icon: <Biohazard className='size-16 shrink-0 text-primary' />,
	},
	{
		title: 'Geological',
		link: '/disaster/type',
		icon: <Mountain className='size-16 shrink-0 text-primary' />,
	},
	{
		title: 'Manmade',
		link: '/disaster/type',
		icon: <Flame className='size-16 shrink-0 text-primary' />,
	},
	{
		title: 'Industrial',
		link: '/disaster/type',
		icon: <TestTube className='size-16 shrink-0 text-primary' />,
	},
	{
		title: 'Nuclear',
		link: '/disaster/type',
		icon: <Radiation className='size-16 shrink-0 text-primary' />,
	},
];

export default function Page() {
	return (
		<main className='container pt-[4.5rem]'>
			<Nav leftIcon='back' />
			<section>
				<p className='pb-2'>Select the category</p>
				<div className='grid grid-cols-2 gap-4'>
					{DISASTER_CATEGORY.map((props) => (
						<DisasterCategory key={props.title} {...props} />
					))}
				</div>
			</section>
		</main>
	);
}
