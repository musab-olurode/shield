import ActionItem from '@/components/action-item';
import Nav from '@/components/nav';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const CONVERSATIONS = [
	{
		title: 'Taiwo Aina',
		link: '/disaster/details/connect-with-buddy/conversations/inner',
		icon: (
			<Avatar>
				<AvatarFallback>TA</AvatarFallback>
			</Avatar>
		),
	},
	{
		title: 'Ibrahim Ilias',
		link: '/disaster/details/connect-with-buddy/conversations/inner',
		icon: (
			<Avatar>
				<AvatarFallback>II</AvatarFallback>
			</Avatar>
		),
	},
	{
		title: 'Himiko Ayinde',
		link: '/disaster/details/connect-with-buddy/conversations/inner',
		icon: (
			<Avatar>
				<AvatarFallback>HA</AvatarFallback>
			</Avatar>
		),
	},
];

export default function Page() {
	return (
		<>
			<Nav leftIcon='back' />
			<main className='container pt-[4.5rem]'>
				<section>
					<div className='flex flex-col gap-y-2'>
						{CONVERSATIONS.map(({ title, icon, link }) => (
							<ActionItem
								key={title}
								leftIcon={icon}
								title={title}
								link={link}
								variant='primary'
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
}
