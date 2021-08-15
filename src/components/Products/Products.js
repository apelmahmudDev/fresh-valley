import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
	const [products, setProducts] = useState([]);

	// fetch products
	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const response = await fetch('http://localhost:5000/products');
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.log('error', error);
			}
		};
		fetchAllProducts();
	}, []);

	// product add to database
	const buyProductHandler = (id) => {
		const buyingProduct = products.find((product) => product.id === id);
		buyingProduct.orderDate = new Date();
		fetchAddProduct(buyingProduct);
	};

	const fetchAddProduct = async (product) => {
		try {
			const config = {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(product),
			};
			const response = await fetch('http://localhost:5000/addProduct', config);
			if (response.ok) {
				return response;
			}
		} catch (error) {
			console.log('error', error);
		}
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
