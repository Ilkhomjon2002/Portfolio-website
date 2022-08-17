import { useEffect, useState } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaMailchimp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "../style/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
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
					<Link
						to="home"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={0}
						duration={1500}
						className={"navbar-link"}
					>
						Home
					</Link>{" "}
					<Link
						to="About"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={-50}
						duration={1500}
						className={"navbar-link"}
					>
						About
					</Link>{" "}
					<Link
						to="projects"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={-50}
						duration={1500}
						className={"navbar-link"}
					>
						Projects
					</Link>
					<Link
						to="skills"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={0}
						duration={1500}
						className={"navbar-link"}
					>
						Skills
					</Link>
					<Link
						to="contact"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={0}
						duration={1500}
						className={"navbar-link"}
					>
						Contact
					</Link>
				</div>
				<div className={click ? "nav-active" : "nav-2"}>
					<Link
						to="home"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={0}
						duration={1500}
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Home
					</Link>{" "}
					<Link
						to="About"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={0}
						duration={1500}
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						About
					</Link>{" "}
					<Link
						to="projects"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={0}
						duration={1500}
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Projects
					</Link>
					<Link
						to="skills"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={0}
						duration={1500}
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Skills
					</Link>
					<Link
						to="contact"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={0}
						duration={1500}
						onClick={() => handleClick()}
						className={"navbar-link"}
					>
						Contact
					</Link>
					<div className="social-icon">
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
				</div>
				<span className="navbar-text">
					<div className="social-icon">
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
