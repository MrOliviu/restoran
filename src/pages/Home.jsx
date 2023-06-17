import Service from "components/Service";
import TeamMembers from "components/TeamMembers";
import FoodMenu from "components/FoodMenu";
import Footer from "components/Footer";
import Nav from "components/Nav";
import AboutUs from "components/AboutUs";
import MainLayout from "layouts/MainLayout";

export default function Home(props) {

	return (
		<>
			<Nav />
			<MainLayout>
				<main className="bg-hero flex justify-center mb-12">
					<div className='w-full py-36 px-4 flex flex-col items-center gap-y-2 text-theme-light x-1000:flex-row x-1000:justify-between x-1200:max-w-[1100px] x-1000:max-w-[1000px]'>
						<div className='flex flex-col items-center x-1000:items-start'>
							<h1 className='mb-2 font-extrabold text-center text-5xl max-w-[400px] text-theme-light x-1000:text-6xl x-1000:max-w-[500px] x-1000:leading-tight x-1000:text-left'>Enjoy Our Delicious Meal</h1>
							<p className='text-lg max-w-[400px] text-center text-theme-light x-1000:max-w-[500px] x-1000:text-left'>A Symphony of Flavors, Experience the Magic of Our Delightful Dishes!</p>
							<button className='bg-theme-primary rounded px-4 py-2 mt-5 font-extrabold text-theme-light x-1000:px-12 x-1000:py-4'>BOOK A TABLE</button>
						</div>
						<div className='w-full mt-8 overflow-hidden flex justify-center max-w-[700px] x-1000:max-w-[500px]'>
						<img src={require("images/hero.png")} alt="hero" className='animate-mySpin'/>
						</div>
					</div>
				</main>
				<section className='px-6 py-12 flex justify-center'>
					<div className='grid grid-cols-1 gap-6 x-600:grid-cols-2 x-1000:grid-cols-4 max-w-[700px] x-1000:max-w-none'>
						<Service icon="fa-solid fa-user-tie" title="Master Chefs" subtitle="A culinary realm ruled by Master Chefs, where flavor reaches its pinnacle!" />
						<Service icon="fa-solid fa-utensils" title="Quality Food" subtitle="Crafted with care, infused with quality: delight in every flavorful bite!" />
						<Service icon="fa fa-cart-plus" title="Online Order" subtitle="Satisfy your cravings, anytime, anywhere: online ordering done right!" />
						<Service icon="fa-solid fa-moped" title="24/7 Service" subtitle="When you need it, we bring it: seamless 24/7 delivery tailored to your schedule!" />
					</div>
				</section>
				<section className='px-6 py-12 flex justify-center'>
					<AboutUs />
				</section>
				<section className='px-6 flex py-12 justify-center'>
					<div className='flex flex-col max-w-[700px] w-full x-1000:max-w-none items-center'>
						<div className='flex gap-x-4 items-center justify-center'>
							<div className='w-10 h-0.5 bg-theme-primary'></div>
							<h5 className='font-pacifico text-theme-primary text-xl text-center'>Food Menu</h5>
							<div className='w-10 h-0.5 bg-theme-primary'></div>
						</div>
						<h6 className='font-extrabold text-theme-dark text-3xl text-center mb-6'>Most Popular Items</h6>
						<FoodMenu />
					</div>
				</section>
				<section className='flex py-12 justify-center'>
					<div className='flex flex-col-reverse w-full justify-center x-800:flex-row'>
						<div className='w-full min-h-[450px]'>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001779.2213548906!2d-78.4100140780198!3d42.715894090114894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sge!4v1684794449366!5m2!1sen!2sge" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
						<div className='bg-theme-dark p-12 px-6 w-full flex flex-col'>
							<div className='flex flex-col'>
								<div className='flex items-center gap-x-3'>
									<h5 className='font-pacifico text-theme-primary text-xl'>Reservation</h5>
									<div className='w-10 h-0.5 bg-theme-primary'></div>
								</div>
								<h6 className='font-extrabold text-theme-light text-3xl mb-6 x-1400:text-4xl'>Book A Table Online</h6>
							</div>
							<form action="" className='flex flex-col flex-1 gap-4'>
								<div className='flex flex-col w-full gap-4 x-400:flex-row'>
									<input className='w-full x-400:w-1/2 h-14 rounded p-4 focus' type="text" name='name' placeholder='Your Name'/>
									<input className='w-full x-400:w-1/2 h-14 rounded p-4 focus' type="text" name="phone" placeholder='Your Phone'/>
								</div>
								<div className='flex flex-col w-full gap-4 x-400:flex-row'>
									<input className='w-full x-400:w-1/2 h-14 rounded p-4 focus' type="text" name="date" placeholder='Date'/>
									<input className='w-full x-400:w-1/2 h-14 rounded p-4 focus' type="text" name="people" placeholder='No Of People'/>
								</div>
								<textarea className='w-full rounded h-32 p-4 resize-none focus' name="request" cols="30" rows="10" placeholder='Special Request'></textarea>
								<button className='w-full text-center py-4 bg-theme-primary text-theme-light rounded font-extrabold'>BOOK NOW</button>
							</form>
						</div>
					</div>
				</section>
				<section className='px-6 flex py-12 justify-center'>
					<TeamMembers />
				</section>
				<Footer />
			</MainLayout>
		</>
	);
}