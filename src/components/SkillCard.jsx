/* eslint-disable react/prop-types */
const SkillCard = ({ logo, title }) => {
	return (
		<div className='py-7 flex flex-col justify-center items-center rounded-md'>
			<div className='mb-4'>
				<img
					className='w-8 md:w-16 shadow-sm'
					src={`https://skillicons.dev/icons?i=${logo?.name}`}
					alt={logo?.alt}
				/>
			</div>
			<div>
				<h3 className='text-leading text-center text-neutral-300'>{title}</h3>
			</div>
		</div>
	);
};

export default SkillCard;
