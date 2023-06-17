import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Nav(props) {

	const [isTransparent, setTransparent] = useState(true);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", changeNavBackgroud);
		return () => {
			window.removeEventListener("scroll", changeNavBackgroud);
		}
	});

	function changeNavBackgroud() {
		if (window.scrollY <= 100) {
			if (isTransparent) return;
			setTransparent(true);
		} else {
			if (!isTransparent) return;
			setTransparent(false);
		}
	}

	function toggleNavLinks() {
		setOpen(!isOpen);
	}

	function linksClass() {
		return isOpen ? "reveal" : "hide";
	}

	return (
		<nav className={`w-full flex justify-center bg-theme-dark h-[70px] top-0 z-50 absolute x-1300:fixed ${isTransparent ? "x-1000:bg-transparent" : ""}`}>
			<div className='w-full max-w-[1300px] flex items-center px-6 justify-between x-500:px-12'>
				<Link to="/" className='text-theme-primary text-3xl x-400:text-4xl font-bold flex gap-x-2 x-400:gap-x-4'>
					<i className="fa-solid fa-utensils flex items-center"></i>
					<span className='font-extrabold'>Restoran</span>
				</Link>
				<div className={`${linksClass()}  x-1000:flex x-1000:reveal duration-200 ease-in-out py-8 px-6 x-500:px-12 pt-0 absolute top-full left-0 bg-theme-dark w-full x-1000:relative x-1000:top-0 x-1000:bg-transparent x-1000:p-0`}>
					<ul className='border-t border-gray-600 x-1000:border-t-0 x-1000:pt-0 pt-6 flex flex-col items-center w-full text-theme-light font-bold  gap-6 x-1000:gap-2 text-sm x-1000:flex x-1000:flex-row x-1000:justify-end'>
						<li><Link to="/" className='hover:text-theme-primary duration-100 ease-in-out p-2'>HOME</Link></li>
						<li><Link to="/about" className='hover:text-theme-primary duration-100 ease-in-out p-2'>ABOUT</Link></li>
						<li><Link to="/menu" className='hover:text-theme-primary duration-100 ease-in-out p-2'>MENU</Link></li>
						<li><Link to="/service" className='hover:text-theme-primary duration-100 ease-in-out p-2'>SERVICE</Link></li>
						<li><Link to="/contact" className='hover:text-theme-primary duration-100 ease-in-out p-2'>CONTACT</Link></li>
						<li><button className='px-4 py-2 bg-theme-primary rounded font-extrabold'>BOOK A TABLE</button></li>
					</ul>
				</div>
				<button onClick={toggleNavLinks} className='flex flex-col gap-y-1 px-3 py-0.5 border rounded border-gray-400 x-1000:hidden'>
					<i className='fa fa-bars text-gray-400 text-xl'></i>
				</button>
			</div>
		</nav>
	);
}