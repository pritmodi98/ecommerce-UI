import Login from "./pages/login";
import Register from "./pages/register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/product-list";
import ProductDetail from "./pages/product-detail";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/products" element={<ProductList />} />
				<Route
					path="/products/:productName/:productId"
					element={<ProductDetail />}
				/>
			</Routes>
		</div>
	);
}

export default App;
