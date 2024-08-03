import React from 'react';
import Link from 'next/link';

interface ActionItemProps {
	icon: React.ReactNode;
	title: string;
	link?: string;
	onClick?: () => void;
}

const DisasterCategoryBody = ({ icon, title, onClick }: ActionItemProps) => {
	return (
		<div className='flex flex-col items-center'>
			<div
				className='flex items-center justify-center cursor-pointer rounded-2xl p-6 border aspect-square border-primary/50 w-full'
				onClick={onClick}
			>
				{icon}
			</div>
			<div className='pt-2'>{title}</div>
		</div>
	);
};

const DisasterCategory = ({ link, ...rest }: ActionItemProps) => {
	return link ? (
		<Link href={link}>
			<DisasterCategoryBody {...rest} />
		</Link>
	) : (
		<DisasterCategoryBody {...rest} />
	);
};

export default DisasterCategory;
