import Footer from "components/Footer";
import Nav from "components/Nav";
import MainLayout from "layouts/MainLayout";
import {Link} from "react-router-dom";

export default function About(props) {

	return (
		<>
			<Nav />
			<MainLayout>
				<main className="bg-hero flex justify-center mb-12">
					<div className='w-full h-96 px-4 flex flex-col items-center justify-center gap-y-6 text-theme-light'>
						<h1 className='font-extrabold text-5xl text-center text-theme-light x-700:text-6xl'>Contact Us</h1>
						<ul className="flex gap-3 font-medium">
							<li><Link to="/" className="text-theme-primary border-b border-transparent hover:border-theme-primary">HOME</Link></li>
							<li className="text-gray-400">/</li>
							<li>CONTACT</li>
						</ul>
					</div>
				</main>
				<section className='px-6 flex flex-col py-12 items-center mb-6'>
					<div className='flex flex-col max-w-[700px] w-full x-1000:max-w-none items-center'>
						<div className='flex gap-x-4 items-center justify-center'>
							<div className='w-10 h-0.5 bg-theme-primary'></div>
							<h5 className='font-pacifico text-theme-primary text-xl text-center'>Contact Us</h5>
							<div className='w-10 h-0.5 bg-theme-primary'></div>
						</div>
						<h6 className='font-extrabold text-theme-dark text-4xl text-center mb-12 leading-normal'>Contact For Any Query</h6>
					</div>
					<div className="flex flex-wrap w-full items-center gap-8">
						<ul className="w-full flex flex-wrap gap-8">
							<li className="flex flex-1 flex-col gap-1">
								<div className='flex flex-1 gap-x-4 items-center'>
									<h5 className='font-pacifico text-theme-primary text-xl text-center'>Booking</h5>
									<div className='w-10 h-0.5 bg-theme-primary'></div>
								</div>
								<div className="flex text-theme-dark gap-2 items-center text-md">
									<i className="fa-solid fa-envelope text-theme-primary"></i>
									<p>mail@restoran.com</p>
								</div>
							</li>
							<li className="flex flex-1 flex-col gap-1">
								<div className='flex flex-1 gap-x-4 items-center'>
									<h5 className='font-pacifico text-theme-primary text-xl text-center'>General</h5>
									<div className='w-10 h-0.5 bg-theme-primary'></div>
								</div>
								<div className="flex text-theme-dark gap-2 items-center text-md">
									<i className="fa-solid fa-envelope text-theme-primary"></i>
									<p>mail@restoran.com</p>
								</div>
							</li>
							<li className="flex flex-1 flex-col gap-1">
								<div className='flex flex-1 gap-x-4 items-center'>
									<h5 className='font-pacifico text-theme-primary text-xl text-center'>Technical</h5>
									<div className='w-10 h-0.5 bg-theme-primary'></div>
								</div>
								<div className="flex text-theme-dark gap-2 items-center text-md">
									<i className="fa-solid fa-envelope text-theme-primary"></i>
									<p>mail@restoran.com</p>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<section className='flex justify-center mb-24 px-6'>
					<div className='flex flex-col-reverse w-full justify-center x-800:flex-row gap-4'>
						<div className='w-full rounded overflow-hidden flex-1 min-h-[400px] x-800:min-h-full'>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001779.2213548906!2d-78.4100140780198!3d42.715894090114894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sge!4v1684794449366!5m2!1sen!2sge" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
						<div className='w-full flex flex-col flex-1'>
							<form action="" className='flex flex-col flex-1 gap-4'>
								<div className='flex flex-col w-full gap-4 x-400:flex-row'>
									<input className='w-full x-400:w-1/2 h-14 rounded p-4 focus border border-gray-300' type="text" name='name' placeholder='Your Name'/>
									<input className='w-full x-400:w-1/2 h-14 rounded p-4 focus border border-gray-300' type="text" name="email" placeholder='Your Email'/>
								</div>
								<div className='flex flex-col w-full gap-4 x-400:flex-row'>
									<input className='w-full h-14 rounded p-4 focus border border-gray-300' type="text" name='Subject' placeholder='Subject'/>
								</div>
								<textarea className='w-full rounded p-4 resize-none h-48 focus border border-gray-300' name="Message" id="" cols="30" rows="10" placeholder='Message'></textarea>
								<button className='w-full text-center py-4 bg-theme-primary text-theme-light rounded font-extrabold'>SEND MESSAGE</button>
							</form>
						</div>
					</div>
				</section>
				<Footer />
			</MainLayout>
		</>
	);
}