import Login from "./pages/login";
import Register from "./pages/register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/product-list";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/products" element={<ProductList />} />
			</Routes>
			{/* <Register />
			<Home /> */}
		</div>
	);
}

export default App;
