import CustomMap from '@/components/custom-map';
import Nav from '@/components/nav';
import { Activity, Calendar, Ruler, Thermometer } from 'lucide-react';
import '@/styles/fullscreen-map.css';

export default function EvacuationRoutes() {
	return (
		<main className='container'>
			<Nav backButtonOnly />
			<div className='w-[calc(100%+2rem)] -ml-4 h-screen relative'>
				<CustomMap
					containerStyle={{ width: '100%', height: '100%' }}
					className='h-full'
				/>
				<div className='flex justify-between gap-x-4 absolute bottom-4 left-4 w-[calc(100%-2rem)] z-10 rounded-2xl p-4 shadow-gray-400 shadow-sm bg-gray-100/80'>
					<div className='flex flex-col items-center text-center'>
						<Thermometer className='size-4' />
						<span className='text-sm'>28°C</span>
						<span className='text-xs'>Temp</span>
					</div>
					<div className='flex flex-col items-center text-center'>
						<Activity className='size-4' />
						<span className='text-sm'>5.0 SR</span>
						<span className='text-xs'>Magnitude</span>
					</div>
					<div className='flex flex-col items-center text-center'>
						<Ruler className='size-4 -rotate-45' />
						<span className='text-sm'>10km</span>
						<span className='text-xs'>Depth</span>
					</div>
					<div className='flex flex-col items-center text-center'>
						<Calendar className='size-4' />
						<span className='text-sm'>26/08</span>
						<span className='text-xs'>Today</span>
					</div>
				</div>
			</div>
		</main>
	);
}
