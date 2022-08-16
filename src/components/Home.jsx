import React from "react";
import "../style/home.css";
import { About } from "./About";
import Banner from "./Banner";
import { Contact } from "./Contact";
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
		</div>
	);
};

export default Home;
