import React from "react";
import "../style/home.css";
import { About } from "./About";
import Banner from "./Banner";
import { Contact } from "./Contact";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Banner />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
