import React, {  } from 'react';

export default function FoodMenuItem(props) {

	return (
		<div className={`flex gap-x-4 w-full duration-1000`}>
			<div className='rounded overflow-hidden min-w-fit'>
				<img src={require(`images/${props.image}`)} alt="menu item" />
			</div>
			<div className='flex flex-1 flex-col justify-center overflow-hidden'>
				<h5 className='text-lg x-500:text-xl font-extrabold py-1 flex justify-between border-b border-slate-300'>
					<span className='text-theme-dark'>{props.item}</span>
					<span className='text-theme-primary'>${props.price}</span>
				</h5>
				<p title={props.description} className='text-theme-dark italic text-sm py-1 w-full whitespace-nowrap text-ellipsis overflow-hidden'>{props.description}</p>
			</div>
		</div>
	);
}