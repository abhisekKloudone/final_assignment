import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import "./styles/signup.css";

function Signup() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const data = {
		name: name,
		email: email,
		pass: password,
		id: v4(),
	};

	const handleSignup = (e) => {
		e.preventDefault();
		if (!name || !email || !password) {
			alert("Please enter all the Fields");
		} else {
			const userInfo = [
				{
					email: data.email,
					name: data.name,
					pass: data.pass,
					id: data.id,
					address: "",
					website: "",
					github: "",
				},
			];

			localStorage.setItem(email, JSON.stringify(userInfo));
			console.log(JSON.parse(localStorage.getItem("userInfo")));
			navigate("/");
			localStorage.setItem("currentLoggedUser", email);
		}
	};

	return (
		<div className="signup">
			<div className="signup_left">
				<img
					src="https://kloudone.com/wp-content/uploads/2021/03/white-2.png"
					alt=""
				/>
				<p>www.kloudone.com</p>
			</div>
			<div className="signup_right">
				<h2>Sign up Now</h2>
				<input
					className="signup_right_firstInput"
					type="name"
					placeholder="Enter Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className="signup_right_secondInput"
					type="email"
					placeholder="Enter Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="signup_right_thirdInput"
					type="password"
					placeholder="Enter Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button onClick={handleSignup}>SignUp</button>
				<p>
					By Signing up you agree to the <span>Terms of Services</span>
				</p>
				<p className="signup_right_bottomLine">
					Already have an Account ?{" "}
					<span onClick={() => navigate("/login")}>Login</span>
				</p>
			</div>
		</div>
	);
}

export default Signup;
