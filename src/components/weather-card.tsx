import { Cloudy } from 'lucide-react';
import React from 'react';

const WeatherCard = () => {
	return (
		<div className='px-8 py-12 rounded-2xl border border-input mt-6 flex justify-between items-center'>
			<div className='w-fit flex flex-col items-center'>
				<p className='font-medium text-2xl'>28°C</p>
				<p>Partly Clouded</p>
			</div>
			<Cloudy className='size-20' />
		</div>
	);
};

export default WeatherCard;
