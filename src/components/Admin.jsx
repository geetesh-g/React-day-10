import { useState } from "react";

const baseURL = "https://fakestoreapi.com/products";
const style = {
	margin: "auto",
	textAlign: "left",
	width: "30%",
	padding: "5%",
};

const fetchData = (Data) => {
	return fetch(`${baseURL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(Data),
	})
		.then((res) => {
			if (!res.ok) {
				return new Error(`server responded with ${res.status} code`);
			} else {
				return res.json();
			}
		})
		.catch((err) => console.log(err.message));
};

function Admin() {
	const [productData, setProductData] = useState({
		image: "",
		title: "",
		price: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProductData({ ...productData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await postData();
		setProductData({
			image: "",
			title: "",
			price: "",
		});
	};

	const postData = async () => {
		const res = await fetchData(productData);
		console.log(res);
	};

	const { title, price, image } = productData;

	return (
		<div>
			<h1>Add Products Details here</h1>
			<form style={style} onSubmit={handleSubmit}>
				<label>
					Product :{" "}
					<input
						type="text"
						placeholder="Title"
						onChange={handleChange}
						name="title"
						value={title}
					/>
				</label>
				<br />
				<br />
				<label>
					Price :{" "}
					<input
						type="text"
						placeholder="Price"
						onChange={handleChange}
						name="price"
						value={price}
					/>
				</label>
				<br />
				<br />
				<label>
					Image :{" "}
					<input
						type="text"
						placeholder="Image"
						onChange={handleChange}
						name="image"
						value={image}
					/>
				</label>
				<br />
				<br />
				<input type="submit" />
			</form>
		</div>
	);
}

export default Admin;
