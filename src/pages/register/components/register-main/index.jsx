import React from "react";
import "./register-main.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const RegisterMain = () => {
	return (
		<div className="register-main">
			<div className="register-container">
				<h1 className="main-heading">Create Account 😃</h1>

				<FloatingLabel
					controlId="floatingFullName"
					label="Full Name"
					className="my-4"
				>
					<Form.Control type="text" placeholder="Firstname Lastname" required />
				</FloatingLabel>

				<FloatingLabel
					controlId="floatingMobile"
					label="Mobile Number"
					className="my-4"
				>
					<Form.Control type="number" placeholder="0000000" required />
				</FloatingLabel>

				<FloatingLabel
					controlId="floatingEmail"
					label="Email Address"
					className="my-4"
				>
					<Form.Control type="email" placeholder="Email Address" required />
				</FloatingLabel>

				<FloatingLabel
					controlId="floatingDateOfBirth"
					label="Date of birth (DD/MM/YYYY)"
					className="my-4"
				>
					<Form.Control type="email" placeholder="DD/MM/YYYY" required />
				</FloatingLabel>

				<FloatingLabel
					controlId="floatingPassword"
					label="Password"
					className="my-4"
				>
					<Form.Control type="password" placeholder="*******" required />
				</FloatingLabel>

				<FloatingLabel
					controlId="floatingConfirmPassword"
					label="Confirm Password"
					className="my-4"
				>
					<Form.Control type="password" placeholder="*******" required />
				</FloatingLabel>

				<div className="form-container my-4">
					<button className="main-btn p-2">Create Account</button>
				</div>

				<h3 className="heading-sub">
					Already Have an Account?
					<a href="/login" className="text-pink size-medium mx-2">
						Login here
					</a>
				</h3>
			</div>
		</div>
	);
};

export default RegisterMain;
