import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";

function Home() {
	const navigate = useNavigate("");

	const [address, setAddress] = useState("");
	const [website, setWebsite] = useState("");
	const [github, setGithub] = useState("");

	const currentUser = JSON.parse(localStorage.getItem("currentLoggedUser"));

	const getLocalStorageData =
		JSON.parse(localStorage.getItem(currentUser)) || {};

	console.log(currentUser);
	console.log(getLocalStorageData);

	const handleSignout = () => {
		localStorage.setItem("currentLoggedUser", "");
		navigate("/login");
	};

	const handleSave = (e) => {
		e.preventDefault();
		if (!address || !website || !github) {
			alert("Please fillup all the fields");
		} else {
			getLocalStorageData[0].address = address;
			getLocalStorageData[0].website = website;
			getLocalStorageData[0].github = github;

			localStorage.setItem(currentUser, JSON.stringify(getLocalStorageData));
		}
	};

	return (
		<div className="home">
			<div className="home_left">
				<div className="home_left_top">
					<img
						src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
						alt=""
					/>
					<p>Abhisek Kumar</p>
					<p>React Dev</p>

					<div className="home_left_top_button">
						<button className="home_left_top_button_blue">Follow</button>
						<button onClick={handleSignout}>Signout</button>
					</div>
					<div className="home_left_bottom">
						<div className="home_left_bottom_inner">
							<p>Website</p>
							{getLocalStorageData[0]?.website ? (
								<p>{getLocalStorageData[0]?.website}</p>
							) : (
								<p>""</p>
							)}
						</div>
						<div className="home_left_bottom_inner">
							<p>Github</p>
							{getLocalStorageData[0]?.github ? (
								<p>{getLocalStorageData[0]?.github}</p>
							) : (
								<p>""</p>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="home_right">
				<div className="home_right_left">
					<p>Name :</p>
					<p>Email :</p>
					<p>Address :</p>
					<p>Website :</p>
					<p>Github :</p>
				</div>
				<div className="home_right_right">
					<input
						type="name"
						value={getLocalStorageData[0].name}
						// placeholder="name"
					/>
					<input
						type="email"
						value={currentUser}
						// placeholder="email"
					/>
					<input
						type="text"
						placeholder={getLocalStorageData[0]?.address}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
					<input
						type="text"
						placeholder={getLocalStorageData[0]?.website}
						value={website}
						onChange={(e) => setWebsite(e.target.value)}
					/>
					<input
						type="text"
						placeholder={getLocalStorageData[0]?.github}
						value={github}
						onChange={(e) => setGithub(e.target.value)}
					/>
					<button onClick={handleSave}>Save Changes</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
