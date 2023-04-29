import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
const Social = () => {
	return (
		<section className='flex w-full justify-center items-center font-medium backdrop-blur my-3'>
			<div>
				<a
					className='m-3'
					href='https://www.linkedin.com/in/yssfmrbt/'
					target='_blank'
					rel='noreferrer'>
					<AiFillLinkedin className='text-emerald-400 text-xl md:text-2xl inline' />
				</a>
				<a
					href='https://github.com/ysfmrbt'
					target='_blank'
					rel='noreferrer'>
					<AiFillGithub className='text-emerald-400 text-xl md:text-2xl inline' />
				</a>
			</div>
		</section>
	);
};

export default Social;
