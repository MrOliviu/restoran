import React, { useRef, useEffect, Fragment } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import HomePage from "pages/Home";
import AboutPage from "pages/About";
import ServicesPage from "pages/Services";
import MenuPage from "pages/Menu";
import ContactPage from "pages/Contact";

export default function App(props) {

	return (
		<Router>
			<Fragment>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/menu" element={<MenuPage />} />
					<Route path="/service" element={<ServicesPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/*" element={<HomePage />} />
				</Routes>
			</Fragment>
   		 </Router>
	);
}