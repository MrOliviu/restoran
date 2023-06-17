import MainLayout from "layouts/MainLayout";
import Footer from "components/Footer";
import Nav from "components/Nav";
import Service from "components/Service";
import {Link} from "react-router-dom";

export default function Services(props) {

	return (
		<>
			<Nav />
			<MainLayout>
				<main className="bg-hero flex justify-center mb-12">
					<div className='w-full h-96 px-4 flex flex-col items-center justify-center gap-y-6 text-theme-light'>
						<h1 className='font-extrabold text-5xl text-center text-theme-light x-700:text-6xl'>Services</h1>
						<ul className="flex gap-3 font-medium">
							<li><Link to="/" className="text-theme-primary border-b border-transparent hover:border-theme-primary">HOME</Link></li>
							<li className="text-gray-400">/</li>
							<li>SERVICE</li>
						</ul>
					</div>
				</main>
				<section className='px-6 py-12 mb-24 flex flex-col items-center'>
					<div className='flex gap-x-4 items-center justify-center'>
						<div className='w-10 h-0.5 bg-theme-primary'></div>
						<h5 className='font-pacifico text-theme-primary text-xl text-center'>Our Services</h5>
						<div className='w-10 h-0.5 bg-theme-primary'></div>
					</div>
					<h6 className='font-extrabold text-theme-dark text-4xl leading-normal text-center mb-12'>Explore Our Services</h6>
					<div className='grid grid-cols-1 gap-6 x-600:grid-cols-2 x-1000:grid-cols-4 max-w-[700px] x-1000:max-w-none'>
						<Service icon="fa-solid fa-user-tie" title="Master Chefs" subtitle="A culinary realm ruled by Master Chefs, where flavor reaches its pinnacle!" />
						<Service icon="fa-solid fa-utensils" title="Quality Food" subtitle="Crafted with care, infused with quality: delight in every flavorful bite!" />
						<Service icon="fa fa-cart-plus" title="Online Order" subtitle="Satisfy your cravings, anytime, anywhere: online ordering done right!" />
						<Service icon="fa-solid fa-moped" title="24/7 Service" subtitle="When you need it, we bring it: seamless 24/7 delivery tailored to your schedule!" />
						<Service icon="fa-solid fa-lightbulb" title="Innovation and Creativity" subtitle="Where Innovation Meets Gastronomic Artistry: Redefining Culinary Boundaries!" />
						<Service icon="fa-solid fa-handshake" title="Strong Work Ethic" subtitle="Excellence through Diligence: Crafting Culinary Perfection!" />
						<Service icon="fa-solid fa-bullseye-arrow" title="Consistency" subtitle="Reliable Excellence, Every Bite, Every Time: Where Consistency Creates Culinary Bliss!" />
						<Service icon="fa-solid fa-face-smile" title="Memorable Experience" subtitle="A Tapestry of Taste and Emotion: Where Dining Becomes a Memorable Symphony!" />
					</div>
				</section>
				<Footer />
			</MainLayout>
		</>
	);
}