import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
	const [products, setProducts] = useState([]);

	// fetch products
	useEffect(() => {
		fetch('http://localhost:5000/products')
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((error) => console.log('error', error));
	}, []);

	// product add to database
	const buyProductHandler = (id) => {
		const buyingProduct = products.find((product) => product.id === id);
		buyingProduct.orderDate = new Date();
		fetchAddProduct(buyingProduct);
	};

	const fetchAddProduct = (product) => {
		fetch('http://localhost:5000/addProduct', {
			method: 'POST',
			body: JSON.stringify(product),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	return (
		<div className='container my-5 mx-auto row row-cols-1 row-cols-md-3 g-4'>
			{products.map((product) => (
				<Product
					key={product.id}
					product={product}
					buyProductHandler={buyProductHandler}
				/>
			))}
		</div>
	);
};

export default Products;
