/* eslint-disable react/prop-types */
const Label = ({ title }) => {
	return (
		<div className='bg-emerald-950 border text-sm border-emerald-900 px-2 py-1 rounded-md'>
			<p className='text-emerald-400'>{title}</p>
		</div>
	);
};

export default Label;
