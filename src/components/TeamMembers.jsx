import React, { } from 'react';
import TeamMember from "components/TeamMember";

export default function TeamMembers(props) {

	return (
		<div className='flex flex-col w-full max-w-[700px] x-1000:max-w-none items-center'>
			<div className='mb-8'>
				<div className='flex gap-x-4 items-center justify-center'>
					<div className='w-10 h-0.5 bg-theme-primary'></div>
					<h5 className='font-pacifico text-theme-primary text-xl text-center'>Team Members</h5>
					<div className='w-10 h-0.5 bg-theme-primary'></div>
				</div>
				<h6 className='font-extrabold text-theme-dark text-3xl text-center mb-6'>Our Master Chefs</h6>
			</div>
			<div className='grid grid-cols-1 gap-6 w-full max-w-[700px] x-500:grid-cols-2 x-1000:max-w-none x-1000:grid-cols-4'>
				<TeamMember image={require("images/team-1.jpg")} name="Gabriel Valenti" designation="Master Chef" />
				<TeamMember image={require("images/team-2.jpg")} name="Marco Delgado" designation="Master Chef" />
				<TeamMember image={require("images/team-3.jpg")} name="Dominic Russo" designation="Master Chef" />
				<TeamMember image={require("images/team-4.jpg")} name="Sebastian Mitchell" designation="Master Chef" />
			</div>
		</div>
	);
}