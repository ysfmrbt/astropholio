import SkillCard from './SkillCard';
const Skills = () => {
	return (
		<section className='my-20 w-4/5'>
			<div className='mb-10'>
				<h2 className='text-4xl font-bold text-center text-emerald-200'>
					Skills & Technologies
				</h2>
			</div>
			<div>
				<p className='text-lg text-center text-emerald-100 leading-loose'></p>
			</div>
			<div className='grid grid-cols-4 justify-around gap-1 py-5 px-7 rounded-md'>
				<SkillCard
					logo={{ name: 'html', alt: 'HTML logo' }}
					title={'HTML'}
				/>
				<SkillCard
					logo={{ name: 'css', alt: 'CSS logo' }}
					title={'CSS'}
				/>

				<SkillCard
					logo={{ name: 'js', alt: 'Javascript logo' }}
					title={'Javascript'}
				/>
				<SkillCard
					logo={{ name: 'git', alt: 'Git logo' }}
					title={'Git'}
				/>
				<SkillCard
					logo={{ name: 'react', alt: 'React logo' }}
					title={'React'}
				/>
				<SkillCard
					logo={{ name: 'py', alt: 'Python logo' }}
					title={'Python'}
				/>
				<SkillCard
					logo={{ name: 'flask', alt: 'Flask logo' }}
					title={'Flask'}
				/>
				<SkillCard
					logo={{ name: 'php', alt: 'PHP logo' }}
					title={'PHP'}
				/>
				<SkillCard
					logo={{ name: 'symfony', alt: 'Symfony logo' }}
					title={'Symfony'}
				/>
				<SkillCard
					logo={{ name: 'mysql', alt: 'MYSQL logo' }}
					title={'MySQL'}
				/>
				<SkillCard
					logo={{ name: 'java', alt: 'Java logo' }}
					title={'Java'}
				/>
				<SkillCard
					logo={{ name: 'docker', alt: 'Docker logo' }}
					title={'Docker'}
				/>
			</div>
		</section>
	);
};

export default Skills;
