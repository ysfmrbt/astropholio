import Label from './Label';
import PrimaryButton from './PrimaryButton';
import Social from './Social';
/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
	return (
		<section className='h-full flex-col gap-2 p-8 text-center'>
			<div className='mt-20'>
				<h1
					id='fn'
					className='text-4xl md:text-6xl font-bold text-emerald-50'>
					Hi, I'm Youssef Mrabet
				</h1>
			</div>

			<div className='flex flex-wrap justify-center gap-3 mt-3'>
				<Label
					className='grow'
					title="Iot Student Developer @ ENET'COM"
				/>
				<Label title='Tech enthusiast' />
				<Label title='Cats lover' />
			</div>
			<div>
				<div className='my-5 text-md md:text-lg text-emerald-100 leading-loose'>
					<div>
						<p>
							I'm learning to create applications for the Web, Mobile, Desktop
							and Internet of Things.
						</p>
					</div>
				</div>
				<div className='flex-wrap flex justify-center gap-3 items-center'>
					<div>
						<PrimaryButton
							link='cv.pdf'
							content='Download CV'
						/>
					</div>
					<div>
						<a
							className='underline font-semibold text-sm underline-offset-4 decoration-emerald-400 text-emerald-400'
							href='mailto:yssfmrbt@gmail.com'>
							Let's build something together
						</a>
					</div>
				</div>
				<div>
					<Social />
				</div>
			</div>
		</section>
	);
};

export default Hero;
