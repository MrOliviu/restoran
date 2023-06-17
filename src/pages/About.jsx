import TeamMembers from "components/TeamMembers";
import Footer from "components/Footer";
import Nav from "components/Nav";
import AboutUs from "components/AboutUs";
import MainLayout from "layouts/MainLayout";
import {Link} from "react-router-dom";

export default function About(props) {

	return (
		<>
			<Nav />
			<MainLayout>
				<main className="bg-hero flex justify-center mb-12">
					<div className='w-full h-96 px-4 flex flex-col items-center justify-center gap-y-6 text-theme-light'>
						<h1 className='font-extrabold text-5xl text-center text-theme-light x-700:text-6xl'>About Us</h1>
						<ul className="flex gap-3 font-medium">
							<li><Link to="/" className="text-theme-primary border-b border-transparent hover:border-theme-primary">HOME</Link></li>
							<li className="text-gray-400">/</li>
							<li>ABOUT</li>
						</ul>
					</div>
				</main>
				<section className='px-6 py-12 flex justify-center'>
					<AboutUs />
				</section>
				<section className='px-6 flex py-12 justify-center mb-6'>
					<TeamMembers />
				</section>
				<Footer />
			</MainLayout>
		</>
	);
}