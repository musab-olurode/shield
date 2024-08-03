import CustomMap from '@/components/custom-map';
import Nav from '@/components/nav';
import { Button } from '@/components/ui/button';
import { MessagesSquare } from 'lucide-react';
import Link from 'next/link';
import '@/styles/fullscreen-map.css';

export default function Page() {
	return (
		<main className='container'>
			<Nav backButtonOnly />
			<div className='w-[calc(100%+2rem)] -ml-4 h-screen relative'>
				<CustomMap
					containerStyle={{ width: '100%', height: '100%' }}
					className='h-full'
				/>
				<div className='flex justify-between gap-x-4 absolute bottom-2 left-0 w-full z-10 p-4'>
					<Link href='/disaster/details/connect-with-buddy/conversations'>
						<Button size='icon' variant='secondary'>
							<MessagesSquare className='text-primary' />
						</Button>
					</Link>
					<Button size='sm'>Refresh</Button>
				</div>
			</div>
		</main>
	);
}
