import BackButton from '@/components/back-button';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { AVATAR_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

type NavProps = {
	leftIcon?: 'menu' | 'back';
	backButtonOnly?: boolean;
	noOutline?: boolean;
};

const Nav = ({
	leftIcon = 'menu',
	backButtonOnly = false,
	noOutline,
}: NavProps) => {
	return (
		<nav className='fixed top-0 w-full z-20'>
			<div
				className={cn(
					'container flex justify-between items-center p-4 ',
					!backButtonOnly && 'bg-background'
				)}
			>
				{leftIcon === 'menu' && !backButtonOnly ? (
					<Button variant='ghost' size='icon' shadowed={false}>
						<Menu className='size-8' />
					</Button>
				) : (
					<BackButton
						variant={backButtonOnly && !noOutline ? 'outline' : 'ghost'}
					/>
				)}
				{!backButtonOnly && (
					<>
						<Link href='/' className='text-primary font-black text-3xl'>
							SHIELD
						</Link>
						<Popover>
							<PopoverTrigger>
								<Avatar>
									<AvatarImage src={AVATAR_URL} />
									<AvatarFallback>JB</AvatarFallback>
								</Avatar>
							</PopoverTrigger>
							<PopoverContent className='flex flex-col divide-y w-fit py-2 px-4 text-sm'>
								<Link className='pb-2' href='/auth/login'>
									Login
								</Link>
								<Link className='pt-2' href='/auth/register'>
									Register
								</Link>
							</PopoverContent>
						</Popover>
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
