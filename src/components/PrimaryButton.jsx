/* eslint-disable react/prop-types */
const PrimaryButton = ({ link, content }) => {
	return (
		<a
			className='bg-emerald-400 shadow-sm font-semibold text-emerald-950 text-sm px-3 py-2.5 rounded-md'
			href={link}
			download>
			{content}
		</a>
	);
};

export default PrimaryButton;
