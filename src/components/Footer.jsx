import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "../style/footer.css";
const Footer = () => {
	return (
		<div className="footer-container">
			<div className="social-icon footer-icons">
				<a href="mailto:ilhommaxsudov3.com">
					<HiMail></HiMail>
				</a>
				<a href="https://www.linkedin.com/in/ilhom-maxsudov-087242191/">
					<FaLinkedin></FaLinkedin>
				</a>
				<a href="https://github.com/Ilkhomjon2002">
					<FaGithub></FaGithub>
				</a>
			</div>
			<div className="nav footer-links">
				<a href="#home" className={"navbar-link"}>
					Home
				</a>{" "}
				<a href="#About" className={"navbar-link"}>
					About
				</a>{" "}
				<a href="#projects" className={"navbar-link"}>
					Projects
				</a>
				<a href="#skills" className={"navbar-link"}>
					Skills
				</a>
				<a href="#contact" className={"navbar-link"}>
					Contact
				</a>
			</div>
			<div className="others">
				<span>01022860204</span>
				<span>ILKHOMJON © 2022</span>
			</div>
		</div>
	);
};

export default Footer;
