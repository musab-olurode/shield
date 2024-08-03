import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Register() {
	return (
		<main className='container pt-[4.5rem] min-h-screen flex justify-center items-center'>
			<div className='w-full max-w-[20.125rem]'>
				<p className='text-center font-bold text-2xl pb-10'>Sign Up</p>
				<form action=''>
					<div className='space-y-1 pb-4'>
						<Label htmlFor='email'>Email address</Label>
						<Input
							type='email'
							id='email'
							placeholder='Email'
							className='shadow-none'
						/>
					</div>
					<div className='space-y-1 pb-4'>
						<Label htmlFor='password'>Password</Label>
						<Input
							type='password'
							id='password'
							placeholder='Password'
							className='shadow-none'
						/>
					</div>
					<Link href='/'>
						<Button type='button' className='w-full'>
							Register
						</Button>
					</Link>
				</form>
				<div className='flex items-center gap-x-4 py-5'>
					<div className='grow border-t border-muted-foreground'></div>
					<span className='text-muted-foreground font-bold'>OR</span>
					<div className='grow border-t border-muted-foreground'></div>
				</div>
				<div className='space-y-4'>
					<Button
						variant='outline'
						className='w-full relative'
						shadowed={false}
					>
						<svg
							className='absolute left-4 top-1/2 transform -translate-y-1/2 size-5'
							focusable='false'
							width='32'
							height='32'
							viewBox='0 0 32 32'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M29.1786 13.5143H16.275V18.8179H23.6464C23.3286 20.5321 22.3643 21.9821 20.9107 22.9536C19.6821 23.775 18.1143 24.2607 16.2714 24.2607C12.7036 24.2607 9.68571 21.85 8.60714 18.6107C8.33571 17.7893 8.17857 16.9107 8.17857 16.0071C8.17857 15.1036 8.33571 14.225 8.60714 13.4036C9.68929 10.1679 12.7071 7.75714 16.275 7.75714C18.2857 7.75714 20.0893 8.45 21.5107 9.80714L25.4393 5.875C23.0643 3.66071 19.9679 2.30357 16.275 2.30357C10.9214 2.30357 6.28929 5.375 4.03571 9.85357C3.10714 11.7036 2.57857 13.7964 2.57857 16.0107C2.57857 18.225 3.10714 20.3143 4.03571 22.1643C6.28929 26.6429 10.9214 29.7143 16.275 29.7143C19.975 29.7143 23.075 28.4857 25.3393 26.3929C27.9286 24.0071 29.425 20.4929 29.425 16.3179C29.425 15.3464 29.3393 14.4143 29.1786 13.5143Z'
								fill='black'
							/>
						</svg>
						Sign up with Google
					</Button>
					<Button
						variant='outline'
						className='w-full relative'
						shadowed={false}
					>
						<svg
							className='absolute left-4 top-1/2 transform -translate-y-1/2 size-5'
							focusable='false'
							width='32'
							height='32'
							viewBox='0 0 32 32'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M24.4071 16.8464C24.3929 14.4107 25.4964 12.575 27.725 11.2214C26.4786 9.43571 24.5929 8.45357 22.1071 8.26429C19.7536 8.07857 17.1786 9.63571 16.2357 9.63571C15.2393 9.63571 12.9607 8.32857 11.1679 8.32857C7.46786 8.38571 3.53571 11.2786 3.53571 17.1643C3.53571 18.9036 3.85357 20.7 4.48928 22.55C5.33928 24.9857 8.40357 30.9536 11.6 30.8571C13.2714 30.8179 14.4536 29.6714 16.6286 29.6714C18.7393 29.6714 19.8321 30.8571 21.6964 30.8571C24.9214 30.8107 27.6929 25.3857 28.5 22.9429C24.175 20.9036 24.4071 16.9714 24.4071 16.8464ZM20.6536 5.95357C22.4643 3.80357 22.3 1.84643 22.2464 1.14286C20.6464 1.23571 18.7964 2.23214 17.7429 3.45714C16.5821 4.77143 15.9 6.39643 16.0464 8.22857C17.775 8.36071 19.3536 7.47143 20.6536 5.95357Z'
								fill='black'
							/>
						</svg>
						Sign up with Apple
					</Button>
					<Button
						variant='outline'
						className='w-full relative'
						shadowed={false}
					>
						<svg
							className='absolute left-4 top-1/2 transform -translate-y-1/2 size-5'
							focusable='false'
							width='32'
							height='32'
							viewBox='0 0 32 32'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M29.1429 1.71429H2.85714C2.225 1.71429 1.71429 2.225 1.71429 2.85714V29.1429C1.71429 29.775 2.225 30.2857 2.85714 30.2857H29.1429C29.775 30.2857 30.2857 29.775 30.2857 29.1429V2.85714C30.2857 2.225 29.775 1.71429 29.1429 1.71429ZM25.8429 10.0536H23.5607C21.7714 10.0536 21.425 10.9036 21.425 12.1536V14.9071H25.6964L25.1393 19.2179H21.425V30.2857H16.9714V19.2214H13.2464V14.9071H16.9714V11.7286C16.9714 8.03929 19.225 6.02857 22.5179 6.02857C24.0964 6.02857 25.45 6.14643 25.8464 6.2V10.0536H25.8429Z'
								fill='black'
							/>
						</svg>
						Sign up with Facebook
					</Button>
				</div>
				<p className='text-center text-sm text-muted-foreground pt-2'>
					Already have an account?
					<Link href='/auth/login'>
						<Button variant='link'>Log in</Button>
					</Link>
				</p>
			</div>
		</main>
	);
}
