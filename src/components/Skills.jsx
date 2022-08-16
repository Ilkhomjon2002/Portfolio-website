import React from "react";
import "../style/skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/meter1.svg";
import { Parallax } from "react-parallax";
import cosmos from "../assets/cosmos-4.jpg";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 749 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 749, min: 0 },
		items: 1,
	},
};

const Skills = () => {
	return (
		<Parallax blur={10} bgImage={cosmos} bgImageAlt="the cat" strength={200}>
			<div className="skill" id="skills">
				<div className="skill-box">
					<h2>Skills</h2>
					<p>These are the technologies those I learned and used.</p>
					<Carousel
						responsive={responsive}
						infinite={true}
						className="skill-slider"
					>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title">Html</h5>
						</div>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title">Css</h5>
						</div>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title">Scss</h5>
						</div>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title">Bootstrap</h5>
						</div>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title"> JavaScript</h5>
						</div>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title"> TypeScript</h5>
						</div>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title"> React.Js</h5>
						</div>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title">Figma</h5>
						</div>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title">Github</h5>
						</div>
						<div className="item">
							<img src={img1} alt="image" />
							<h5 className="title">Linux</h5>
						</div>
					</Carousel>
				</div>
			</div>
		</Parallax>
	);
};

export default Skills;
