import { useEffect, useState } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../style/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);
	const [msg, setMsg] = useState("Welcome");
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};
	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
				setMsg("Ilkhomjon");
			} else {
				setScrolled(false);
				setMsg("Welcome");
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};
	return (
		<div className={scrolled ? "navbar scrolled" : "navbar"}>
			<div className="navContainer">
				<a href="#home">
					<span className="msg">{msg}</span>
				</a>
				<div className="hamburger" onClick={handleClick}>
					{click ? (
						<FaTimes size={10} style={{ color: "#ffffff" }} />
					) : (
						<FaBars size={10} style={{ color: "#ffffff" }} />
					)}
				</div>

				<div className="nav">
					<a
						href="#home"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Home
					</a>{" "}
					<a
						href="#About"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						About
					</a>{" "}
					<a
						href="#projects"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Projects
					</a>
					<a
						href="#skills"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Skills
					</a>
					<a
						href="#contact"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Contact
					</a>
				</div>
				<div className={click ? "nav-active" : "nav-2"}>
					<a
						href="#home"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Home
					</a>{" "}
					<a
						href="#About"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						About
					</a>{" "}
					<a
						href="#projects"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Projects
					</a>
					<a
						href="#skills"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Skills
					</a>
					<a
						href="#contact"
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Contact
					</a>
					<div className="social-icon">
						<a href="#">
							<RiKakaoTalkFill></RiKakaoTalkFill>
						</a>
						<a href="https://www.linkedin.com/in/ilhom-maxsudov-087242191/">
							<FaLinkedin></FaLinkedin>
						</a>
						<a href="https://github.com/Ilkhomjon2002">
							<FaGithub></FaGithub>
						</a>
					</div>
				</div>
				<span className="navbar-text">
					<div className="social-icon">
						<a href="#">
							<RiKakaoTalkFill></RiKakaoTalkFill>
						</a>
						<a href="https://www.linkedin.com/in/ilhom-maxsudov-087242191/">
							<FaLinkedin></FaLinkedin>
						</a>
						<a href="https://github.com/Ilkhomjon2002">
							<FaGithub></FaGithub>
						</a>
					</div>
					<a
						className="button"
						href="https://drive.google.com/file/d/12HjGZ7M58blW4U2Dwd0T0Ku5i0TtYDTK/view?usp=sharing"
					>
						<span>Get my Resume</span>
					</a>
				</span>
			</div>
		</div>
	);
};
