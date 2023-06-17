import React, { useEffect } from 'react';

export default function Service(props) {

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className='flex flex-col items-center'>
			<div className='bg-slate-50 max-w-[1300px] w-full'>
				{props.children}
			</div>
		</div>
	);
}