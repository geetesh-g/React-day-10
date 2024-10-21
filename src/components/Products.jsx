import { useState, useEffect } from "react";
import "../App.css";
import ProdItem from "./ProdItem";
const baseURL = "https://fakestoreapi.com/products";

const fetchData = () => {
	return fetch(`${baseURL}`).then((res) => res.json());
};

function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			const data = await fetchData();
			console.log(data);
			setProducts(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(true);
		}
	};

	return (
		<div>
			<h1>Products</h1>
			<div className="product-list">
				{loading ? (
					<h1>Loading...</h1>
				) : error ? (
					<h1>Something Went Wrong</h1>
				) : products.length <= 0 ? (
					<h1>No Products Available </h1>
				) : (
					products.map((prod) => {
						return <ProdItem key={prod.id} props={prod} />;
					})
				)}
			</div>
		</div>
	);
}

export default Products;
