import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
	const Formik = useFormik({
		initialValues: {
			fullname: "",
			email: "",
			phone: "",
			message: "",
		},
		onSubmit: () => {},
		validationSchema: Yup.object({
			email: Yup.string().email().required("Valid email is required"),
			fullname: Yup.string().required("Name is required"),
			phone: Yup.string().required("Phone is required"),
			message: Yup.string().required("Message is required"),
		}),
	});
	// console.log(Formik);

	return (
		<form className="contact__form" onSubmit={Formik.handleSubmit}>
			<div className="contact__inputContainer">
				<label htmlFor="fullname" className="contact__label">
					Full Name:
				</label>
				<input
					id="fullname"
					name="fullname"
					type={"text"}
					value={Formik.values.fullname}
					placeholder="Enter full name"
					onChange={Formik.handleChange}
					className="contact__input"
				/>

				{Formik.errors.fullname && Formik.touched.fullname && (
					<div className="contact__errorWindow">
						{Formik.errors.fullname}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</div>
				)}
			</div>
			<div className="contact__inputContainer">
				<label htmlFor="email" className="contact__label">
					Email:
				</label>
				<input
					id="email"
					name="email"
					type={"email"}
					value={Formik.values.email}
					placeholder="Enter email address"
					onChange={Formik.handleChange}
					className="contact__input"
				/>

				{Formik.errors.email && Formik.touched.email && (
					<div className="contact__errorWindow">
						{Formik.errors.email}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</div>
				)}
			</div>
			<div className="contact__inputContainer">
				<label htmlFor="phone" className="contact__label">
					Phone:
				</label>
				<input
					id="phone"
					name="phone"
					type={"text"}
					value={Formik.values.phone}
					placeholder="Enter phone number"
					onChange={Formik.handleChange}
					className="contact__input"
				/>
				{Formik.errors.phone && Formik.touched.phone && (
					<div className="contact__errorWindow">
						{Formik.errors.phone}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</div>
				)}
			</div>
			<div className="contact__inputContainer">
				<label htmlFor="message" className="contact__label">
					Message:
				</label>
				<input
					id="message"
					name="message"
					type="message"
					value={Formik.values.message}
					placeholder="Your Comment..."
					onChange={Formik.handleChange}
					className="contact__input"
				/>
				{Formik.errors.message && Formik.touched.message && (
					<div className="contact__errorWindow">
						{Formik.errors.message}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</div>
				)}
			</div>
			<button className="contact__submit" type={"submit"}>
				Submit <span contact__arrow>→</span>
			</button>
		</form>
		// <ContactForm onSubmit={Formik.handleSubmit}>

		//
		//
		// 	<InputContainer>
		// 		<Label for="message">Message:</Label>
		// 		<Input
		// 			id="message"
		// 			name="message"
		// 			type={"message"}
		// 			value={Formik.values.message}
		// 			placeholder="Your Comment..."
		// 			onChange={Formik.handleChange}
		// 		></Input>
		// 		{Formik.errors.message && Formik.touched.message && (
		// 			<ErrorWindow>
		// 				{Formik.errors.message}{" "}
		// 				<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
		// 			</ErrorWindow>
		// 		)}
		// 	</InputContainer>
		// 	<Submit type={"submit"}>
		// 		Submit <Arrow>→</Arrow>
		// 	</Submit>
		// </ContactForm>
	);
};

export default Login;
