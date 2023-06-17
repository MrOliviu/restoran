import React, { } from 'react';

export default function Service(props) {

	return (
		<div className="group flex flex-col px-6 py-10 bg-white rounded hover:bg-theme-primary duration-300 ease-in-out">
			<i className={`${props.icon} text-theme-primary text-5xl mb-4 group-hover:text-theme-light duration-300 ease-in-out`}></i>
			<h5 className="title text-theme-dark font-extrabold text-xl mb-2 group-hover:text-theme-light duration-300 ease-in-out">{props.title}</h5>
			<p className='text-theme-dark text-md group-hover:text-theme-light duration-300 ease-in-out'>{props.subtitle}</p>
		</div>
	);
}