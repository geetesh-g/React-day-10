import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Admin from "./components/Admin";
import Products from "../components/Products";

function App() {
	const [showProd, setShowProd] = useState(false);
	const handleClick = () => {
		setShowProd(!showProd);
	};
	return (
		<div className="App">
			<h1>A little E-commerce Compony</h1>
			<Admin />
			<hr />
			{showProd && <Products />}

			<button onClick={handleClick} className="show-btn">
				{showProd ? "HIDE PRODUCTS" : "SHOW PRODUCTS"}
			</button>
		</div>
	);
}

export default App;
