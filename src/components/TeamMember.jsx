import React, { useState } from 'react';

export default function TeamMember(props) {

	const [visible, setVisible] = useState(false);

	function reveal() {
		setVisible(true);
	}

	function hide() {
		setVisible(false);
	}

	return (
		<div className='group rounded overflow-hidden'>
			<div onMouseEnter={reveal} onMouseLeave={hide} className='p-4 flex flex-col items-center bg-white'>
				<div className='w-full aspect-square rounded-full mb-6 overflow-hidden'>
					<img src={props.image} alt="shef avatar" className={`duration-500 ease-out ${visible ? "scale-125" : ""}`} />
				</div>
				<h5 className='text-xl text-theme-dark font-extrabold w-max'>{props.name}</h5>
				<p className='text-sm text-theme-dark'>{props.designation}</p>
			</div>
			<div onMouseEnter={reveal} onMouseLeave={hide} className={`flex justify-center gap-2 bg-white duration-500 ease-in-out hide ${visible ? "reveal" : ""}`}>
				<button className='w-10 h-10 bg-theme-primary rounded-t-full flex items-center justify-center text-theme-light text-md'>
					<i className='fab fa-facebook-f'></i>
				</button>
				<button className='w-10 h-10 bg-theme-primary rounded-t-full flex items-center justify-center text-theme-light text-md'>
					<i className='fab fa-twitter'></i>
				</button>
				<button className='w-10 h-10 bg-theme-primary rounded-t-full flex items-center justify-center text-theme-light text-md'>
					<i className='fab fa-instagram'></i>
				</button>
			</div>
		</div>
	);
}