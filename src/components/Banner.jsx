import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../style/banner.css";
import { ReactComponent as HeaderImg } from "../assets/header-img.svg";
const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ["Web Developer!", "React Js Developer!"];
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 500;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);
	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);
		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};
	return (
		<div className="BannerContainer" /*ref={ref}*/ id="home">
			<div>
				<h1 className="title">
					Hello I am <span className="highlighted">Ilkhomjon </span> and
				</h1>
				<h1 className="title">
					I am <span className="highlighted"> {text}</span>
				</h1>
			</div>
			<HeaderImg className="header-img"></HeaderImg>
		</div>
	);
};

export default Banner;
