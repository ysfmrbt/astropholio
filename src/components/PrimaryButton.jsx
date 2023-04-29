/* eslint-disable react/prop-types */
const PrimaryButton = ({ link, content }) => {
	return (
		<a
			className='bg-emerald-400 shadow-sm font-semibold text-emerald-950 text-xs md:text-md px-2 py-1.5 md:px-3 md:py-2.5 rounded-md'
			href={link}
			download>
			{content}
		</a>
	);
};

export default PrimaryButton;
