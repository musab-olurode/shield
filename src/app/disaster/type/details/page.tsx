import Nav from '@/components/nav';
import Image from 'next/image';

const PREPARATIONS = [
	{
		image: '/images/preparation-1.jpg',
		title: 'Set up disaster insurance',
	},
	{
		image: '/images/preparation-2.jpg',
		title: 'Check out relocation camps',
	},
	{
		image: '/images/preparation-3.jpeg',
		title: 'Training',
	},
];

const BEFORE_FLOODS = [
	{
		icon: '/images/before-floods-1.png',
		title: 'Keep informed',
	},
	{
		icon: '/images/before-floods-2.png',
		title: 'Prepare an emergency kit',
	},
	{
		icon: '/images/before-floods-3.png',
		title: 'Evacuate if advised',
	},
];

const DURING_FLOODS = [
	{
		icon: '/images/during-floods-1.png',
		title: 'Find evacuation routes',
	},
	{
		icon: '/images/during-floods-2.png',
		title: "Don't drive or ride in flooded area",
	},
	{
		icon: '/images/during-floods-3.png',
		title: 'Disconnect electricity',
	},
];

const AFTER_FLOODS = [
	{
		icon: '/images/after-floods-1.png',
		title: 'Disinfect surfaces',
	},
	{
		icon: '/images/after-floods-2.png',
		title: 'Do not swim in flood water',
	},
	{
		icon: '/images/after-floods-3.png',
		title: 'Contact your family members',
	},
];

export default function Page() {
	return (
		<>
			<Nav leftIcon='back' />
			<main className='container pt-[4.5rem] pb-4'>
				<p>Prepare yourself for the Disaster</p>
				<div className='flex gap-x-4 overflow-auto py-2 w-[calc(100%+2rem)] -ml-4 px-4'>
					{PREPARATIONS.map(({ image, title }) => (
						<div
							key={title}
							className='flex flex-col gap-y-2 rounded-2xl shadow-gray-400 shadow-sm overflow-hidden w-[8.9375rem] shrink-0'
						>
							<div className='relative h-32'>
								<Image src={image} alt={title} className='object-cover' fill />
							</div>
							<p className='text-xs text-center pb-2'>{title}</p>
						</div>
					))}
				</div>
				<p className='py-2'>Do&apos;s and Don&apos;ts - Floods</p>
				<p className='text-sm'>Before Floods</p>
				<div className='flex justify-between py-2 px-4 w-full'>
					{BEFORE_FLOODS.map(({ icon, title }) => (
						<div
							key={title}
							className='flex flex-col items-center gap-2 rounded-2xl overflow-hidden'
						>
							<div className='relative h-20 w-full'>
								<Image src={icon} alt={title} className='object-contain' fill />
							</div>
							<p className='text-xs text-center pb-2 w-[70%]'>{title}</p>
						</div>
					))}
				</div>
				<p className='text-sm'>During Floods</p>
				<div className='flex justify-between py-2 px-4 w-full'>
					{DURING_FLOODS.map(({ icon, title }) => (
						<div
							key={title}
							className='flex flex-col items-center gap-2 rounded-2xl overflow-hidden'
						>
							<div className='relative h-20 w-full'>
								<Image src={icon} alt={title} className='object-contain' fill />
							</div>
							<p className='text-xs text-center pb-2 w-[70%]'>{title}</p>
						</div>
					))}
				</div>
				<p className='text-sm'>After Floods</p>
				<div className='flex justify-between py-2 px-4 w-full'>
					{AFTER_FLOODS.map(({ icon, title }) => (
						<div
							key={title}
							className='flex flex-col items-center gap-2 rounded-2xl overflow-hidden'
						>
							<div className='relative h-20 w-full'>
								<Image src={icon} alt={title} className='object-contain' fill />
							</div>
							<p className='text-xs text-center pb-2 w-[70%]'>{title}</p>
						</div>
					))}
				</div>
				<p className='text-sm pb-2'>Latest News</p>
				<div className='rounded-2xl shadow-sm overflow-hidden flex gap-x-2'>
					<div className='relative h-[7.5rem] w-[35%] shrink-0'>
						<Image
							src='/images/flood.jpeg'
							alt='Flood'
							className='object-cover'
							fill
						/>
					</div>
					<div className='p-2'>
						<p className='text-xs line-clamp-2'>
							Heavy rains in Nigeria have caused deadly flooding and landslides
						</p>
						<p className='text-xs pt-2 text-gray-400 line-clamp-4'>
							We are seeing really dramatic scenes here. The Niger Delta River
							that goes through Delta has been flowing at record high levels -
							it was at about 680 feet on Wednesday - and that has inundated
							nearby low-lying areas. Thousands of people have ha
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
