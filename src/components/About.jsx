import React from "react";
import ReactDOM from "react-dom";
import "../style/about.css";
import { Parallax } from "react-parallax";
import Img3 from "../assets/cosmos-2.jpg";
function About() {
	return (
		<Parallax
			// blur={10}
			bgImage={Img3}
			bgImageAlt="the cat"
			strength={200}
		>
			<div className={"About"} id="About">
				<h1 className="About__heading">About</h1>
				<div className="About__content">
					<div className="About__textWrapper">
						<h2>Hello,</h2>
						<h3>
							My name is Ilkhomjon. I am 20-years-old,young and passionate
							web-developer who is learning and trying hard to pursuade his
							dreams.
						</h3>
						<h3>
							Currently I am sophomore student of Gachon Universtiy, IT
							Department. Despite I major in Computer Engeneering, I chose and
							prefer Web-developing for my future career.
						</h3>
						<h3>
							I started learning Web Developing just a year ago. During this
							short time, I finished 15+ online courses, and did 20+ miner and
							3+ big projects. You can check some of my works below 😇
						</h3>
					</div>
					<div className="About__pic"></div>
				</div>
			</div>
		</Parallax>
	);
}

export { About };
