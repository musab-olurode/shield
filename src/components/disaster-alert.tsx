import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

type DisasterAlertProps = {
	title: string;
	description: string;
	link?: string;
	onClick?: () => void;
};

const DisasterAlertBody = ({
	title,
	description,
	onClick,
}: DisasterAlertProps) => {
	return (
		<div
			className='rounded-2xl p-4 flex items-center bg-popover shadow-gray-400 shadow-sm cursor-pointer'
			onClick={onClick}
		>
			<svg
				focusable='false'
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='size-6 text-accent shrink-0 mr-2 self-start'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
				/>
			</svg>
			<div className='text-base'>
				<p className='font-semibold'>{title}</p>
				<p className='text-sm'>{description}</p>
			</div>
			<ChevronRight className='size-6 shrink-0 text-accent' />
		</div>
	);
};

const DisasterAlert = ({ link, ...rest }: DisasterAlertProps) => {
	return link ? (
		<Link href={link}>
			<DisasterAlertBody {...rest} />
		</Link>
	) : (
		<DisasterAlertBody {...rest} />
	);
};

export default DisasterAlert;
