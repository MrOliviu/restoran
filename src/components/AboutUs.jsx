import React, { } from 'react';

export default function AboutUs(props) {

	return (
		<div className='flex flex-col gap-8 items-center justify-center max-w-[700px] x-1000:flex-row x-1000:max-w-none'>			
			<div className='grid grid-cols-2 gap-4 flex-1'>
				<div className='flex items-end'>
					<img className='w-full rounded' src={require("images/about-1.jpg")} alt="about-1" />
				</div>
				<div className='flex items-end'>
					<img className='w-[80%] rounded' src={require("images/about-2.jpg")} alt="about-2" />
				</div>
				<div className='flex justify-end items-start'>
					<img className='w-[80%] rounded' src={require("images/about-3.jpg")} alt="about-3" />
				</div>
				<div className=''>
					<img className='w-full rounded' src={require("images/about-4.jpg")} alt="about-4" />
				</div>
			</div>
			<div className='flex-1'>
				<div className='flex items-center gap-x-3'>
					<h5 className='font-pacifico text-theme-primary text-xl'>About Us</h5>
					<div className='w-10 h-0.5 bg-theme-primary'></div>
				</div>
				<h5 className='text-3xl font-extrabold mb-6 text-theme-dark x-1000:text-4xl'>Welcome to <i className='fa-solid fa-utensils text-theme-primary'></i> Restoran</h5>
				<p className='mb-6 text-theme-dark'>Restoran takes pride in offering a dining experience that goes beyond mere sustenance. Every plate that leaves the kitchen is a masterpiece, a harmonious symphony of flavors meticulously balanced to delight your senses.</p>
				<p className='mb-6 text-theme-dark'>The attention to detail, the exquisite flavors, and the dedication to delivering a truly exceptional dining experience make it an unrivaled destination for those seeking an unforgettable gastronomic adventure.</p>
				<div className='grid grid-cols-1 gap-6 mb-6 x-500:grid-cols-2'>
					<div className='flex items-center border-s-[5px] border-theme-primary pl-4 py-2'>
						<p className='text-theme-primary text-4xl font-extrabold mr-4'>15</p>
						<div className="">
							<p className='text-theme-dark text-md leading-tight'>Years of</p>
							<p className='text-theme-dark text-md font-extrabold leading-tight'>EXPERIENCE</p>
						</div>
					</div>
					<div className='flex items-center border-s-[5px] border-theme-primary pl-4 py-2'>
						<p className='text-theme-primary text-4xl font-extrabold mr-4'>50</p>
						<div className="">
							<p className='text-theme-dark text-md leading-tight'>Popular</p>
							<p className='text-theme-dark text-md font-extrabold leading-tight'>MASTER CHEFS</p>
						</div>
					</div>
				</div>
				<button className='bg-theme-primary text-theme-light py-4 px-8 rounded font-extrabold'>READ MORE</button>
			</div>
		</div>
	);
}

