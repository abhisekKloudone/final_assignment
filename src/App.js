import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
	const getCurrentLocal = localStorage.getItem("currentLoggedUser");
	return (
		<div className="App">
			<Router>
				{!getCurrentLocal ? (
					<Route path="/login" element={<Login />} />
				) : (
					<Routes>
						<Route path="/" element={<Home />} />
						{/* <Route path="/login" element={<Login />} /> */}
						<Route path="/signup" element={<Signup />} />
					</Routes>
				)}
				{/* <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes> */}
			</Router>
		</div>
	);
}

export default App;
