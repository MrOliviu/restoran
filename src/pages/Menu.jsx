import Footer from "components/Footer";
import Nav from "components/Nav";
import MainLayout from "layouts/MainLayout";
import FoodMenu from "components/FoodMenu";
import {Link} from "react-router-dom";

export default function About(props) {

	return (
		<>
			<Nav />
			<MainLayout>
				<main className="bg-hero flex justify-center mb-12">
					<div className='w-full h-96 px-4 flex flex-col items-center justify-center gap-y-6 text-theme-light'>
						<h1 className='font-extrabold text-5xl text-center text-theme-light x-700:text-6xl'>Food Menu</h1>
						<ul className="flex gap-3 font-medium">
							<li><Link to="/" className="text-theme-primary border-b border-transparent hover:border-theme-primary">HOME</Link></li>
							<li className="text-gray-400">/</li>
							<li>MENU</li>
						</ul>
					</div>
				</main>
				<section className='px-6 flex py-12 justify-center mb-12'>
					<div className='flex flex-col max-w-[700px] w-full x-1000:max-w-none items-center'>
						<div className='flex gap-x-4 items-center justify-center'>
							<div className='w-10 h-0.5 bg-theme-primary'></div>
							<h5 className='font-pacifico text-theme-primary text-xl text-center'>Food Menu</h5>
							<div className='w-10 h-0.5 bg-theme-primary'></div>
						</div>
						<h6 className='font-extrabold text-theme-dark text-4xl text-center mb-12 leading-normal'>Most Popular Items</h6>
						<FoodMenu />
					</div>
				</section>
				<Footer />
			</MainLayout>
		</>
	);
}