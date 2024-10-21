import "../App.css";

function ProdItem({ props }) {
	const { title, price, image } = props;
	return (
		<div className="product-div">
			<figure>
				<img src={image} alt={`${title}'s image`} />
				<hr />
				<h3 className="title">{title.substring(0, 20) + "..."}</h3>
				<h3 className="price">Price : {price} $(USD) </h3>
			</figure>
		</div>
	);
}

export default ProdItem;
