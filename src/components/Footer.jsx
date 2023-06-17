import React, { } from 'react';

export default function Footer(props) {

	return (
		<footer className='bg-theme-dark p-24 px-6 pb-0 flex flex-col x-500:px-12 x-1300:px-24'>
			<div className='grid grid-cols-1 gap-4 x-500:grid-cols-2 x-1000:grid-cols-4'>
				<div className='flex flex-col gap-8'>
					<div className='flex items-center gap-x-3'>
						<h5 className='font-pacifico text-theme-primary text-2xl'>Company</h5>
						<div className='w-12 h-0.5 bg-theme-primary'></div>
					</div>
					<ul className='flex flex-col gap-1'>
						<li className='text-theme-light flex gap-2 items-center'>
							<i className="fa-solid fa-angle-right text-xs font-extrabold"></i>
							<p>About Us</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<i className="fa-solid fa-angle-right text-xs font-extrabold"></i>
							<p>Contact Us</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<i className="fa-solid fa-angle-right text-xs font-extrabold"></i>
							<p>Reservation</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<i className="fa-solid fa-angle-right text-xs font-extrabold"></i>
							<p>Privacy Policy</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<i className="fa-solid fa-angle-right text-xs font-extrabold"></i>
							<p>Terms & Condition</p>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-8'>
					<div className='flex items-center gap-x-3'>
						<h5 className='font-pacifico text-theme-primary text-2xl'>Contact</h5>
						<div className='w-12 h-0.5 bg-theme-primary'></div>
					</div>
					<ul className='flex flex-col gap-1'>
						<li className='text-theme-light flex gap-2 items-center'>
							<i className="fa fa-map-marker-alt text-md w-4 font-extrabold"></i>
							<p>123 Street, New York, USA</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<i className="fa fa-phone-alt text-md w-4 font-extrabold"></i>
							<p>+012 345 67890</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<i className="fa fa-envelope text-md w-4 font-extrabold"></i>
							<p>mail@restoran.com</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<button className='w-10 h-10 rounded-full text-theme-light flex items-center justify-center border border-theme-light hover:bg-theme-light hover:text-theme-primary duration-200 ease-in-out'>
								<i className='fab fa-twitter'></i>
							</button>
							<button className='w-10 h-10 rounded-full text-theme-light flex items-center justify-center border border-theme-light hover:bg-theme-light hover:text-theme-primary duration-200 ease-in-out'>
								<i className='fab fa-facebook-f'></i>
							</button>
							<button className='w-10 h-10 rounded-full text-theme-light flex items-center justify-center border border-theme-light hover:bg-theme-light hover:text-theme-primary duration-200 ease-in-out'>
								<i className='fab fa-youtube'></i>
							</button>
							<button className='w-10 h-10 rounded-full text-theme-light flex items-center justify-center border border-theme-light hover:bg-theme-light hover:text-theme-primary duration-200 ease-in-out'>
								<i className='fab fa-linkedin-in'></i>
							</button>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-8'>
					<div className='flex items-center gap-x-3'>
						<h5 className='font-pacifico text-theme-primary text-2xl'>Opening</h5>
						<div className='w-12 h-0.5 bg-theme-primary'></div>
					</div>
					<ul className='flex flex-col gap-1'>
						<li className='text-theme-light flex gap-2 items-center'>
							<p className='font-extrabold text-lg'>Monday - Saturday</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<p>09AM - 09PM</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<p className='font-extrabold text-lg'>Sunday</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center'>
							<p>10AM - 08PM</p>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-8'>
					<div className='flex items-center gap-x-3'>
						<h5 className='font-pacifico text-theme-primary text-2xl'>Newsletter</h5>
						<div className='w-12 h-0.5 bg-theme-primary'></div>
					</div>
					<ul className='flex flex-col gap-1'>
						<li className='text-theme-light flex gap-2 items-center'>
							<p>Subscribe to our Newsletter!</p>
						</li>
						<li className='text-theme-light flex gap-2 items-center relative w-full max-w-[16rem]'>
							<input className='p-4 text-theme-dark focus rounded w-full pr-28' type="email" placeholder='Your Email' />
							<button className='absolute top-1/2 right-0 -translate-x-2 -translate-y-1/2 bg-theme-primary text-theme-light py-2 px-4 rounded font-extrabold'>SIGNUP</button>
						</li>
					</ul>
				</div>
			</div>
			<div className='py-4 mt-4 border-t border-gray-600'>
				<p className='text-theme-light'>©<span className='border-b border-slate-300'>Restoran</span>, All Rights Reserved.</p>
			</div>
		</footer>
	);
}