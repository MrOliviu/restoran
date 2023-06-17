import React, { useState } from 'react';
import FoodMenuItem from "components/FoodMenuItem";

export default function FoodMenu(props) {

	const [menuChoice, setMenuChoice] = useState(0);

	function menuChoiceClass(choice) {
		return menuChoice === choice ? "border-theme-primary" : "border-transparent";
	}

	return (
		<>
			<div className='flex gap-x-8 gap-y-4 mb-12 border-b border-slate-300 flex-wrap justify-center'>
				<button onClick={() => setMenuChoice(0)} className={`flex gap-x-4 items-center pb-4 border-b-2 ${menuChoiceClass(0)} overflow-hidden duration-200`}>
					<i className='fa fa-coffee text-theme-primary text-3xl'></i>
					<div className='flex flex-col items-start'>
						<p className='text-theme-dark leading-tight text-sm'>Popular</p>
						<p className='text-theme-dark font-extrabold leading-tight text-md'>Breakfast</p>
					</div>
				</button>
				<button onClick={() => setMenuChoice(1)} className={`flex gap-x-4 items-center pb-4 border-b-2 ${menuChoiceClass(1)} overflow-hidden duration-200`}>
					<i className='fa fa-hamburger text-theme-primary text-3xl'></i>
					<div className='flex flex-col items-start'>
						<p className='text-theme-dark leading-tight text-sm'>Special</p>
						<p className='text-theme-dark font-extrabold leading-tight text-md'>Launch</p>
					</div>
				</button>
				<button onClick={() => setMenuChoice(2)} className={`flex gap-x-4 items-center pb-4 border-b-2 ${menuChoiceClass(2)} overflow-hidden duration-200`}>
					<i className='fa fa-utensils text-theme-primary text-3xl'></i>
					<div className='flex flex-col items-start'>
						<p className='text-theme-dark leading-tight text-sm'>Lovely</p>
						<p className='text-theme-dark font-extrabold leading-tight text-md'>Dinner</p>
					</div>
				</button>
			</div>
			<div className='grid grid-cols-1 gap-y-4 gap-x-8 w-full x-1000:grid-cols-2'>
				<FoodMenuItem image="menu-1.jpg" item="Beef Wellington" price="60" description="Tender Beef Tenderloin Wrapped in Puff Pastry with Duxelles" />
				<FoodMenuItem image="menu-2.jpg" item="Lobster Risotto" price="50" description="Creamy Arborio Rice with Succulent Lobster Meat and Shallots" />
				<FoodMenuItem image="menu-3.jpg" item="Crispy Skin Salmon" price="40" description="Pan-Seared Salmon Fillet with Crispy Skin" />
				<FoodMenuItem image="menu-4.jpg" item="Filet Mignon" price="70" description="Grilled Filet Mignon Seasoned to Perfection" />
				<FoodMenuItem image="menu-5.jpg" item="Sticky Toffee Pudding" price="18" description="Decadent Date Cake with Sticky Toffee Sauce" />
				<FoodMenuItem image="menu-6.jpg" item="Roasted Rack of Lamb" price="65" description="Herb-Crusted Roasted Rack of Lamb with Garlic" />
				<FoodMenuItem image="menu-7.jpg" item="Tiramisu" price="15" description="Classic Tiramisu with Ladyfingers, Mascarpone, and Espresso" />
				<FoodMenuItem image="menu-8.jpg" item="Truffle Mac and Cheese" price="35" description="Indulgent Macaroni Pasta with Gourmet Cheese and Truffle Infusion" />
			</div>
		</>
	);
}