import React, { useState } from "react";

import miniBank from "../assets/bankist-1.jpg";
import miniBank2 from "../assets/bankist-2.png";
import Trillo from "../assets/trillo-2.jpg";
import Trillo2 from "../assets/trillo.png";
import Houzing from "../assets/houzing-2.jpg";
import Houzing2 from "../assets/houzing.png";
import Memory from "../assets/game-1.jpg";
import Memory2 from "../assets/game-2.png";
import Rock from "../assets/rock-1.png";
import Rock2 from "../assets/rock-2.jpg";
import { FaTimes } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import Img3 from "../assets/cosmos-3.jpg";
import Space from "../assets/space-1.png";
import Space2 from "../assets/space-2.jpg";
import "../style/projects.css";
function Projects() {
	const projectList = [
		{
			name: "Memory Game",
			tools: "JavaScript",
			mainPic: Memory,
			webPic: Memory2,
			type: "Web-Game",
			info: "Game in which you have to find matching numbers/icons ",
			link: "https://memory-game2-delta.vercel.app/",
			gitLink: "https://github.com/Ilkhomjon2002/memory-game",
		},
		{
			name: "Mini Bank",
			tools: "JavaScript",
			mainPic: miniBank,
			webPic: miniBank2,
			type: "Simple online banking app",
			info: "This application allows users to login, transfer funds to other accounts, borrow funds or close the account",
			link: "https://bankist-app-eosin.vercel.app/",
			gitLink: "https://github.com/Ilkhomjon2002/bankist-app",
		},
		{
			name: "Houzing",
			tools: "React JS / Styled Component / Swagger ",
			mainPic: Houzing,
			webPic: Houzing2,
			type: "This site is for selling, renting and buying houses.",
			info: "This is fully developed web-site which integrates with back-end also. There are almost all the features and parts that modern site can contain in this site. It is almost finished, I am STILL WORKING on it ",
			link: "https://intern-bay.vercel.app/home",
			gitLink: "https://github.com/Ilkhomjon2002/intern",
		},
		{
			name: "Trillo",
			tools: "CSS, SASS, Flexbox",
			mainPic: Trillo,
			webPic: Trillo2,
			type: "All-in-one-one booking App",
			info: "Sample website for a touring company that demonstrates modern responsive design ",
			link: "https://trillo-2.vercel.app/",
			gitLink: "https://github.com/Ilkhomjon2002/trillo-2",
		},
		{
			name: "Rock Paper Scissors",
			tools: "CSS,Flexbox",
			mainPic: Rock2,
			webPic: Rock,
			type: "Well-known game",
			info: "Computer based version of popular game. (가위 바위 보) ",
			link: "https://rock-paper-scissors-three-tawny.vercel.app/",
			gitLink: "https://github.com/Ilkhomjon2002/RockPaperScissors",
		},
		{
			name: "Space",
			tools: "React.js / Css",
			mainPic: Space2,
			webPic: Space,
			type: "Simple website that was built with react.",
			info: "This website was built to learn react router dom",
			link: "https://space-lyart-rho.vercel.app/",
			gitLink: "https://github.com/Ilkhomjon2002/space",
		},
	];

	const [click, setClick] = useState({ show: false, id: "" });

	const clickHandler = (n) => setClick({ show: true, id: n });
	const clickExit = () => setClick({ show: false, id: "" });

	return (
		<Parallax
			// blur={10}
			bgImage={Img3}
			bgImageAlt="the cat"
			strength={200}
		>
			<div className="projects" id="projects">
				<h1 className="projects__header">Projects</h1>
				<div className="projects__grid">
					{projectList.map((val, index) => {
						// console.log(projectList);
						return (
							<div className="projects__project1 projects__project">
								<img
									src={val.mainPic}
									alt="projects picture"
									className="projects__img"
								/>
								<div className="projects__top">
									<h1>{val.name}</h1>
									<h2>{val.tools}</h2>
								</div>
								<div className="projects__bottom">
									<button
										className="projects__btn--1 projects__btn"
										onClick={() => clickHandler(index)}
									>
										Learn More
									</button>
								</div>
								)
								{click.show && (
									<div className={"projects__overlay"}>
										<div className={"projects__learn-more-box"}>
											<img
												src={projectList[click.id].webPic}
												alt="web picture"
												className="projects__webpics"
											/>

											<div className="projects__content">
												<h1>{projectList[click.id].name}</h1>
												<h2>{projectList[click.id].type}</h2>
												<p>{projectList[click.id].info}</p>
												<div className="projects__visit-site-box">
													<div className="row">
														<button className="projects__btn--2 projects__btn">
															<a
																href={projectList[click.id].link}
																target="_blank"
																className="projects__link"
															>
																Visit Site
															</a>
														</button>
														<button className="projects__btn--2 projects__btn">
															<a
																href={projectList[click.id].gitLink}
																target="_blank"
																className="projects__link"
															>
																See Code
															</a>
														</button>
													</div>

													<FaTimes
														className="projects__exit"
														onClick={clickExit}
													/>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</Parallax>
	);
}
export default Projects;
