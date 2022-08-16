import React from "react";
import Login from "./form";
import { Parallax } from "react-parallax";
import Img3 from "../assets/cosmos-4.jpg";
import "../style/contact.css";

export const Contact = () => {
	return (
		<Parallax blur={10} bgImage={Img3} bgImageAlt="the cat" strength={200}>
			<div className="refContact" id="Contact">
				<div className="contact__window">
					<div className="contact__header-container">
						<h1>Contact</h1>
						<p>Feel free to drop a line below!</p>
					</div>
					<Login></Login>
				</div>
			</div>
		</Parallax>
	);
};
