'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const DISASTER_DAMAGE_TYPES = [
	'Floods',
	'Cyclone',
	'Tornado',
	'Hurricane',
	'Cloudburst',
	'Tsunami',
];

const DisasterDamageSelector = () => {
	const [selectedType, setSelectedType] = useState(DISASTER_DAMAGE_TYPES[0]);

	return (
		<ul className='flex flex-col'>
			{DISASTER_DAMAGE_TYPES.map((disasterType, index) => (
				<li
					key={`type-${index}`}
					className='flex justify-between py-1 border-b border-gray-200'
					role='button'
					onClick={() => setSelectedType(disasterType)}
				>
					<span
						className={cn(
							'text-xs text-gray-400',
							selectedType === disasterType && 'text-primary'
						)}
					>
						{disasterType}
					</span>
					{selectedType === disasterType && (
						<Check className='text-primary size-4' />
					)}
				</li>
			))}
		</ul>
	);
};

export default DisasterDamageSelector;
