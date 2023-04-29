import SkillCard from './SkillCard';
const Skills = () => {
	return (
		<section className='my-20 w-4/5'>
			<div className='mb-10'>
				<h2 className='text-2xl md:text-4xl font-bold text-center text-emerald-200'>
					Skills & Technologies
				</h2>
			</div>
			<div>
				<p className='text-lg text-center text-emerald-100 leading-loose'></p>
			</div>
			<div className='grid grid-cols-4 justify-around gap-5 rounded-md'>
				<SkillCard
					logo={{ name: 'java', alt: 'Java logo' }}
					title={'Java'}
				/>
				<SkillCard
					logo={{ name: 'docker', alt: 'Docker logo' }}
					title={'Docker'}
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
			</div>
		</section>
	);
};

export default Skills;
