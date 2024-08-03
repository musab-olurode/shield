import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const actionItemVariants = cva(
	'flex items-center cursor-pointer shadow-gray-400 shadow-sm rounded-2xl px-6 [&_svg.chevron]:open:rotate-90 [&_div.content]:open:pb-6',
	{
		variants: {
			variant: {
				default: '',
				accent: 'bg-accent',
				primary: 'border border-primary/50',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

interface ActionItemProps extends VariantProps<typeof actionItemVariants> {
	leftIcon: React.ReactNode;
	title: string;
	link?: string;
	dropdownChildren?: React.ReactNode;
	onClick?: () => void;
}

const ActionItemBody = ({
	leftIcon,
	title,
	variant,
	dropdownChildren,
	onClick,
}: ActionItemProps) => {
	return !!dropdownChildren ? (
		<details className={cn(actionItemVariants({ variant }))} onClick={onClick}>
			<summary className='flex items-center py-6'>
				{leftIcon}
				<div className='grow pl-3'>{title}</div>
				<ChevronRight className='size-6 shrink-0 chevron transition-transform' />
			</summary>
			<div className='content cursor-default'>{dropdownChildren}</div>
		</details>
	) : (
		<div
			className={cn(actionItemVariants({ variant }), 'py-6')}
			onClick={onClick}
		>
			{leftIcon}
			<div className='grow pl-3'>{title}</div>
			<ChevronRight className='size-6 shrink-0' />
		</div>
	);
};

const ActionItem = ({ link, ...rest }: ActionItemProps) => {
	return !!link ? (
		<Link href={link} title={rest.title}>
			<ActionItemBody {...rest} />
		</Link>
	) : (
		<ActionItemBody {...rest} />
	);
};

export default ActionItem;
