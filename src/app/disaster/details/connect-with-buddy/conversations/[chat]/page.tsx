import BackButton from '@/components/back-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { LocateFixed, Send } from 'lucide-react';

const MESSAGES = [
	{
		message: 'Hi Taiwo, need a helping hand',
		time: '09:41 am',
		incoming: false,
	},
	{
		message: 'Hello, sure! How can I help you?',
		time: '09:42 am',
		incoming: true,
	},
];

export default function Page() {
	return (
		<main className='container h-screen flex flex-col'>
			<header className='flex items-center gap-x-2 px-2 py-4 border-b-2 border-gray-400 shadow-sm shadow-gray-400/10 -mx-4'>
				<BackButton />
				<div className='flex items-center gap-x-2 grow'>
					<div className='relative'>
						<Avatar>
							<AvatarImage src='https://github.com/shadcn.png' />
							<AvatarFallback>TA</AvatarFallback>
						</Avatar>
						<span className='size-2 rounded-full bg-green-500 absolute bottom-0.5 right-0.5 z-10'></span>
					</div>
					<div className='flex flex-col'>
						<span className='text-sm'>Taiwo Aina</span>
						<span className='text-xs text-gray-400'>Active now</span>
					</div>
				</div>
				<Button size='sm' shadowed={false} className='text-sm h-8'>
					End Chat
				</Button>
			</header>
			<section className='grow pt-2'>
				<p className='text-xs text-center text-gray-400 pb-4'>
					Taiwo is around 2km from your current location
				</p>
				<div className='flex flex-col grow gap-y-2'>
					<div className='flex flex-col gap-y-2 h-[calc(100vh-11rem)] overflow-auto -mb-12 pb-16'>
						{MESSAGES.map(({ message, time, incoming }, index) => (
							<div
								key={`message-${index}`}
								className={cn('flex items-end', !incoming && 'justify-end')}
							>
								{incoming && (
									<Avatar className='size-6 mr-2 -z-[1]'>
										<AvatarImage src='https://github.com/shadcn.png' />
										<AvatarFallback>TA</AvatarFallback>
									</Avatar>
								)}
								<div className='flex flex-col w-full'>
									<span
										className={cn(
											'flex flex-col py-2 px-4 rounded-full w-fit max-w-[80%] text-sm',
											incoming
												? 'bg-gray-100 rounded-bl-none'
												: 'self-end bg-primary text-white rounded-tr-none'
										)}
									>
										{message}
									</span>
									<span
										className={cn(
											!incoming && 'self-end',
											'text-xs text-gray-400'
										)}
									>
										{time}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='pb-2 space-y-4'>
				<Button variant='outline' size='sm'>
					<LocateFixed className='size-4 text-primary mr-2' /> Send Location
				</Button>
				<div className='relative'>
					<Input placeholder='Write your message' className='pr-12' />
					<Button
						className='absolute right-2 top-1/2 -translate-y-1/2'
						size='icon'
						variant='ghost'
						shadowed={false}
					>
						<Send className='text-primary' />
					</Button>
				</div>
			</section>
		</main>
	);
}
