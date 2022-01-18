import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

function Login() {
	const navigate = useNavigate();

	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	useEffect(() => {
		const checkStatus = localStorage.getItem("currentLoggedUser");
		if (checkStatus) {
			alert("You are already LoggedIn");
			// navigate("/");
		}
	}, []);

	const prevData = () => {
		const getData = JSON.parse(localStorage.getItem(loginEmail));

		console.log(getData, "123");

		// {
		// getData.map((item) => {
		// 	if (item.email === loginEmail && item.pass === loginPassword) {
		// 		localStorage.setItem("currentLoggedUser", JSON.stringify(loginEmail));
		// 		navigate("/");
		// 	} else {
		// 		alert("Create an account first");
		// 	}
		// });
		// }

		for (let i = 0; i < getData.length; i++) {
			if (getData.email === loginEmail && getData.pass === loginPassword) {
				localStorage.setItem("currentLoggedUser", JSON.stringify(loginEmail));
				return navigate("/");
			} else {
				return alert("Create an account first");
			}
		}

		// if (!getData) {
		// 	alert("Please create an Account First");
		// } else if (getData.email === loginEmail && getData.pass === loginPassword) {
		// 	localStorage.setItem("currentLoggedUser", JSON.stringify(loginEmail));
		// 	navigate("/");
		// } else return;
	};

	const handleLogin = (e) => {
		e.preventDefault();
		prevData();
	};

	return (
		<div className="login">
			<div className="login_left">
				<img
					src="https://kloudone.com/wp-content/uploads/2021/03/white-2.png"
					alt=""
				/>
				<p>www.kloudone.com</p>
			</div>
			<div className="login_right">
				<h2>Login Now</h2>
				<input
					className="login_right_firstInput"
					type="email"
					placeholder="Enter Email"
					value={loginEmail}
					onChange={(e) => setLoginEmail(e.target.value)}
				/>
				<input
					className="login_right_secondInput"
					type="password"
					placeholder="Enter Password"
					value={loginPassword}
					onChange={(e) => setLoginPassword(e.target.value)}
				/>

				<button onClick={handleLogin}>Login</button>
				<p>
					By Logging in you agree to the <span>Terms of Services</span>
				</p>

				<p className="login_right_bottomLine">
					Are you new Here ?{" "}
					<span onClick={() => navigate("/signup")}>Signup Now</span>
				</p>
			</div>
		</div>
	);
}

export default Login;
