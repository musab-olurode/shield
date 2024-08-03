import ActionItem from '@/components/action-item';
import Nav from '@/components/nav';
import LocationCard from '@/components/location-card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
	Contact,
	Flag,
	Flame,
	Hospital,
	Route,
	Siren,
	Users,
} from 'lucide-react';

const DISASTER_DETAILS = [
	{
		title: 'Evacuation Routes',
		link: '/disaster/details/evacuation-routes',
		icon: <Route className='size-6 shrink-0' />,
	},
	{
		title: 'Emergency Contacts',
		icon: <Contact className='size-6 shrink-0' />,
		dropDownChildren: <EmergencyContacts />,
	},
	{
		title: 'Report Incident',
		icon: <Flag className='size-6 shrink-0' />,
		dropDownChildren: <ReportIncident />,
	},
	{
		title: 'Connect With Buddy',
		link: '/disaster/details/connect-with-buddy',
		icon: <Users className='size-6 shrink-0' />,
	},
];

function EmergencyContacts() {
	const CONTACTS = [
		{ name: 'Ambulance', number: '112', icon: <Hospital /> },
		{ name: 'Police', number: '112', icon: <Siren /> },
		{ name: 'Fire', number: '112', icon: <Flame /> },
	];

	return (
		<div className='flex justify-between'>
			{CONTACTS.map((contact, index) => (
				<div
					className='flex flex-col text-center items-center text-xs'
					key={`contact-${index}`}
				>
					{contact.icon}
					<span>{contact.name}</span>
					<span>{contact.number}</span>
				</div>
			))}
		</div>
	);
}

function ReportIncident() {
	return (
		<div>
			<LocationCard />
			<form className='pt-4' action=''>
				<Label htmlFor='details'>Incident Details</Label>
				<Textarea
					placeholder='Explain the incident here...'
					id='details'
					rows={4}
				/>
				<Button
					size='sm'
					className='rounded-full mt-4 px-4'
					type='button'
					shadowed={false}
				>
					Submit
				</Button>
			</form>
		</div>
	);
}

export default function Page() {
	return (
		<>
			<Nav leftIcon='back' />
			<main className='container pt-[4.5rem]'>
				<section>
					<div className='flex flex-col gap-y-2'>
						{DISASTER_DETAILS.map(({ title, icon, link, dropDownChildren }) => (
							<ActionItem
								key={title}
								leftIcon={icon}
								title={title}
								link={link}
								variant='primary'
								dropdownChildren={dropDownChildren}
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
}
