import Nav from '@/components/nav';
import LocationCard from '@/components/location-card';
import { Button } from '@/components/ui/button';
import WeatherCard from '@/components/weather-card';
import { ChevronRight, TriangleAlert } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Disaster() {
	return (
		<>
			<Nav backButtonOnly noOutline />
			<main className='container'>
				<header className='bg-accent rounded-b-[4rem] pb-6 pt-12 -mx-4'>
					<div className='container'>
						<div className='flex flex-col items-center gap-y-1'>
							<TriangleAlert className='size-10' />
							<h1 className='text-2xl font-semibold'>Earthquake</h1>
							<h2>10 kilometers away</h2>
							<div className='flex flex-col items-center'>
								<p className='text-2xl font-semibold'>5.0</p>
								<p>Magnitude</p>
							</div>
						</div>
					</div>
				</header>
				<section>
					<p className='text-center text-xl font-medium py-6'>Take Action</p>
					<div className='relative w-full aspect-[6/3]'>
						<Image
							className='object-contain'
							src='/images/drop-cover-hold-removebg-preview.png'
							alt='Earthquake'
							fill
						/>
					</div>
					<div className='flex justify-center'>
						<Link href='/disaster/details'>
							<Button variant='accent'>
								For more details <ChevronRight className='size-6' />
							</Button>
						</Link>
					</div>
				</section>
				<section className='pt-8'>
					<LocationCard />
					<WeatherCard />
				</section>
			</main>
		</>
	);
}
